---
# layout: post
author: luke_chi
title:  "Dart project setup"
date:   2018-05-13 09:40:57 +0800
categories: dart
tags: 
---

install and setup

{% highlight powershell linenos %}

# Install Choco with PowerShell.exe
Set-ExecutionPolicy Bypass -Scope Process -Force; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
choco upgrade chocolatey

choco install dart-sdk
choco install dart-sdk --pre

choco upgrade dart-sdk
choco upgrade dart-sdk --pre

{% endhighlight %}


The Dart SDK has two release channels:

stable channel: stable releases, updated no more frequently than every 6 weeks; currently 1.24.3.

dev channel: pre-releases, usually updated 1/week; currently 2.0.0-dev.55.0.


pubspec.yaml

{% highlight yaml linenos %}

name: CashFlow
description: AngularDart web app
version: 0.0.1
#homepage: https://www.example.com
#author: Luke.Chi <email@example.com>

environment:
  sdk: '>=2.0.0-dev.53.0 <2.0.0'

dependencies:
  angular: ^5.0.0-alpha
  angular_components: ^0.9.0-alpha
  angular_router: ^2.0.0-alpha
  firebase: ^4.0.0
  build_config: ^0.2.5

dev_dependencies:
  angular_test: ^2.0.0-alpha
  build_runner: ^0.8.6
  build_test: ^0.10.2
  build_web_compilers: ^0.3.7
  mockito: ^2.2.3
  test: ^0.12.30

# Uncomment the following in sdk 1.24+ to make pub serve
# use dartdevc (webdev.dartlang.org/tools/dartdevc).
#web:
#  compiler:
#    debug: dartdevc

{% endhighlight %}


build.yaml

{% highlight yaml linenos %}
targets:
  $default:
    builders:
      angular_components|scss_builder:
        enabled: True
{% endhighlight %}


