# Positive Map

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

正式版本

```
npm run release
```

测试版本

```
npm run release:beta
```

4、开发组件

- 在`packages/componets/src`下实现组件, 并在`packages/componets/src/index.ts`中导出
- 在`packages/utils/src`下编写组件工具函数，并在`packages/utils/src/index.ts`中导出
- 在`packages/*/src/*/_tests_/index.spec.tsx`下编写组件测试用例
- 在`website/demo`下编写组件 demo
- 在`website/docs/components`下编写组件文档

5、清除依赖

```
npm run clean
```

会删除`node_modules`和`packages/*/node_modules`以及对应的`package-lock.json`

6、发布静态站点

不使用 SSH:

```shell
$ cd ./website # 确保进入 website 文件夹
$ GIT_USER=decSunshineHe npm run deploy
```

git subtree push --prefix=website/build origin gh-pages

如果您使用的是 github 页面进行托管，则此命令是构建网站并将其推向 `GH-pages` 分支的便捷方法。
