import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { buildPlugin } from "vite-plugin-build";
import path from "path";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    plugins: [
      react(),
      cssInjectedByJsPlugin(),
      buildPlugin({
        fileBuild: { emitDeclaration: true },
        libBuild: {
          buildOptions: {
            rollupOptions: {
              external: ["react", "react-dom"],
              output: { globals: { react: "React", "react-dom": "ReactDOM" } },
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
            return `positive-${prefixName}__${name}`;
          }

          return `positive-${name}`;
        },
        preprocessorOptions: {
          less: {
            javascriptEnabled: true,
          },
        },
      },
    },
  };
});
