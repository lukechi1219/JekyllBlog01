---
# layout: post
author: luke_chi
title:  "Cut load times with Developer Tools"
date:   2017-08-26 16:44:57 +0800
categories: mobile
tags: mobile
---

<https://academy.exceedlms.com/student/home/show_enrollment/2895847>

Cut load times with Developer Tools

What you'll learn
How to use Chrome Developer Tools (DevTools) to identify causes of slowdown to webpage load times
The causes of slowdown when a browser reads HTML and CSS
The causes of slowdown when a browser renders a webpage to the screen


The first is familiar: a big image.

Lauren replaces the large file with a lightweight scalable vector graphic (SVG) and moves on. 

the value for DOMContentLoaded is roughly four seconds.

The most likely culprit is a JavaScript file. 

Lauren marks the script with the “async” attribute, which permits the browser to continue processing the webpage while the script executes in tandem. 

Just to be safe, she also moves the script to the bottom of the <body> section in the page’s HTML, ensuring that the rest of the HTML is loaded before the browser even reaches the script.  


Introducing the render tree

The render tree refers to the browser’s process for interpreting the document object model (DOM) and CSS object model (CSSOM) to determine the appearance of a page on screen. 

Convert bytes to code

it has to convert bytes into meaningfully interrelated HTML and CSS objects (the DOM and CSSOM). 

Relate CSS to HTML markup

Place objects on the page

Put it all together


Layout pages for performance

Because she uses a percentage, the product remains big and bold, even when the phone is flipped.

reflow could cause animations to skip frames and perform slowly, 

Fortunately, Lauren knows to minimize reflow on all her pages to preserve performance.


Become a critical rendering path sleuth with DevTools

Lauren puts on her detective cap and puts Sam’s mobile website under the DevTools magnifying glass. 

Using the Timeline tab, she quickly spots sluggish “Parse HTML” and “Recalculate Style” events, which tell her the browser is taking too long to build the DOM and CSSOM respectively. 

A few milliseconds doesn’t sound like a long time, but they add up, especially during animations. 

She also identifies and fixes slowdown in the “Paint” and “Composite Layers” events, significantly reducing the render time for several key storefront pages. 


Make it stick

Now that you’ve seen how a mobile site can be optimized, let’s see if you can apply it to your own site!

How can DevTools help you make faster, more profitable websites?


Recap

In this course, you’ve learned to use Chrome DevTools to identify webpage performance issues. 

To better understand the sources of slow webpage performance, we studied the critical rendering path. 

We learned how the browser transforms raw bytes into meaningfully related objects in the DOM and CSSOM, and then renders pixels from code by way of the render tree and layout.

To learn more about analyzing your page’s critical rendering path, check out the links below:

Get Started with Analyzing Network Performance in Chrome DevTools

<a href="https://developers.google.com/web/tools/chrome-devtools/network-performance/">network-performance</a>

Udacity Web Performance Optimization

<https://www.youtube.com/playlist?list=PLAwxTw4SYaPmKmNX-INgcxQWf30KuWa_A>

