import typescript from "@rollup/plugin-typescript";
import image from "@rollup/plugin-image";
import svgr from "@svgr/rollup";
import url from "@rollup/plugin-url";
import postcss from "rollup-plugin-postcss";
import packageJson from "./package.json";

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
    ],
    external: [
      ...Object.keys(packageJson.dependencies ?? {}),
      ...Object.keys(packageJson.peerDependencies ?? {}),
    ],
    plugins: [
      image(),
      url(),
      svgr(),
      postcss({
        extract: true, // extracts to `${basename(dest)}.css`
        plugins: [],
        writeDefinitions: false,
        // sourceMap: true,
      }),
      typescript({
        declaration: false,
      }),
    ],
  },
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.esm,
        format: "es",
      },
    ],
    external: [
      ...Object.keys(packageJson.dependencies ?? {}),
      ...Object.keys(packageJson.peerDependencies ?? {}),
    ],
    plugins: [
      image(),
      url(),
      svgr(),
      postcss({
        extract: true, // extracts to `${basename(dest)}.css`
        plugins: [],
        writeDefinitions: false,
        // sourceMap: true,
      }),
      typescript({
        declaration: false,
      }),
    ],
  },
];
