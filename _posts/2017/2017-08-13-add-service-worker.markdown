---
# layout: post
author: luke_chi
title:  "Add Service Worker"
date:   2017-08-13 23:54:57 +0800
categories: pwa
tags: pwa
---

<https://github.com/GoogleChrome/sw-precache#install>

{% highlight shell %}

$ npm install --save-dev sw-precache
sw-precache --config=path/to/sw-precache-config.js --verbose

{% endhighlight %}

<https://codelabs.developers.google.com/codelabs/sw-precache/#5>

Add the following &lt;script&gt; tag to the bottom of your index.html file to register your service worker:

{% highlight html %}

<script>
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').then(function() { 
    console.log("Service Worker Registered"); 
  });
}
</script>

{% endhighlight %}

How does SW-Precache works

ref: <https://medium.com/@Huxpro/how-does-sw-precache-works-2d99c3d3c725>
