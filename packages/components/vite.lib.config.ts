import { defineConfig } from 'vite';
import path from 'path';
import { commonConfig, EXTERNAL, GLOBALS } from './common.config';

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    ...commonConfig,
    build: {
      emptyOutDir: false,
      rollupOptions: {
        external: EXTERNAL,
        output: { globals: GLOBALS },
      },
      lib: {
        entry: path.resolve(__dirname, 'src/index.ts'),
        name: 'PositiveUI',
        fileName: (format) => `positive-ui.${format}.js`,
      },
      minify: true,
    },
  };
});
