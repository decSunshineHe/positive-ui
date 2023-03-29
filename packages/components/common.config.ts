import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import decamelize from "decamelize";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

// 在 UMD 构建模式下为外部依赖提供一个全局变量
export const GLOBALS = {
  react: "React",
  "react-dom": "ReactDOM",
  "react/jsx-runtime": "JsxRuntime",
  antd: "Antd",
  classnames: "Classnames",
};
// 处理类库使用到的依赖
export const EXTERNAL = [
  "react/jsx-runtime",
  "react",
  "react-dom",
  "antd",
  "classnames",
];

export const commonConfig = defineConfig({
  plugins: [react(), cssInjectedByJsPlugin()],
  css: {
    modules: {
      localsConvention: "camelCaseOnly",
      generateScopedName: (name: string, filename: string) => {
        const match = filename
          .replace(/\\/, "/")
          .match(/.*\/src\/(.*)\/.*\.module\..*/);
        if (match) {
          return `positive-${decamelize(match[1], "-")}__${name}`;
        }
        return `positive-${name}`;
      },
    },
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
});
