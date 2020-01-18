---
# layout: post
author: luke_chi
title:  "Build Responsive UIs in Flutter"
date:   2020-01-12 00:40:57 +0800
categories: [flutter]
tags: []
---

![image](https://miro.medium.com/max/1200/1*IbhW1o72CWMQ_KaIxpuRzQ.jpeg){:target="_blank"}

by Raouf Rahiche<br>
src <https://medium.com/flutter-community/build-responsive-uis-in-flutter-fd450bd59158>

相關文章
* [Layout 1: Layouts in Flutter]({{ site.baseurl }}{% link _posts/2020-01-09-layout-1.markdown %})
* [Layout 2: Tutorial]({{ site.baseurl }}{% link _posts/2020-01-09-layout-2-tutorial.markdown %})
* [Layout 3: Creating responsive apps]({{ site.baseurl }}{% link _posts/2020-01-09-layout-3-responsive-apps.markdown %})
* [Layout 4: Dealing with box constraints]({{ site.baseurl }}{% link _posts/2020-01-09-layout-4-box-constraints.markdown %})

`設計師喜歡使用 響應式 (responsive) UI，但要在現實生活中實做它們並不是那麼容易。作為 Flutter 開發人員，您不應對設計師說 NO。所以 let’s make them happy again.`

TDLR :
* 在響應式 UI 中，我們不對尺寸和位置使用寫死的值。
* 使用 MediaQuery 來取得視窗的即時 (real-time) 尺寸。
* 使用 "Flexible" 和 "Expanded" widget 來取得一個 flexible UI，該UI可以使用百分比而不是寫死的值。
* 使用 LayoutBuilder 取得 parent widget 的 ConstraintBox。
* 您可以使用 MediaQuery 或 OrientationBuilder 獲取裝置的方向 (orientation)。

# What are the components of responsive design?
在響應式設計 apps 中，我們需要考慮三大方面：尺寸，方向和裝置類型，只要其中任何一個改變，apps UI 就會改變。

例如，如果您在縱向模式下的一列中有一張圖像列表，則在橫向模式下應該變成兩列，以便在一頁中 "向用戶顯示盡可能多的內容"，在這個小例子中，UI 取決於裝置的方向。在下一部分中，我們將通過一些例子討論每個組件。

# What’s the problem?
這裡的主要問題是 UI widgets 的尺寸和位置的 hard-coded values。因此，要解決問題就是不要使用它們，對嗎？是的，但這只是解決問題的一部分，因為在響應式 UI 中，您不僅會縮放 Widgets，有時會改變它們的位置，而有時會根據可用空間進行改變。在本文中，我將為您提供一些有關此操作的提示。

> INFO: The unit of measurement in flutter is logical pixels.

# 1. Different screen sizes

![image](https://miro.medium.com/proxy/1*eNXH-nsUp6KNSHRM8TLtoQ.jpeg){:target="_blank"}

Flutter 同時支持 android 和 IOS 裝置，並且它們都具有多種尺寸，不可能為每個裝置都進行佈局，但是可以並且非常容易地使一個佈局比例適合所有裝置，在 Flutter 中，有一套在這種情況下有幫助的 Widgets。讓我們來談談其中的一些：

`MediaQuery` 是一個 `InhertedWidget` ，它為您提供有關當前媒體的信息（也就是您的應用程式所在的視窗），例如裝置的大小，方向和像素比率。

因此，例如，如果您有一個抽屜式選單 (drawer menu)，並且只想在媒體寬度小於 600 才顯示它。如果媒體寬度大於 600 時，則您將在左側顯示一個普通選單。

> NOTE : 600 is just an example for an android tablet screen but if you want to know more about the right numbers you should read [this for android](https://developer.android.com/training/multiscreen/screensizes){:target="_blank"} and [this for IOS](https://developer.apple.com/library/archive/documentation/DeviceInformation/Reference/iOSDeviceCompatibility/Displays/Displays.html){:target="_blank"}

<script src="https://gist.github.com/Rahiche/3aa5aac571092facebf4ee09242197cf.js"></script>

{% highlight dart %}

Widget build(BuildContext context) {
      
    media = MediaQuery.of(context).size;
      
    Scaffold(
        appBar: AppBar(),
        drawer: (media.width < 600)
            ? Drawer(
                  child: Menu(),
            )
            :
        ,
        body: Row(
          children: <Widget>[
            (media.width > 600)
			? Flexible(flex: 1, child: Menu())
			: Container(),

            Flexible(
              flex: 3,
              child: Center(
                  child: Text(
                    "Size ${media.width} * ${media.height}",
                    style: Theme.of(context).textTheme.title,
                  )),
            ),
          ],
        ),
    );
}

{% endhighlight %}

This example is very simple we have a `Scaffold` that contains a `Row` with two children a `Text` in the center and a menu in the left that will be shown only if the condition is true. **the interesting the third line where I declared** `media`

Now if you run this app in tablet and medium android device you will get different UIs :

![image](https://miro.medium.com/proxy/1*--LhBxTFfyoCcYQj3W9BAg.png){:target="_blank"}

![image](https://miro.medium.com/proxy/1*-wp-xPFgfkAwcUlpqbBSoQ.png){:target="_blank"}



----


[](){:target="_blank"}

![image](){:target="_blank"}
