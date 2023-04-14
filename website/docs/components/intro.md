---
sidebar_position: 1
---

# 介绍

Positive UI 基于 React 18 + Antd 5 的业务组件库

## 特性

- 基于 React 18 + Antd 5
- 按需加载
- 支持 TypeScript

## 安装

```shell
$ npm install @positive-map/ui-components --save-dev
```

## 使用

```js
// 业务代码
import { NumericKeyboard } from '@positive-map/ui-components';
```

## 按需加载

### 方式一：精确加载

```js
import NumericKeyboard from '@positive-map/ui-components/lib/NumericKeyboard';
```

### 方式二：babel-plugin-import

```js
// babel.config.js
module.exports = {
  plugins: [
    [
      'import',
      {
        libraryName: '@positive-map/ui-components',
        libraryDirectory: 'lib',
        camel2DashComponentName: false,
      },
    ],
  ],
};
```
