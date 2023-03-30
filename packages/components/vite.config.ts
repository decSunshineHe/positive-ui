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
              name: "MaxtropyUI",
              fileName: (format) => `positive-ui.${format}.js`,
            },
          },
        },
      }),
    ],
  };
});
