---
title: webpack 原理
author: simiao
author_title: Front End Engineer @ ByteDance
author_url: https://github.com/Geronimomiao
author_image_url: https://avatars.githubusercontent.com/u/33541088?v=4
tags: [webpack, 原理]
---

## 是什么

**官方定义**
> webpack 是一个用于现代 JavaScript 应用程序的 静态模块打包工具。当 webpack 处理应用程序时，它会在内部从一个或多个入口点构建一个 依赖图(dependency graph)，然后将你项目中所需的每一个模块组合成一个或多个 bundles，它们均为静态资源，用于展示你的内容

**我的理解**  
打包工具 -> 将我们使用的框架代码/高版本语法 -> 进行降级 -> 降级为低版本浏览器可以识别的语法/不需要配置任何环境/依赖 

![arJTdeipFx1q38W](https://i.loli.net/2021/10/03/arJTdeipFx1q38W.jpg)

## 核心概念

**入口**  
entry 指示 webpack 应该用哪个模块 来作为构建内部依赖的开始


