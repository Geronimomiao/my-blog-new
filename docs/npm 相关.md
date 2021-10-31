## 理解
是什么: npm -> js 包管理工具  
做什么: 通过该工具 -> 下载海量第三方库 -> 高效进行开发

### npm 常用命令

- 发布 α 版
   - npm version prerelease --preid=alpha
- 换源相关
   - 临时使用
       - npm --registry https://registry.npm.taobao.org install express
   - 永久使用 
        npm config set registry https://registry.npmjs.org/
   - 查看 npm 源地址 
        npm config get registry
- 查看全局安装依赖
   - npm list -g --depth 0

### yarn 常用命令

- 创建项目
   - yarn init
- 安装依赖
   - yarn 
   - yarn install
- 查看全局安装依赖
   - yarn global list
- 添加依赖
   - yarn add xxx  (依赖安装至生产环境)
   - yarn add xxx --dev  (依赖安装至开发环境)


> 有些包仅在开发环境下使用 如 webpack 


### 小知识点
**关于 node_modules .bin**

- 执行 node_modules .bin 代码

```shell
# 手动档执行
$ node node_modules/.bin/mocha **/*.test.js

# 改装党，配置 zsh 别名：alias n='PATH=$(npm bin):$PATH'
$ n mocha **/*/test.js

# 一劳永逸党，把 mocha 指令写入到 npm scripts 后，会自动寻址 node_modules/.bin
# { scripts: { "test": "mocha **/*.test.js" }}
$ npm test 

# 顺手牵羊党，适用于临时需要执行某个 bin
$ npx mocha **/*.test.js
```

npx先看xxxz在$PATH里有没有，如果没有，找当前目录的node_modules里有没有，如果还是没有，就安装这个xxx 来执行

npx也可以理解为少些package.json里一个script而诞生的

- node_modules .bin 来源

1. 当某个模块配置了 bin 定义时，就会被安装的时候，自动软链了过去
