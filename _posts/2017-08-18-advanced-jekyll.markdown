---
layout: post
author: luke_chi
title:  "Advanced Jekyll"
date:   2017-08-18 14:05:00 +0800
categories: jekyll
tags: jekyll
---

bundle show minima

create _includes/

create _layouts/

copy html you want from bundle

------

Adding authors to your Jekyll site

ref: https://blog.sorryapp.com/blogging-with-jekyll/2014/02/06/adding-authors-to-your-jekyll-site.html

Create a file in _data/authors.yml containing your authors information.

{% highlight script %}

# Author details.
robert_rawlins:
    name: Robert Rawlins
    email: robert@sorryapp.com
    web: http://twitter.com/sirrawlins
{% endhighlight %}

in you post

{% highlight script %}
---
layout: post
author: robert_rawlins
---
{% endhighlight %}

in _layouts/post.html

{% highlight script %}

<!-- Look the author details up from the site config. -->
{ % assign author = site.data.authors[page.author] % }

{% endhighlight %}

ref:

https://blog.sorryapp.com/blogging-with-jekyll/2014/02/06/adding-authors-to-your-jekyll-site.html

http://alanwsmith.com/jekyll-liquid-date-formatting-examples

https://learn.cloudcannon.com/jekyll/date-formatting/