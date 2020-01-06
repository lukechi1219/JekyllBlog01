---
# layout: post
author: luke_chi
title:  "Flutter Roadmap"
date:   2020-01-05 00:40:57 +0800
categories: []
tags: []
---

Roadmap [/flutter/wiki/Roadmap](https://github.com/flutter/flutter/wiki/Roadmap){:target="_blank"}<br>
Ian Hickson edited this page on 3 Aug 2019


# [2019](https://github.com/flutter/flutter/wiki/Roadmap#2019){:target="_blank"}

為了保持透明，我們希望分享 Roadmap 的 high-level 細節，以便其他人可以看到我們的優先事項並根據我們正在做的工作制定計劃。

我們已經確定了一些明年(2020)要重點關注的主題：

* Fundamentals
* 易於採用
* 生態系統
* 支持移動平台以外的平台
* Tooling

當然，根據客戶的回饋和新的市場機會，我們的計劃會隨著時間的推移而演化。這裡的清單既不應被視為詳盡無遺 (exhaustive)，也不應被視為我們將完成所有工作的承諾。如果您對我們認為應該做的事情有任何回饋，建議您保持聯繫（例如，通過 [提出問題](https://github.com/flutter/flutter/issues/new/choose){:target="_blank"} 或通過 [flutter-dev 郵件列表](https://groups.google.com/forum/#!forum/flutter-dev){:target="_blank"}）。由於 Flutter 是一個開源專案，因此我們歡迎為以下 主題 (Themes) 和其他領域的主題做出貢獻。

## [Release Channels and Cadence](https://github.com/flutter/flutter/wiki/Roadmap#release-channels-and-cadence){:target="_blank"}

 Flutter 開發人員可以自行選擇接收更新的 "Channel"。我們有 4 個 Channel：master，dev，beta 和 stable，其穩定性和對品質的信心水平不斷提高，但變更傳播 (for changes to propagate) 的交付時間更長。

基於執行一些額外的測試，我們每隔幾天就會將內部版本發佈到 dev channel。我們計劃每月（通常在本月初附近）發佈一個 beta 版本，並在全年中發佈大約 4 個穩定版本。我們建議您對發佈給最終用戶的應用程式使用 stable channel。有關發佈過程的更多詳細信息，請參見 [Release process](https://github.com/flutter/flutter/wiki/Release-process){:target="_blank"} Wiki頁面。

## 主題 [Themes](https://github.com/flutter/flutter/wiki/Roadmap#themes){:target="_blank"}

Fundamentals

我們的首要目標是繼續為 Flutter 的現有基礎增加光澤 (add polish to)：

* **錯誤修復**，主要基於有多少 "豎起大拇指" 表情符號反應問題（有關優先排序策略的更多詳細信息，請參見 [Issue hygiene](https://github.com/flutter/flutter/wiki/Issue-hygiene){:target="_blank"} and [Issue triage](https://github.com/flutter/flutter/wiki/Triage){:target="_blank"} Wiki 頁面）。 （除了下面特別指出的以外，新功能是我們特意淡化的一個領域，因為在添加更多功能之前，我們首先修復了已經實現的功能中的錯誤。）
* **性能**，包括記憶體使用率，engine footprint，幀時間 (frame times) 等。如果您有特定的基準測試 (benchmarks ) 希望我們採用 (work on)，最好的方法是將它們作為 [devicelab tests](https://github.com/flutter/flutter/tree/master/dev/devicelab){:target="_blank"} 提供給我們，讓我們知道它們！
* **改進測試** 以確保我們有信心能夠可靠，快速地提供穩定的構建 (builds) 而不會出現退化。
* 根據用戶研究 **改進錯誤訊息**，使錯誤更可操作並包括常見的解決方案。
* **API 文件的改進**，包括特別提供範例代碼和圖表，以繼續使我們的 API 易於使用。

Ease of Adoption (易於採用)

我們希望繼續減少新的 Flutter 開發人員開始 Flutter 旅程時的摩擦，例如：

* 著重想要 [將 Flutter 添加到現有應用程式中](https://flutter.dev/docs/development/add-to-app){:target="_blank"} 的開發人員的需求，例如提供新的 模組樣板 (module template) 和新的 Android 嵌入 API 。
* 更新和擴展 **Flutter 網站的文件**，其中包含更多高級架構文件和更高級選單 (menu) 風格文件。
* 著重在 Flutter 應用程式中 **管理狀態的最佳實踐**。
* 繼續對 **Cupertino widget library** 進行投資，以幫助專門針對 iOS 的作者。
* **無需安裝** 完整的工具和 runtime stack 即可輕鬆嘗試 Flutter 。

Ecosystem (生態系統)

 Flutter 中的 Ecosystem 意味著 Flutter 用戶可以輕鬆快速地完成他們所需的一切，即使 Flutter 核心框架沒有現成的支持。為此，我們在工具和基礎架構上花費了大量時間，以圍繞核心 Flutter 技術實現不斷成長的生態系統。Google 還將花費一些時間來貢獻您期望從 Google 獲得的 plugins 和工具。

我們計劃在2019年進行的特定生態系統工作：

* 更好地支持在 Flutter 中使用 C/C++ libraries，包括 **Dart 直接調用 C/C++，反之亦然**。
* 使 **Flutter 的 first-party [plugins](https://github.com/flutter/plugins/tree/master/packages){:target="_blank"} 和 [packages](https://github.com/flutter/packages/tree/master/packages){:target="_blank"}** 達到與核心框架相同的品質和完整性級別。
* 完成適用於 iOS 和 Android 的 **Maps 和 WebView plugins** 的工作。
* 確保 Flutter 應用程式可以 **利用 Google 服務**，包括 in-app 付款和 YouTube。
* 提供對 **本地通知** 和 **本地數據存儲** 的支持。

Support for platforms beyond mobile (支持移動平台以外的平台)

我們將投資於擴展 Flutter to other form factors and release profiles，以實現我們的目標，即為 build a portable UI toolkit for any place where pixels are painted。

* 改進了對 **鍵盤** 和 **鼠標輸入** 的支持。
* 使開發人員可以使用 [**Hummingbird** 專案](https://medium.com/flutter/hummingbird-building-flutter-for-the-web-e687c2a023a8?){:target="_blank"}（在 Web 上運行的 Flutter ）。
* 繼續嘗試 **使 Flutter 在桌面級平台**（例如 macOS 和 Windows）上運行。

Tooling

* 繼續投資 **Visual Studio Code，Android Studio 和 IntelliJ** 作為 first-class 的 IDE。
* 在我們的工具中添加對 [語言伺服器協議](https://langserver.org/){:target="_blank"} 的支持。
* 通過 [Dart DevTools](https://flutter.dev/docs/development/tools/devtools/overview){:target="_blank"} 改進的性能分析和調試體驗，**使開發人員可以輕鬆提高應用程式的品質和性能**。
* 確保 Flutter 在多個平台上都易於使用。

Changes

* 在2019年不再支持動態更新。有關詳細信息，請參閱 [此問題](https://github.com/flutter/flutter/issues/14330#issuecomment-485565194){:target="_blank"}。

## [Milestones & Dates](https://github.com/flutter/flutter/wiki/Roadmap#milestones--dates){:target="_blank"}

如果您有興趣觀察我們每月計劃的內容，可以瀏覽GitHub上的 [Milestones](https://github.com/flutter/flutter/milestones?direction=asc&sort=due_date&state=open){:target="_blank"} 頁面。話雖如此，但請注意，issues 通常會更改里程碑，並且不應將任何里程碑視為已落實的日期。

我們還將追蹤平台供應商提出的一些 time-specific 要求；請參閱 [此處](https://github.com/flutter/flutter/wiki/Flutter-Critical-Requirement-Dates){:target="_blank"} 以獲取問題列表。

 Flutter • [Write Test Find Bug](https://github.com/flutter/flutter/wiki/Style-guide-for-Flutter-repo#write-test-find-bug){:target="_blank"} • [Embrace the Yak Shave](https://github.com/flutter/flutter/wiki/Style-guide-for-Flutter-repo#lazy-programming){:target="_blank"} • <https://flutter.dev/>{:target="_blank"}
