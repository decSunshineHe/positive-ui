import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { buildPlugin } from "vite-plugin-build";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    plugins: [
      react(),
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
