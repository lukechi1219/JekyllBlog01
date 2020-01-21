---
# layout: post
author: luke_chi
title:  "Designing Cross platform Flutter prototype for Landing Page"
date:   2020-01-10 00:40:57 +0800
categories: [flutter]
tags: []
---

src <https://ptyagicodecamp.github.io/designing-cross-platform-flutter-prototype-for-landing-page.html>

## Introduction

這篇文章是關於，如何為一個假想的 Flutter 資源 mobile 和 web app - "Flutter-to-Fly !"，設計一個 landing page。這篇文章分為兩部分：

1. Flutter-to-fly Web 的 landing page ("web" branch of source code).
1. Flutter-to-fly Native Android 和 iOS 平台的 landing page ("native" branch of source code).

Checkout the companion video tutorial **Part - 1:**

<iframe width="560" height="315" src="https://www.youtube.com/embed/WJjirsqImy0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<br>

Checkout the companion video tutorial **Part - 2:**

<iframe width="560" height="315" src="https://www.youtube.com/embed/VUYKTTo2jt4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<br>

### Part-1: Flutter-to-fly landing page for Web

Note: As of now (June 3rd, 2019), there's no actually one code base solution exists for cross-platform Flutter. Web app's code uses specific web libraries. Plug-ins used in flutter native apps can't be used in web apps. Its recommended to create a git branch to host web app code for now until web comes out of tech-preview and experimentation.

Setup:

1. Create a Flutter Project in Android Studio.
1. Create a git branch web
1. Copy pubspec.yaml to pubspec.yaml.native for backing up native platform settings. We would need this for native project in another branch say master. I would keep native code in default branch master.

**Configuring** pubspec.yaml: Adapt pubspec.yaml for Web as described in [this link](https://github.com/flutter/flutter_web/blob/master/docs/migration_guide.md){:target="_blank"}. This is how pubspec.yaml for web app will look like:

{% highlight yaml %}

name: landingpage
description: Cross platform sample landing page implemented in Flutter

version: 1.0.0+1

dependencies:
  flutter_web: any

dev_dependencies:
  flutter_web_test: any
  #dependencies to enable the Dart web build system
  build_runner: ^1.2.2
  build_web_compilers: ^1.1.0
  test: ^1.3.4

  ## These overrides tell the package tools to get them from GitHub
dependency_overrides:
  flutter_web:
    git:
      url: https://github.com/flutter/flutter_web
      path: packages/flutter_web
  flutter_web_ui:
    git:
      url: https://github.com/flutter/flutter_web
      path: packages/flutter_web_ui
  flutter_web_test:
    git:
      url: https://github.com/flutter/flutter_web
      path: packages/flutter_web_test

{% endhighlight %}

**Create** web **directory**: Create a web directory to host the entry point for the web app at root level (same level as lib directory). web/index.html and web/main.dart needs to be added as mentioned here

Building web app: Navigate to current working directory and get all dependencies.

{% highlight cmd %}
cd landingpage
pub get
{% endhighlight %}

Dart uses webdev to build and run project. Make sure to activate webdev before building project like below. Don't forget to include it in system PATH using export PATH="$PATH":"$HOME/.pub-cache/bin" after activation.

{% highlight cmd %}
pub global activate webdev
webdev serve
{% endhighlight %}

Web app will start running at localhost port 8080

Note: Make sure that you've replaced all package:flutter packages with package:flutter_web variant.

At this point, we're done with setting up Flutter project to start building web app. You'll see default counter app running, provided as part of built-in examples.

![image](https://ptyagicodecamp.github.io/flutter_web_setup.jpg){:target="_blank"}




----


[](){:target="_blank"}

![image](){:target="_blank"}
