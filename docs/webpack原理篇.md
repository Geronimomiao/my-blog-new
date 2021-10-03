---
title: webpack 原理
author: simiao
author_title: Front End Engineer @ ByteDance
author_url: https://github.com/Geronimomiao
author_image_url: https://avatars.githubusercontent.com/u/33541088?v=4
tags: [webpack, 原理]
---

## 顺势而为
历史背景 -> 纯人力手写代码(需求 >> 产能) -> jQuery(解放生产力) -> 三大框架(进一步解放生产力) -> 浏览器无法直接运行 -> 打包工具因运而生


## 打包工具

**官方定义**
> webpack 是一个用于现代 JavaScript 应用程序的 静态模块打包工具。当 webpack 处理应用程序时，它会在内部从一个或多个入口点构建一个 依赖图(dependency graph)，然后将你项目中所需的每一个模块组合成一个或多个 bundles，它们均为静态资源，用于展示你的内容

**我的理解**  
打包工具 -> 将我们使用的框架代码/高版本语法 -> 进行降级 -> 降级为低版本浏览器可以识别的语法/不需要配置任何环境/依赖 

![arJTdeipFx1q38W](https://i.loli.net/2021/10/03/arJTdeipFx1q38W.jpg)

## 核心概念

**入口**  
- entry 指示 webpack 应该用哪个模块 来作为构建内部依赖的开始

**出口**  
- output 属性 告诉 webpack 在哪里输出它所创建的 bundle 以及如何命名这些文件

**Loader**  
- 让 webpack 能够去处理那些非 JavaScript 文件（webpack 自身只理解 JavaScript）
- loader 可以将所有类型的文件转换为 webpack 能够处理的有效模块,然后你就可以利用 webpack 的打包能力,对它们进行处理

**Plugin**  
- loader 被用于转换某些类型的模块,而插件则可以用于执行范围更广的任务
- 插件的范围包括,从打包优化和压缩,一直到重新定义环境中的变量。插件接口功能极其强大,可以用来处理各种各样的任务