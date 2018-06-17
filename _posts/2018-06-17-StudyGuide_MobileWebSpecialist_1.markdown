---
# layout: post
author: luke_chi
title:  "Study Guide Mobile Web Specialist - 1"
date:   2018-06-17 09:40:57 +0800
categories: certification
tags:
---

<https://developers.google.com/training/certification/mobile-web-specialist/StudyGuide_MobileWebSpecialist.pdf>

<h2>Part 1: Basic Website Layout and Styling</h2>

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
<style media="print">
print {
  print style sheets go here
}
</style>
<style>
@media print {
  print style sheets go here
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
