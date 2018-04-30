---
title: "NexT主题优化：重构leancloud阅读量统计模块"
path: "hexo-next-optimize-leancloud"
date: "2018-02-11"
tags: [Next, Leancloud]
---

## 为什么要重构

> 从去年 10 月份开始，LeanCloud 国内节点 API 的老版域名 api.leancloud.cn 在国外一些地区和国内少数地区会出现一定概率的解析错误（DNS 污染），这导致我们的博客阅读量无法正常显示

<!-- more -->

### 官方解决方案

如果使用的是原生 SDK，请尽快升级到以下版本：

* Android 3.16.4 及更高版本
* iOS 5.0.0 及更高版本
* JavaScript 3.0.0 及更高版本

如果使用 REST API 来访问 api.leancloud.cn，请通过以下地址来动态获取应用专属的二级域名：

https://app-router.leancloud.cn/2/route?appId= <替换为 appId>

然后使用 api_server 指示的域名来访问我们的 API 服务，即可正常获得结果。

> NexT 主题里使用的 SDK 是 av-core-mini-0.6.4，这个库 gzip 后有 28.5KB
对于一个只有几个请求的小模块来说，完全没必要用 SDK，可以手动请求官方 API 完成目的

重构后的代码可以到我的[GitHub](https://github.com/Raincal/hexo-theme-next/blob/master/layout/_third-party/analytics/lean-analytics.swig)查看
