---
# layout: post
author: luke_chi
title:  "Dagger - User's Guide"
date:   2019-01-21 09:40:57 +0800
categories: android
tags: dagger
---

CC source: <https://google.github.io/dagger/users-guide/>

The best classes in any application are the ones that do stuff: the BarcodeDecoder, the KoopaPhysicsEngine, and the AudioStreamer. These classes have dependencies; perhaps a BarcodeCameraFinder, DefaultPhysicsEngine, and an HttpStreamer.

To contrast, the worst classes in any application are the ones that take up space without doing much at all: the BarcodeDecoderFactory, the CameraServiceLoader, and the MutableContextWrapper. These classes are the clumsy duct tape that wires the interesting stuff together.

Dagger is a replacement for these FactoryFactory classes that implements the dependency injection design pattern without the burden of writing the boilerplate. It allows you to focus on the interesting classes. Declare dependencies, specify how to satisfy them, and ship your app.

By building on standard javax.inject annotations (JSR 330), each class is easy to test. You don’t need a bunch of boilerplate just to swap the RpcCreditCardService out for a FakeCreditCardService.

Dependency injection isn’t just for testing. It also makes it easy to create reusable, interchangeable modules. You can share the same AuthenticationModule across all of your apps. And you can run DevLoggingModule during development and ProdLoggingModule in production to get the right behavior in each situation.

------

<h2>Why Dagger 2 is Different</h2>
Dependency injection frameworks have existed for years with a whole variety of APIs for configuring and injecting. So, why reinvent the wheel? Dagger 2 is the first to implement the full stack with generated code. The guiding principle is to generate code that mimics the code that a user might have hand-written to ensure that dependency injection is as simple, traceable and performant as it can be. For more background on the design, watch this talk (slides) by +Gregory Kick.

------

<h2>Using Dagger</h2>
We’ll demonstrate dependency injection and Dagger by building a coffee maker. For complete sample code that you can compile and run, see Dagger’s coffee example.

<h3>Declaring Dependencies</h3>
Dagger constructs instances of your application classes and satisfies their dependencies. It uses the javax.inject.Inject annotation to identify which constructors and fields it is interested in.

Use @Inject to annotate the constructor that Dagger should use to create instances of a class. When a new instance is requested, Dagger will obtain the required parameters values and invoke this constructor.

{% highlight java linenos %}

class Thermosiphon implements Pump {
  private final Heater heater;

  @Inject
  Thermosiphon(Heater heater) {
    this.heater = heater;
  }
  ...
}

{% endhighlight %}

Dagger can inject fields directly. In this example it obtains a Heater instance for the heater field and a Pump instance for the pump field.

{% highlight java linenos %}

class CoffeeMaker {
  @Inject Heater heater;
  @Inject Pump pump;
  ...
}

{% endhighlight %}

If your class has @Inject-annotated fields but no @Inject-annotated constructor, Dagger will inject those fields if requested, but will not create new instances. Add a no-argument constructor with the @Inject annotation to indicate that Dagger may create instances as well.

Dagger also supports method injection, though constructor or field injection are typically preferred.

Classes that lack @Inject annotations cannot be constructed by Dagger.

------

<h3>Satisfying Dependencies</h3>

By default, Dagger satisfies each dependency by constructing an instance of the requested type as described above. When you request a CoffeeMaker, it’ll obtain one by calling new CoffeeMaker() and setting its injectable fields.

But @Inject doesn’t work everywhere:

 * Interfaces can’t be constructed.
 * Third-party classes can’t be annotated.
 * Configurable objects must be configured!

For these cases where @Inject is insufficient or awkward, use an @Provides-annotated method to satisfy a dependency. The method’s return type defines which dependency it satisfies.

For example, provideHeater() is invoked whenever a Heater is required:

{% highlight java linenos %}

@Provides static Heater provideHeater() {
  return new ElectricHeater();
}

{% endhighlight %}

It’s possible for @Provides methods to have dependencies of their own. This one returns a Thermosiphon whenever a Pump is required:

{% highlight java linenos %}

@Provides static Pump providePump(Thermosiphon pump) {
  return pump;
}

{% endhighlight %}

All @Provides methods must belong to a module. These are just classes that have an @Module annotation.

{% highlight java linenos %}

