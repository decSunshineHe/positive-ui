'use strict';
(self.webpackChunkui_website = self.webpackChunkui_website || []).push([
  [567],
  {
    3460: (e, t, n) => {
      n.r(t),
        n.d(t, {
          assets: () => p,
          contentTitle: () => l,
          default: () => u,
          frontMatter: () => o,
          metadata: () => r,
          toc: () => s,
        });
      var i = n(5773),
        a = (n(7378), n(5318));
      const o = { sidebar_position: 1 },
        l = '\u4ecb\u7ecd',
        r = {
          unversionedId: 'intro',
          id: 'intro',
          title: '\u4ecb\u7ecd',
          description: 'Positive Map \u57fa\u4e8e React 18 + Antd 5 \u7684\u4e1a\u52a1\u7ec4\u4ef6\u5e93',
          source: '@site/docs/components/intro.md',
          sourceDirName: '.',
          slug: '/intro',
          permalink: '/positive-map/components/intro',
          draft: !1,
          tags: [],
          version: 'current',
          sidebarPosition: 1,
          frontMatter: { sidebar_position: 1 },
          sidebar: 'componentsSidebar',
          next: {
            title: '\u9875\u9762\u5143\u7d20',
            permalink: '/positive-map/components/category/\u9875\u9762\u5143\u7d20',
          },
        },
        p = {},
        s = [
          { value: '\u7279\u6027', id: '\u7279\u6027', level: 2 },
          { value: '\u5b89\u88c5', id: '\u5b89\u88c5', level: 2 },
          { value: '\u4f7f\u7528', id: '\u4f7f\u7528', level: 2 },
          { value: '\u6309\u9700\u52a0\u8f7d', id: '\u6309\u9700\u52a0\u8f7d', level: 2 },
          {
            value: '\u65b9\u5f0f\u4e00\uff1a\u7cbe\u786e\u52a0\u8f7d',
            id: '\u65b9\u5f0f\u4e00\u7cbe\u786e\u52a0\u8f7d',
            level: 3,
          },
          {
            value: '\u65b9\u5f0f\u4e8c\uff1ababel-plugin-import',
            id: '\u65b9\u5f0f\u4e8cbabel-plugin-import',
            level: 3,
          },
        ],
        m = { toc: s },
        c = 'wrapper';
      function u(e) {
        let { components: t, ...n } = e;
        return (0, a.kt)(
          c,
          (0, i.Z)({}, m, n, { components: t, mdxType: 'MDXLayout' }),
          (0, a.kt)('h1', { id: '\u4ecb\u7ecd' }, '\u4ecb\u7ecd'),
          (0, a.kt)('p', null, 'Positive Map \u57fa\u4e8e React 18 + Antd 5 \u7684\u4e1a\u52a1\u7ec4\u4ef6\u5e93'),
          (0, a.kt)('h2', { id: '\u7279\u6027' }, '\u7279\u6027'),
          (0, a.kt)(
            'ul',
            null,
            (0, a.kt)('li', { parentName: 'ul' }, '\u57fa\u4e8e React 18 + Antd 5'),
            (0, a.kt)('li', { parentName: 'ul' }, '\u6309\u9700\u52a0\u8f7d'),
            (0, a.kt)('li', { parentName: 'ul' }, '\u652f\u6301 TypeScript')
          ),
          (0, a.kt)('h2', { id: '\u5b89\u88c5' }, '\u5b89\u88c5'),
          (0, a.kt)(
            'pre',
            null,
            (0, a.kt)(
              'code',
              { parentName: 'pre', className: 'language-shell' },
              '$ npm install @positive-map/rc-components --save-dev\n'
            )
          ),
          (0, a.kt)('h2', { id: '\u4f7f\u7528' }, '\u4f7f\u7528'),
          (0, a.kt)(
            'pre',
            null,
            (0, a.kt)(
              'code',
              { parentName: 'pre', className: 'language-js' },
              "// \u4e1a\u52a1\u4ee3\u7801\nimport { NumericKeyboard } from '@positive-map/rc-components';\n"
            )
          ),
          (0, a.kt)('h2', { id: '\u6309\u9700\u52a0\u8f7d' }, '\u6309\u9700\u52a0\u8f7d'),
          (0, a.kt)(
            'h3',
            { id: '\u65b9\u5f0f\u4e00\u7cbe\u786e\u52a0\u8f7d' },
            '\u65b9\u5f0f\u4e00\uff1a\u7cbe\u786e\u52a0\u8f7d'
          ),
          (0, a.kt)(
            'pre',
            null,
            (0, a.kt)(
              'code',
              { parentName: 'pre', className: 'language-js' },
              "import NumericKeyboard from '@positive-map/rc-components/lib/NumericKeyboard';\n"
            )
          ),
          (0, a.kt)(
            'h3',
            { id: '\u65b9\u5f0f\u4e8cbabel-plugin-import' },
            '\u65b9\u5f0f\u4e8c\uff1ababel-plugin-import'
          ),
          (0, a.kt)(
            'pre',
            null,
            (0, a.kt)(
              'code',
              { parentName: 'pre', className: 'language-js' },
              "// babel.config.js\nmodule.exports = {\n  plugins: [\n    [\n      'import',\n      {\n        libraryName: '@positive-map/rc-components',\n        libraryDirectory: 'lib',\n        camel2DashComponentName: false,\n      },\n    ],\n  ],\n};\n"
            )
          )
        );
      }
      u.isMDXComponent = !0;
    },
  },
]);
