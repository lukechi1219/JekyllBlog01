---
# layout: post
author: luke_chi
title:  "Study Guide Mobile Web Specialist - 1"
date:   2018-06-17 09:40:57 +0800
categories: certification
tags:
---

<https://developers.google.com/training/certification/mobile-web-specialist/StudyGuide_MobileWebSpecialist.pdf>

<h1>Part 1: Basic Website Layout and Styling</h1>

* You'll be asked to show you can use HTML, CSS, and JavaScript to build a web application’s responsive layout and style that includes:
* DOM elements that are accessed and manipulated using only JavaScript without the overhead of libraries or frameworks (such as jQuery)
* Appropriate document type declaration and viewport tags
  * <https://www.quirksmode.org/blog/archives/2010/04/a_pixel_is_not.html>
* A responsive grid-based layout using CSS
  * <https://developers.google.com/web/fundamentals/design-and-ux/responsive/>
  * <https://css-tricks.com/snippets/css/a-guide-to-flexbox/>
  * <https://www.udacity.com/course/responsive-web-design-fundamentals--ud893>
  * <https://classroom.udacity.com/courses/ud893>
  * <http://alistapart.com/article/responsive-web-design/>
* Media queries that provide fluid breakpoints across different screen sizes
  * <https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries>
  * The logic that applies to media queries is not mutually exclusive, and for any filter meeting that criteria the resulting CSS block is applied using the standard rules of precedence (優先權) in CSS.
* Multimedia tags to display video or play audio
  * <https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content>
* Responsive images that adjust for the dimensions and resolution of any mobile device
  * <https://www.udacity.com/course/responsive-images--ud882>
* Touch and mouse events that contain large hit targets on the front end and work
regardless of platform
  * <https://developer.mozilla.org/en-US/docs/Web/API/Touch_events/Supporting_both_TouchEvent_and_MouseEvent>
  * <https://developer.mozilla.org/en-US/docs/Web/API/Touch_events>

{% highlight html %}
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<!-- Accessibility: Ensure your page is accessible by Allowing/Not Disabling user scaling. -->
<!-- Note: To ensure that older browsers can properly parse the attributes, use a comma to separate attributes. -->
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Title of the document</title>
<link rel="stylesheet" href="print.css" media="print">
<!-- TODO: need test this
<style media="print">
print {
  print style sheets go here
}
</style>
-->
<style>
@media print {
  print style sheets go here
}
</style>
<link rel="stylesheet" media="(max-width: 640px)" href="max-640px.css">
<link rel="stylesheet" media="(min-width: 640px)" href="min-640px.css">
<link rel="stylesheet" media="(orientation: portrait)" href="portrait.css">
<link rel="stylesheet" media="(orientation: landscape)" href="landscape.css">
<style>
  @media (min-width: 500px) and (max-width: 600px) {
    h1 {
      color: fuchsia;
    }
    .desc:after {
      content:" In fact, it's between 500px and 600px wide.";
    }
  }
</style>
</head>
<body>
  <div id="content">
    Content of the document......<br>
    <button id="testButton">test</button>
  </div>
  <script type="javascript">
  	var contentDiv = document.querySelector('#content');
    console.info(contentDiv.innerHTML);
  	var testButton = document.querySelector('#testButton');
    testButton.onclick = function(e) {
      console.info(e);
    };
  </script>
</body>
</html>
{% endhighlight %}

<h2>Responsive Web Design Basics</h2>

<h3>How to choose breakpoints</h3>

TL;DR
* Create breakpoints based on content, never on specific devices, products, or brands.
* Design for the smallest mobile device first; then progressively enhance the experience as more screen real estate becomes available.
* Keep lines of text to a maximum of around 70 or 80 characters.

<h4>Pick major breakpoints by starting small, then working up</h4>

To insert a breakpoint at 600px, create two new style sheets, one to use when the browser is 600px and below, and one for when it is wider than 600px. In this example, we've placed the common styles such as fonts, icons, basic positioning, and colors in weather.css.

{% highlight html %}
<link rel="stylesheet" href="weather.css">
<link rel="stylesheet" media="(max-width:600px)" href="weather-2-small.css">
<link rel="stylesheet" media="(min-width:601px)" href="weather-2-large.css">
{% endhighlight %}

<h4>Pick minor breakpoints when necessary</h4>

For example, between major breakpoints it may be helpful to adjust the margins or padding on an element, or increase the font size to make it feel more natural in the layout.

Similarly, for the large screens it's best to limit to maximum width of the forecast panel so it doesn't consume the whole screen width.

{% highlight html %}
<style>
@media (min-width: 700px) {
  .weather-forecast {
    width: 700px;
  }
}
</style>
{% endhighlight %}

<h4>Optimize text for reading</h4>

Classic readability theory suggests that an ideal column should contain 70 to 80 characters per line (about 8 to 10 words in English). Thus, each time the width of a text block grows past about 10 words, consider adding a breakpoint.

<h4>Never completely hide content</h4>

For example, eliminating the pollen count from the weather forecast could be a serious issue for spring-time allergy sufferers who need the information to determine if they can go outside or not.

<h3>View media query breakpoints in Chrome DevTools</h3>

Last, open the Device Mode menu and select Show media queries to display your breakpoints as colored bars above your page.

Click on one of the bars to view your page while that media query is active. Right-click on a bar to jump to the media query's definition. See [Media queries][media-query] for more help.

[media-query]: https://developers.google.com/web/tools/chrome-devtools/device-mode/emulate-mobile-viewports#media-queries

#TODO
* A Complete Guide to Flexbox
* Video and audio content
* Responsive Images by Google
* Supporting both TouchEvent and MouseEvent
* Touch events
