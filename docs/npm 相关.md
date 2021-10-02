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
   - yarn add xxx 
   - yarn add xxx --dev

