---

# layout: post

author: luke_chi

title:  "Flutter: Understanding Counter App"
date:   2020-06-10 00:40:57 +0800

categories: [flutter]
tags: []
---

[Flutter: Understanding Counter App](https://medium.com/flutter-community/flutter-understanding-counter-app-ca89de564170){:target="_blank"}

![image](){:target="_blank"}

Introduction

在本文中，我將向您展示預構建的演示Flutter應用程序（即“ Counter App”）的工作方式。

在上一篇文章中，我討論了有狀態和無狀態小部件之間的區別。您必須應用該概念才能了解此Counter App的工作方式。

在演示版Counter App中，您會發現很多評論，如果您是初學者，則一定要仔細閱讀這些評論，因為它們寫得很好，並有助於您理解Flutter應用的基礎知識。

因此，讓我們開始吧。

Import

首先，我們有導入語句。這將導入material.dart包，這有助於在整個應用程序中實現Material Design，對於用於UI設計的大多數Dart文件，您都必須導入此包。

Main

Then you have the main function which has the runApp method containing the first Widget as its argument, in this case,
it is called MyApp.

Stateless Widget (MyApp)

This widget is the root of the app. Here, inside the build method, it returns a Material App widget containing the three
properties: title, theme & home.

title

A one-line description used by the device to identify the app for the user. On Android, the titles appear above the task
manager’s app snapshots which are displayed when the user presses the “recent apps” button. On iOS, this value cannot be
used. theme This property defines the ThemeData widget containing information about different colors, fonts and other
theme data that would be used throughout the app. Here, only one property is defined, primarySwatch which stores the
color blue. But, in your app, you can define any number of theme properties you want.

home

This property contains a Stateful Widget, MyHomePage to which the title is passed on. When you start this app for the
first time this is the widget that will be displayed as the first screen on your device. Stateful Widget (MyHomePage)

This Stateful Widget MyHomePagetakes a constructor containing a key and a title. Here, the title is passed on from the
previous class. You can see that the String title is marked final, this is done because the fields in a Widget subclass
are always marked final if you do not mark this as a final you will get a warning. Now, we have the overridden
createState method which returns the instance of the class_MyHomePageState. State class (_MyHomePageState)
In this class at first, a private integer variable _counter is initialized to zero. After that, we have a private void
method defined called _incrementCounter.

_incrementCounter This method calls the setState method, as I had discussed in my previous article this setState is used
to rebuild the widget tree. In this counter app, we have incremented the _counter variable within this setState. If we
just increment the _counter variable without defining any setState method, then this variable would get updated behind
the scene but we will not see any UI changes as the widget tree would not be rebuilt. build method Now, we have the
overridden build method. As I had already discussed in my previous article, this build method is responsible for the UI
design of the app.

In this app, the build method returns a Scaffold widget containing three properties: appBar, body &
floatingActionButton. appBar This property takes the AppBar widget containing a Text widget which displays the title of
the app.

body This property contains a Column widget which is centered using the Center widget. The column widget contains two
Text widgets, one displaying a text and another displaying the number of counts. The second text widget contains a
property, style which defines the text style for this text widget.

floatingActionButton This property takes the FloatingActionButton widget which displays a FAB at the bottom right corner
of the screen. The FAB widget takes three properties: onPressed, tooltip & child .

onPressed

The onPressed property is used to call the _incrementCounter method which increments the counter by 1 and rebuilds the
widget tree.

tooltip

This property can take a String. The text is displayed when the user long-presses on the button and is used for
accessibility, which means that it won’t be displayed in normal circumstances.

child

As you know, this child widget is used to show anything inside the parent widget. Here, it is used to show a add icon.

Conclusion

So in simple words, the working of this app is that, when the FAB (Floating Action Button) is pressed the _
incrementCounter method is called which increments the counter and rebuilds the widget tree.

We have come to the end of this short article, I hope that this article has helped you in understanding the working of
the Counter App. One thing you should try out in Flutter is the Hot Reload. Let’s try that out before ending this
article.

Hot Reload

If you have gone through the comments, you might have noticed that there is a comment within the ThemeData widget which
tells you how to use the hot reload in Flutter. Let’s try it out.

Run the app on the emulator or a real device.

Let’s change the primarySwatch color to red.

Save the file [Command + S (for MAC), or Ctrl + S (for Windows)]. And you would immediately see that the color of the
appBar and the FAB change to red.

Previous Article in this series of Flutter Basics

Flutter: Stateful vs Stateless Widget

In this article, I will show you what is the difference between Stateful and Stateless Widget.

medium.com

Check out my other articles

Flutter: Adding Bluetooth Functionality

This article will help you to use Bluetooth functionality with Flutter.

link.medium.com

Flutter: Building WearOS app

This article will help you to build a Flutter Wear OS (Android Wear) app from scratch.

link.medium.com

Flutter: Getting Started

If you haven’t yet started developing apps with Flutter, you should get on-board as soon as possible because it is…
medium.com

If you want to support me and want me to continue writing Flutter articles and building some interesting Flutter
projects, please contribute to my Patreon page below:

Souvik Biswas is creating Flutter Apps | Patreon

Become a patron of Souvik Biswas today: Read posts by Souvik Biswas and get access to exclusive content and experiences…
www.patreon.com

You can follow me on Twitter and find some of my projects on GitHub. Also, don’t forget to checkout my Website. Thank
you for reading, if you enjoyed the article make sure to show me some love by hitting that clap (👏) button!

Happy coding…

Souvik Biswas

