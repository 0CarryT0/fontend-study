# day06

### 画图API

- canvas

- WebGL

### 视频音频API

### 客户端存储

+ cookie（过时，仍有很多站点用）

+ WebStorage

+ indexedDB

+ CacheAPI与service worker

  sw是一个 JavaScript 文件，简单地说，它是在浏览器访问时针对特定来源（网站或某个域的网站的一部分）进行注册的。注册后，它可以控制该来源的可用页面。它通过坐在加载的页面和网络之间以及拦截针对该来源的网络请求来实现这一点。

  当它拦截一个请求时，它可以做任何你想做的事情（参见[用例思路](https://developer.mozilla.org/zh-CN/docs/Web/API/Service_Worker_API#other_use_case_ideas)），但经典的例子是离线保存网络响应，然后提供响应请求而不是来自网络的响应。实际上，它允许您使网站完全脱机工作。

  Cache API 是另一种客户端存储机制，略有不同 - 它旨在保存 HTTP 响应，因此与sw一起工作得非常好。