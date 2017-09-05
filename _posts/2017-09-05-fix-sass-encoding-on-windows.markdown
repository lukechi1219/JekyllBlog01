---
# layout: post
author: luke_chi
title:  "Jekyll: fix Scss Conversion error: Jekyll::Converters::Scss Invalid CP950 character \\xE2 on line 54"
date:   2017-09-05 18:05:00 +0800
categories: jekyll
tags: jekyll
---

add 1 line at end of file

\ruby24\lib\ruby\gems\2.4.0\gems\sass-3.5.1\lib\sass.rb

{% highlight ruby %}
Encoding.default_external = Encoding.find('utf-8')
{% endhighlight %}
