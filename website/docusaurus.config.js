// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const path = require('path');
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const { version: componentVersion } = require(path.relative(__dirname, '../packages/components/package.json'));
const isProd = process.env.NODE_ENV === 'production';
const baseUrl = isProd ? '/positive-ui/' : '/';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Positive UI',
  url: `https://github.com/`,
  baseUrl,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  trailingSlash: true,

  // 自定义的字段
  // customFields: {
  //   // demo 的 github 文件源前缀
  //   demoSourceUrl: 'https://github.com/decSunshineHe/positive-ui/tree/master/website',
  //   // codeSandbox package.json 配置，目前只支持 dependencies 和 devDependencies
  //   codeSandboxPacakgeConfig: {
  //     dependencies: {
  //       react: '^17.0.2',
  //       'react-dom': '^17.0.2',
  //       antd: '4.24.7',
  //     },
  //     devDependencies: {
  //       less: '^4.1.3',
  //       'less-loader': '^7.3.0',
  //     },
  //   },
  // },

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'decSunshineHe', // Usually your GitHub org/user name.
  projectName: 'positive-ui', // Usually your repo name.

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
          sidebarPath: require.resolve('./componentsSidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/decSunshineHe/positive-ui/tree/master',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  plugins: ['./plugins/less', './plugins/sass', './plugins/alias', './plugins/mdx', './plugins/tsdoc'],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Positive UI',
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
            href: 'https://github.com/decSunshineHe/positive-ui',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: true,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