@Module
class DripCoffeeModule {
  @Provides static Heater provideHeater() {
    return new ElectricHeater();
  }

  @Provides static Pump providePump(Thermosiphon pump) {
    return pump;
  }
}

{% endhighlight %}

By convention, @Provides methods are named with a provide prefix and module classes are named with a Module suffix.

------

<h3>Building the Graph</h3>

The @Inject and @Provides-annotated classes form a graph of objects, linked by their dependencies. Calling code like an application’s main method or an Android Application accesses that graph via a well-defined set of roots. In Dagger 2, that set is defined by an interface with methods that have no arguments and return the desired type. By applying the @Component annotation to such an interface and passing the module types to the modules parameter, Dagger 2 then fully generates an implementation of that contract.

{% highlight java linenos %}

@Component(modules = DripCoffeeModule.class)
interface CoffeeShop {
  CoffeeMaker maker();
}

{% endhighlight %}

The implementation has the same name as the interface prefixed with Dagger. Obtain an instance by invoking the builder() method on that implementation and use the returned builder to set dependencies and build() a new instance.

{% highlight java linenos %}

CoffeeShop coffeeShop = DaggerCoffeeShop.builder()
    .dripCoffeeModule(new DripCoffeeModule())
    .build();

{% endhighlight %}

Note: If your @Component is not a top-level type, the generated component’s name will include its enclosing types’ names, joined with an underscore. For example, this code:

{% highlight java linenos %}

class Foo {
  static class Bar {
    @Component
    interface BazComponent {}
  }
}

{% endhighlight %}

would generate a component named DaggerFoo_Bar_BazComponent.

Any module with an accessible default constructor can be elided as the builder will construct an instance automatically if none is set. And for any module whose @Provides methods are all static, the implementation doesn’t need an instance at all. If all dependencies can be constructed without the user creating a dependency instance, then the generated implementation will also have a create() method that can be used to get a new instance without having to deal with the builder.

{% highlight java linenos %}

CoffeeShop coffeeShop = DaggerCoffeeShop.create();

{% endhighlight %}

Now, our CoffeeApp can simply use the Dagger-generated implementation of CoffeeShop to get a fully-injected CoffeeMaker.

{% highlight java linenos %}

public class CoffeeApp {
  public static void main(String[] args) {
    CoffeeShop coffeeShop = DaggerCoffeeShop.create();
    coffeeShop.maker().brew();
  }
}

{% endhighlight %}

Now that the graph is constructed and the entry point is injected, we run our coffee maker app. Fun.

{% highlight java linenos %}

$ java -cp ... coffee.CoffeeApp
~ ~ ~ heating ~ ~ ~
=> => pumping => =>
 [_]P coffee! [_]P

{% endhighlight %}

<h4>Bindings in the graph</h4>

The example above shows how to construct a component with some of the more typical bindings, but there are a variety of mechanisms for contributing bindings to the graph. The following are available as dependencies and may be used to generate a well-formed component:

 * Those declared by @Provides methods within a @Module referenced directly by @Component.modules or transitively via @Module.includes
 * Any type with an @Inject constructor that is unscoped or has a @Scope annotation that matches one of the component’s scopes
 * The component provision methods of the component dependencies
 * The component itself
 * Unqualified builders for any included subcomponent
 * Provider or Lazy wrappers for any of the above bindings
 * A Provider of a Lazy of any of the above bindings (e.g., Provider<Lazy<CoffeeMaker>>)
 * A MembersInjector for any type

------

<h3>Singletons and Scoped Bindings</h3>



------

<h3>Reusable scope</h3>



------

<h3>Lazy injections</h3>



------

<h3>Provider injections</h3>



------

<h3>Qualifiers</h3>


------

<h3>Optional bindings</h3>

If you want a binding to work even if some dependency is not bound in the component, you can add a @BindsOptionalOf method to a module:

{% highlight java linenos %}

@BindsOptionalOf abstract CoffeeCozy optionalCozy();

{% endhighlight %}

That means that @Inject constructors and members and @Provides methods can depend on an Optional<CoffeeCozy> object. If there is a binding for CoffeeCozy in the component, the Optional will be present; if there is no binding for CoffeeCozy, the Optional will be absent.

