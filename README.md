# Positive UI

## 项目说明

### 开发说明

1、安装依赖

```
npm run bootstrap --legacy-peer-deps
```

备注：由于 docusaurus 依赖的 react 版本与 antd 依赖的 react 版本不一致，所以需要加上`--legacy-peer-deps`参数

2、启动项目

```
npm run website
```

备注：启动项目后，会自动打开浏览器，访问`http://localhost:3000`

3、发布版本

```
npm run publish
```

备注：目前未确定仓库地址

4、开发组件

- 在`packages/componets/src`下实现组件, 并在`packages/componets/src/index.ts`中导出
- 在`website/demo`下编写组件 demo
- 在`website/docs/components`下编写组件文档
