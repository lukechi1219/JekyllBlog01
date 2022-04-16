---
# layout: post
author: luke_chi
title:  "Layout 3: Creating responsive apps"
date:   2020-01-09 00:40:57 +0800
categories: [flutter]
tags: []
---

src <https://flutter.dev/docs/development/ui/layout/responsive>

相關文章
* [Layout 1: Layouts in Flutter]({{ site.baseurl }}{% link _posts/2020/2020-01-09-layout-1.markdown %})
* [Layout 2: Tutorial]({{ site.baseurl }}{% link _posts/2020/2020-01-09-layout-2-tutorial.markdown %})
* [Layout 3: Creating responsive apps]({{ site.baseurl }}{% link _
  posts/2020/2020-01-09-layout-3-responsive-apps.markdown %})
* [Layout 4: Dealing with box constraints]({{ site.baseurl }}{% link _
  posts/2020/2020-01-09-layout-4-box-constraints.markdown %})

無論是針對 mobile 行動裝置還是 web，創造能響應尺寸變動與方向改變的 apps 都很重要。

響應式 (responsive) app 會根據螢幕或視窗的尺寸和形狀，自動調整 UI 佈局。
這是必要的，尤其當同一個 app 需要在各種裝置上執行，
例如手錶，手機，平板，NB 或桌上型電腦。
當使用者在 NB 或桌上型電腦上調整視窗大小，或旋轉手機或平板的方向，
app 應根據不同情況來重新安排 UI。

Flutter 可以幫助您創造自動適應裝置螢幕尺寸與方向的 apps。

有兩個基本方法來創造具有響應式設計的 Flutter apps:

**Use the [LayoutBuilder](https://api.flutter.dev/flutter/widgets/LayoutBuilder-class.html){:target="_blank"} class**
: 從 [builder](https://api.flutter.dev/flutter/widgets/LayoutBuilder/builder.html){:target="_blank"} 屬性，你可以取得一個
  [BoxConstraints](https://api.flutter.dev/flutter/rendering/BoxConstraints-class.html){:target="_blank"} 物件。
  你可以檢查這個 constraint 的不同屬性來決定要顯示什麼。
  例如，如果你的 [maxWidth](https://api.flutter.dev/flutter/rendering/BoxConstraints/maxWidth.html){:target="_blank"} 大於你的寬度斷點，
  就返回一個 [Scaffold](https://api.flutter.dev/flutter/material/Scaffold-class.html){:target="_blank"} 物件
  帶著一個 row 其中在左側有一個列表 (list)。
  如果 maxWidth 小於你的寬度斷點，就返回一個 [Scaffold](https://api.flutter.dev/flutter/material/Scaffold-class.html){:target="_blank"} 物件
  帶著一個 drawer 裝有那個列表 (list)。
  你也可以調整你的 app 顯示方式，根據裝置的高度，寬高比例 (aspect ratio)，或是一些其他屬性。
  當 constraints 改變了 (例如，使用者旋轉了手機，或是將你的 app 放進一個分屏 UI in Android Nougat)，build function 就會自動執行。

**Use the [MediaQuery.of](https://api.flutter.dev/flutter/widgets/MediaQuery/of.html){:target="_blank"} method in your build functions**
: 這方法為您提供了當前應用程式的尺寸，方向等資訊。
  這個方法更有用，如果您要基於完整的 context 而不是僅基於特定 widget 的尺寸來做出決策。
  同樣地當你使用這個方法，如果使用者改變了 app 的尺寸，則 build function 就會自動執行。

For more information, here are a few resources,
including contributions from the Flutter community:

* [Developing for Multiple Screen Sizes and Orientations in Flutter]({{ site.baseurl }}{% link _
  posts/2020/2020-01-13-multiple-screen-flutter.markdown %}) by Deven Joshi

* [Build Responsive UIs in Flutter]({{ site.baseurl }}{% link _posts/2020/2020-01-12-responsive-flutter.markdown %}) by
  Raouf Rahiche

* [Making Cross-platform Flutter Landing Page Responsive]({{ site.baseurl }}{% link _
  posts/2020/2020-01-11-cross-platform-flutter-responsive.markdown %}) by Priyanka Tyagi

* [How to make flutter app responsive according to different screen size?](https://stackoverflow.com/questions/49704497/how-to-make-flutter-app-responsive-according-to-different-screen-size)
  {:target="_blank"}, a question on StackOverflow

其他有用的 widgets and classes for creating a 響應式 UI:

* [AspectRatio](https://api.flutter.dev/flutter/widgets/AspectRatio-class.html){:target="_blank"}
* [CustomSingleChildLayout](https://api.flutter.dev/flutter/widgets/CustomSingleChildLayout-class.html){:target="_blank"}
* [CustomMultiChildLayout](https://api.flutter.dev/flutter/widgets/CustomMultiChildLayout-class.html){:target="_blank"}
* [FittedBox](https://api.flutter.dev/flutter/widgets/FittedBox-class.html){:target="_blank"}
* [FractionallySizedBox](https://api.flutter.dev/flutter/widgets/FractionallySizedBox-class.html){:target="_blank"}
* [LayoutBuilder](https://api.flutter.dev/flutter/widgets/LayoutBuilder-class.html){:target="_blank"}
* [MediaQuery](https://api.flutter.dev/flutter/widgets/MediaQuery-class.html){:target="_blank"}
* [MediaQueryData](https://api.flutter.dev/flutter/widgets/MediaQueryData-class.html){:target="_blank"}
* [OrientationBuilder](https://api.flutter.dev/flutter/widgets/OrientationBuilder-class.html){:target="_blank"}

--
[簡中 ver](https://flutter.cn/docs/development/ui/layout/responsive){:target="_blank"}