Specifically, you can inject any of the following:

 * Optional<CoffeeCozy> (unless there is a @Nullable binding for CoffeeCozy; see below)
 * Optional<Provider<CoffeeCozy>>
 * Optional<Lazy<CoffeeCozy>>
 * Optional<Provider<Lazy<CoffeeCozy>>>

(You could also inject a Provider or Lazy or Provider of Lazy of any of those, but that isn’t very useful.)

If there is a binding for CoffeeCozy, and that binding is @Nullable, then it is a compile-time error to inject Optional<CoffeeCozy>, because Optional cannot contain null. You can always inject the other forms, because Provider and Lazy can always return null from their get() methods.

An optional binding that is absent in one component can be present in a subcomponent if the subcomponent includes a binding for the underlying type.

You can use either Guava’s Optional or Java 8’s Optional.

------

<h3>Binding Instances</h3>

Often you have data available at the time you’re building the component. For example, suppose you have an application that uses command-line args; you might want to bind those args in your component.

Perhaps your app takes a single argument representing the user’s name that you’d like to inject as @UserName String. You can add a method annotated @BindsInstance to the component builder to allow that instance to be injected in the component.

{% highlight java linenos %}

@Component(modules = AppModule.class)
interface AppComponent {
  App app();

  @Component.Builder
  interface Builder {
    @BindsInstance Builder userName(@UserName String userName);
    AppComponent build();
  }
}

{% endhighlight %}

Your app then might look like

{% highlight java linenos %}

public static void main(String[] args) {
  if (args.length > 1) { exit(1); }
  App app = DaggerAppComponent
      .builder()
      .userName(args[0])
      .build()
      .app();
  app.run();
}

{% endhighlight %}

In the above example, injecting @UserName String in the component will use the instance provided to the Builder when calling this method. Before building the component, all @BindsInstance methods must be called, passing a non-null value (with the exception of @Nullable bindings below).

If the parameter to a @BindsInstance method is marked @Nullable, then the binding will be considered “nullable” in the same way as a @Provides method is nullable: injection sites must also mark it @Nullable, and null is an acceptable value for the binding. Moreover, users of the Builder may omit calling the method, and the component will treat the instance as null.

@BindsInstance methods should be preferred to writing a @Module with constructor arguments and immediately providing those values.

------

<h3>Compile-time Validation</h3>

The Dagger [annotation processor](https://docs.oracle.com/javase/6/docs/api/javax/annotation/processing/package-summary.html){:target="_blank"} is strict and will cause a compiler error if any bindings are invalid or incomplete. For example, this module is installed in a component, which is missing a binding for Executor:

{% highlight java linenos %}

@Module
class DripCoffeeModule {
  @Provides static Heater provideHeater(Executor executor) {
    return new CpuHeater(executor);
  }
}

{% endhighlight %}

When compiling it, javac rejects the missing binding:

{% highlight java linenos %}

[ERROR] COMPILATION ERROR :
[ERROR] error: java.util.concurrent.Executor cannot be provided without an @Provides-annotated method.

{% endhighlight %}

Fix the problem by adding an @Provides-annotated method for Executor to any of the modules in the component. While @Inject, @Module and @Provides annotations are validated individually, all validation of the relationship between bindings happens at the @Component level. Dagger 1 relied strictly on @Module-level validation (which may or may not have reflected runtime behavior), but Dagger 2 elides such validation (and the accompanying configuration parameters on @Module) in favor of full graph validation.

------

<h3>Compile-time Code Generation</h3>

Dagger’s annotation processor may also generate source files with names like CoffeeMaker_Factory.java or CoffeeMaker_MembersInjector.java. These files are Dagger implementation details. You shouldn’t need to use them directly, though they can be handy when step-debugging through an injection. The only generated types you should refer to in your code are the ones Prefixed with Dagger for your component.

------

<h2>Using Dagger In Your Build</h2>

You will need to include the dagger-2.X.jar in your application’s runtime. In order to activate code generation you will need to include dagger-compiler-2.X.jar in your build at compile time. See the [README](https://github.com/google/dagger/blob/master/README.md#installation){:target="_blank"} for more information.

<h2>License</h2>

{% highlight java linenos %}

Copyright 2012 The Dagger Authors

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

{% endhighlight %}
