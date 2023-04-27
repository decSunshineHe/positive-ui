// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const path = require('path');
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const { version: componentVersion } = require(path.relative(__dirname, '../packages/components/package.json'));
const isProd = process.env.NODE_ENV === 'production';
const baseUrl = isProd ? '/positive-map/' : '/';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Positive Map',
  url: `https://decSunshineHe.github.io${baseUrl}`,
  baseUrl,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  trailingSlash: true,

  // 自定义的字段
  customFields: {
    // codeSandbox package.json 配置，目前只支持 dependencies 和 devDependencies
    codeSandboxPacakgeConfig: {
      dependencies: {
        react: '^18.2.0',
        'react-dom': '^18.2.0',
        antd: '5.3.2',
        '@positive-map/rc-components': componentVersion,
      },
      devDependencies: {
        sass: '^1.60.0',
      },
    },
  },

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'decSunshineHe', // Usually your GitHub org/user name.
  projectName: 'positive-map', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs/components',
          routeBasePath: 'components',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl: 'https://github.com/decSunshineHe/positive-map/tree/master',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  plugins: ['./plugins/sass', './plugins/alias', './plugins/mdx', './plugins/tsdoc'],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Positive Map',
        logo: {
          alt: '组件文档 Logo',
          src: 'img/logo.png',
        },
        items: [
          // 组件
          {
            to: '/components/intro',
            label: '组件',
            position: 'left',
          },
          {
            href: 'https://github.com/decSunshineHe/positive-map',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      // colorMode: {
      //   defaultMode: 'dark',
      //   disableSwitch: true,
      //   respectPrefersColorScheme: true,
      // },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
