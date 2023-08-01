---
order: 1
---

# 快速上手

## 安装

```shell
$ npm install @positive/rc-components --save-dev
```

## 基本使用

```js
// 业务代码
import { SwitchStaff } from '@positive/rc-components';
```

## 按需加载

### 方式一：精确加载

```js
import SwitchStaff from '@positive/rc-components/lib/SwitchStaff';
```

### 方式二：babel-plugin-import

需要安装 babel-plugin-import 插件

```shell
$ npm install babel-plugin-import --save-dev
```

```js
// babel.config.js
module.exports = {
  plugins: [
    [
      'import',
      {
        libraryName: '@positive/rc-components',
        libraryDirectory: 'lib',
        camel2DashComponentName: false,
      },
    ],
  ],
};
```

## 路由相关

组件库中头部导航等组件使用了 react-router-dom 的 useLocation 等 hook，因此需要在项目中的路由配置中使用 BrowserRouter 包裹，否则会报错。
示例代码如下：

```js
import { BrowserRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);

```

## 本地开发

### Proxy 代理

需要对 devServer 设置 Proxy 属性，对组件内置请求的 api 和 server 进行代理，解决本地开发的跨域问题，示例代码如下：

```js
  const serverAddress = 'http://10.224.32.144:8080/'; // 后端地址

  devServer: {
    port: 3000,
    proxy: {
      "/api": {
        target: serverAddress, // 后端地址,
        changeOrigin: true,
        secure: false,
      },
      '/server': {
        target: serverAddress,
        changeOrigin: true,
        secure: false,
      },
    },
  },
```
