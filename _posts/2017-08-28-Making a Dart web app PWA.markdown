---
layout: post
author: luke_chi
title:  "Making a Dart web app PWA"
date:   2017-08-28 13:20:57 +0800
categories: [dart,pwa]
tags: [dart,pwa]
---

<http://news.dartlang.org/2017/03/making-dart-web-app-offline-capable-3.html>

<https://developers.google.com/web/fundamentals/getting-started/codelabs/your-first-pwapp/>

Progressive web app with Dart

Supporting offline mode requires roughly the following:

- Determining which resources to put in the cache for offline use.
- Creating a service worker that prepares a cache of these resources.
- Registering the service worker, so that subsequent requests can be served from the offline cache (in case the network is down).
- In that service worker, pre-populating the offline cache with the URLs, and also handling the appropriate fetch request either from the cache, or from the network.
- Making sure that the service worker detects changes to the app or static assets, and puts the new version in the cache.

While the above list may sound a bit scary, we have a pwa package in Dart that does most of the work for us, providing a high-level API and automating most of the work.

Import the pwa package in your pubspec.yaml:

{% highlight script %}
dependencies:
  pwa: ^0.1.2
{% endhighlight %}

  After running pub get, add the client to your web/main.dart:

{% highlight dart %}
import ‘package:pwa/client.dart’ as pwa;

main() {
  // register PWA ServiceWorker for offline caching.
  new pwa.Client();
}
{% endhighlight %}

Automatically generated progressive web application

The pwa package provides code generation that handles items 1–2 and 4–5 from the above list. To ensure proper cache use (both populating and invalidating the cache) use the following workflow:

- Build your web app with all of the static resources landing in build/web: pub build
- Run pwa’s code generator to scan (or rescan) your offline assets: pub run pwa
- Build your project again, because you need to have your (new) pwa.dart file compiled: pub build

These steps produce a file named lib/pwa/offline_urls.g.dart that contains a list of the offline URLs to be cached. The .g.dart extension indicates that the file is generated and may be overwritten automatically by pwa’s code generator tool.

On the first run, this workflow generates the web/pwa.dart file that contains your service worker with reasonable defaults. You can modify this file (to customize the offline URLs or use the high-level APIs, for example) because the code generator won’t change or override it again.

