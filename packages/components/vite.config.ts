import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { buildPlugin } from "vite-plugin-build";
import path from "path";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
import decamelize from "decamelize";

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
              name: "MaxtropyUI",
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
        postcss: {},
        preprocessorOptions: {
          less: {
            javascriptEnabled: true,
          },
        },
      },
    },
  };
});
