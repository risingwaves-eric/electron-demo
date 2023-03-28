# electron-demo

## first-application

### npm init

配置 package.json 中的一些字段

### npm install electron --save-dev

将Electron安装为项目的 devDependencies,即仅在开发环境需要的额外依赖。

> 打包后的应用包含 Electron 的二进制文件，因此不需要将 Electron 作为生产环境依赖。

* node_modules 包含了Electron可执行文件
* package-lock.json 指定了各个依赖的确切版本

### npm run start

