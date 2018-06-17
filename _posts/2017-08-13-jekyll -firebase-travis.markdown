---
# layout: post
author: luke_chi
title:  "Jekyll + Firebase + Travis"
date:   2017-08-13 13:54:57 +0800
categories: jekyll
tags:
---

Here's simple cmd to install Jekyll and deploy it to Firebase + Travis CI:

{% highlight ruby %}

choco install ruby --version 2.4.3.1 -y
ridk install
gem install bundler
gem install jekyll
bundle check
bundle install
https://blog-host-d6b29.firebaseapp.com/jekyll/2017/09/05/fix-sass-encoding-on-windows.html

jekyll new {site-dir-name}

cd {site-dir-name}

jekyll serve

choco install nodejs.install -Version=6.11.0

npm install -g firebase-tools

firebase login

firebase init

firebase deploy

firebase login:ci

{% endhighlight %}

Simple .travis.yml for your reference.

{% highlight yaml %}

language: node_js

node_js:
  - "6.11"

branches:
  only:
    - master

#set notifications frequency
notifications:
  email:
    on_success: never
    on_failure : change

before_install:
  #install rvm 2.2
  - rvm install 2.2
  #use rvm 2.2
  - rvm use 2.2
  #set home varaibles
  - . $HOME/.nvm/nvm.sh && nvm install 6.1 && nvm use 6.1  
  #install gems through bundler
  - gem install bundler
  #if gems are missing this script will get the missing gems.
  - bundle check || bundle install

install:
  #install firebase tools, required to deploy on firebase hosting
  - npm install -g firebase-tools

# Assume bundler is being used, therefore
# the `install` step will run `bundle install` by default.
script:
  #continue even after error
  - set -e
  #build jekyll site
  - jekyll build

after_success:
  #deploy to firebase using stored token.
  - firebase deploy --token $FIREBASE_TOKEN

env:
  global:
  - NOKOGIRI_USE_SYSTEM_LIBRARIES=true # speeds up installation of html-proofer

sudo: false # route your build to the container-based infrastructure for a faster build

#Visit article at - http://wrapcode.com
#Cheers, Rahul.

{% endhighlight %}
