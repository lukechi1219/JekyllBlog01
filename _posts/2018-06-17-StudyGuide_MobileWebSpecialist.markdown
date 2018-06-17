---
# layout: post
author: luke_chi
title:  "Study Guide Mobile Web Specialist"
date:   2018-06-17 09:40:57 +0800
categories: certification
tags:
---

<https://developers.google.com/training/certification/mobile-web-specialist/StudyGuide_MobileWebSpecialist.pdf>

m

{% highlight ruby %}
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Title of the document</title>
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
