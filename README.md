# f2e-server demo project
使用 [f2e-server](https://github.com/shy2850/f2e-server) 构建的简易 React 项目脚手架
主要技术栈包括 `react react-router immutable`, 模块化方案基于 `requirejs`

## Special list
项目主要特点包括:
1. 内置基于 [immutable](http://facebook.github.io/immutable-js/docs/#/) 实现了一个简易版本的 [react-redux](./src/store.ts) static-API:
    - dispatch(state=>state)
    - getState()
    - connect(mapStateToProps)(Component)
2. 项目配置简单, 所有配置参见: [.f2econfig.js](./.f2econfig.js)
3. 基于Typescript可以做到前后端接口同构开发
4. 不做模块解析，虽然给模块引入带来不便，但提高了构建速度
5. 提供了一些基本的服务端接口模拟方式，包括 json/jsonp/server-sent

## Download and Start
```bash
git clone https://github.com/shy2850/f2e-demo
cd f2e-demo
npm install
npm start
```

## f2e-server utils
f2e-server 常用功能
1. 通过 `$include[filePath]` 引入文本资源，所有第三方库都是通过这个方式引入
    - 如 `$include[immutable.js]` 同目录存在 `.min`文件，build模式下自动加载 `.min`文件
    - 不存在时可以使用 `$include[react.development.js][react.production.min.js]` 表示 
2. 模板引擎 在配置中添加 `middlewares: [{middleware: 'template'}]` 可以开启lodash模板引擎支持在任意文本资源中使用`<%-JavaScript代码%>`
3. 参考 [serve/index.ts](./serve/index.ts) 书写服务端接口，方便前端使用
4. 如果需要直接代理某服务端接口，还可以从这里找 `proxy` [https://github.com/shy2850/f2e-middleware](https://github.com/shy2850/f2e-middleware)


## Typescript
项目主要使用 [Typescript](https://www.tslang.cn) 构建
- 前后端代码均使用 [interface.ts](./interface.ts) 作为顶层接口文件, 同构开发。
- 前端代码目录为 [src](./src)
    1. 通过 [f2e-middle-typescript](https://github.com/shy2850/f2e-middleware/tree/master/typescript)使用配置文件 `tsconfig.json`, 并设置了 `getModuleId` 用来为所有模块添加唯一ID
    2. `建议`: 不需要进行`jsx`编译的文件使用 `.ts`后缀 否则使用 `.tsx`
- 服务端代码目录为 [serve](./serve)
    1. serve端代码通过 `tsc`(typescript-cli) 编译， 参见 [package.json](./package.json) scripts.tsc
    2. 代码运行时输出目录为: `dist`


## END
> 正则是需要的