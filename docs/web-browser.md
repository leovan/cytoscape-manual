# 网页浏览器

Cytoscape 包含一个简单的网页浏览器，可用于从 Cytoscape 中查看网站。同时也用于 Cytoscape 应用，link out，显示用户手册和交互式教程。通过 `Tools -> Open Web Page` 可以打开浏览器窗口，这将显示一个 `Starting Cytoscape Web Browser` 对话框。其提供一个用于输入网址的输入框和一个用于指示是否在 [Cytoscape 结果面板](#结果面板中的-cytoscape-web-browser)中打开浏览器窗口的复选框。

![](images/web-browser/cytoscape-web-browser-dialog.png)

通过单击工具栏中的 `Cytoscape Web Browser` 按钮 ![](images/web-browser/web-icon.png) 打开浏览器，这将显示网页浏览器的启动页面，包括例如：手册、教程、Cytoscape 网站和其他信息等各种资源的链接。

## Cytoscape Web Browser 窗口

![](images/web-browser/cytoscape-web-browser.png)

Cytoscape Web Browser 主窗口提供了基本的浏览界面，包括前进/后退按钮，用于输入新 URL 的文本框，以及跳转至新页面的 `Go` 按钮。此外还有 3 个上下文菜单：

- `Selected text`：选择文本菜单仅包含一项 `Copy`，即复制选定的文本。
- `Link`：使用链接菜单，用户可以复制链接地址，在新窗口或系统默认浏览器或新选项卡中打开链接。还可以使用它将链接目标下载到文件。

    ![](images/web-browser/link-right-click.png)

- `Other`：如果光标不在连接上并且未选择任何文本，则显示默认菜单。使用默认菜单，用户可以关闭浏览器或重新加载页面。

    ![](images/web-browser/right-click.png)

## 结果面板中的 Cytoscape Web Browser

![](images/web-browser/cytoscape-web-browser-results-panel.png)

除了能够将网络在单独的窗口打开之外，还可以在结果面板中打开网页。除了不包含前进和后退按钮，以及无法在其他标签中打开连接外，它提供了与浏览器窗口相同的功能。

## 为什么使用 Cytoscape Web Browser？

Cytoscape Web Browser 并不是 Chrome 或 Firefox 的替代物，它提供了一种快速查看 Cytoscape 特定网页的功能。与 Cytoscape 的集成是所运行系统上的其他浏览器很难提供的。此外，Cytoscape Web Browser 支持 Cytoscape 命令样式的连接，对于 JavaScript 开发者来说，Cytoscape Web Browser 还提供用于监听 Cytoscape 中节点和边选择的钩子。
