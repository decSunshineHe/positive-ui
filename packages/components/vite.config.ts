/// <reference types="vitest" />

import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";
import decamelize from "decamelize";
import { buildPlugin } from "vite-plugin-build";

const GLOBALS = {
  react: "React",
  "react-dom": "ReactDOM",
  antd: "Antd",
};
// 处理类库使用到的外部依赖
// 确保外部化处理那些你不想打包进库的依赖
const EXTERNAL = ["react", "react-dom", "antd"];

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    plugins: [
      react(),
      buildPlugin({
        libBuild: {
          buildOptions: {
            rollupOptions: {
              external: EXTERNAL,
              output: { globals: GLOBALS },
            },
            lib: {
              entry: path.resolve(__dirname, "src/index.ts"),
              name: "PositiveUI",
              fileName: (format) => `positive-ui.${format}.js`,
            },
          },
        },
      }),
    ],
    css: {
      modules: {
        localsConvention: "camelCaseOnly",
        generateScopedName: (name: string, filename: string) => {
          const match = filename
            .replace(/\\/, "/")
            .match(/.*\/src\/(.*)\/(.*)\.module\..*/);

          if (match) {
            let prefixName = match[1].replace(/\//g, "-");
            if (match[2] !== "index") {
              prefixName += `-${match[2]}`;
            }
            return `positive-${decamelize(prefixName, {
              separator: "-",
            })}__${name}`;
          }

          return `positive-${name}`;
        },
      },
      postcss: {},
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
        },
      },
    },
    resolve: {
      alias: [
        // fix less import by: @import ~
        // less import no support webpack alias '~' · Issue #2185 · vitejs/vite
        { find: /^~/, replacement: "" },
        { find: "@", replacement: path.resolve(__dirname, "src") },
      ],
      extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json"],
    },
    test: {
      environment: "happy-dom",
      watch: false,
    },
  };
});
