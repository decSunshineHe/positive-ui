import { defineConfig } from 'dumi';
import path from 'path';

export default defineConfig({
  base: '/react/',
  publicPath: '/react/',
  alias: {
    '@positive-map/rc-components': path.resolve(
      __dirname,
      '../packages/components/src',
    ),
    '@positive-map/rc-utils': path.resolve(__dirname, '../packages/utils/src'),
  },
  proxy: {},
  themeConfig: {
    footer: '© Copyright 2023 Positive',
    logo: '/react/logo-light.svg',
    nav: [
      { title: '指南', link: '/guide/use' },
      { title: '组件', link: '/components/switch-staff' },
    ],
  },
});
