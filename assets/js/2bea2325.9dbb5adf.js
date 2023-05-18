'use strict';
(self.webpackChunkui_website = self.webpackChunkui_website || []).push([
  [785],
  {
    1332: (e, t, n) => {
      n.r(t),
        n.d(t, {
          assets: () => s,
          contentTitle: () => l,
          default: () => m,
          frontMatter: () => i,
          metadata: () => o,
          toc: () => p,
        });
      var r = n(5773),
        a = (n(7378), n(5318));
      const i = { sidebar_position: 2 },
        l = '\u5feb\u901f\u4e0a\u624b',
        o = {
          unversionedId: 'guide/use',
          id: 'guide/use',
          title: '\u5feb\u901f\u4e0a\u624b',
          description: '\u5b89\u88c5',
          source: '@site/docs/guide/use.md',
          sourceDirName: 'guide',
          slug: '/guide/use',
          permalink: '/positive-map/guide/use',
          draft: !1,
          tags: [],
          version: 'current',
          sidebarPosition: 2,
          frontMatter: { sidebar_position: 2 },
          sidebar: 'guideSidebar',
          previous: { title: '\u4ecb\u7ecd', permalink: '/positive-map/guide/intro' },
          next: { title: '\u66f4\u65b0\u65e5\u5fd7', permalink: '/positive-map/guide/log' },
        },
        s = {},
        p = [
          { value: '\u5b89\u88c5', id: '\u5b89\u88c5', level: 2 },
          { value: '\u57fa\u672c\u4f7f\u7528', id: '\u57fa\u672c\u4f7f\u7528', level: 2 },
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
          { value: '\u8def\u7531\u76f8\u5173', id: '\u8def\u7531\u76f8\u5173', level: 2 },
          { value: '\u672c\u5730\u5f00\u53d1', id: '\u672c\u5730\u5f00\u53d1', level: 2 },
          { value: 'Proxy \u4ee3\u7406', id: 'proxy-\u4ee3\u7406', level: 3 },
          { value: '\u68c0\u6d4b\u767b\u5f55\u6001', id: '\u68c0\u6d4b\u767b\u5f55\u6001', level: 3 },
        ],
        u = { toc: p },
        d = 'wrapper';
      function m(e) {
        let { components: t, ...n } = e;
        return (0, a.kt)(
          d,
          (0, r.Z)({}, u, n, { components: t, mdxType: 'MDXLayout' }),
          (0, a.kt)('h1', { id: '\u5feb\u901f\u4e0a\u624b' }, '\u5feb\u901f\u4e0a\u624b'),
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
          (0, a.kt)('h2', { id: '\u57fa\u672c\u4f7f\u7528' }, '\u57fa\u672c\u4f7f\u7528'),
          (0, a.kt)(
            'pre',
            null,
            (0, a.kt)(
              'code',
              { parentName: 'pre', className: 'language-js' },
              "// \u4e1a\u52a1\u4ee3\u7801\nimport { SwitchStaff } from '@positive-map/rc-components';\n"
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
              "import SwitchStaff from '@positive-map/rc-components/lib/SwitchStaff';\n"
            )
          ),
          (0, a.kt)(
            'h3',
            { id: '\u65b9\u5f0f\u4e8cbabel-plugin-import' },
            '\u65b9\u5f0f\u4e8c\uff1ababel-plugin-import'
          ),
          (0, a.kt)('p', null, '\u9700\u8981\u5b89\u88c5 babel-plugin-import \u63d2\u4ef6'),
          (0, a.kt)(
            'pre',
            null,
            (0, a.kt)(
              'code',
              { parentName: 'pre', className: 'language-shell' },
              '$ npm install babel-plugin-import --save-dev\n'
            )
          ),
          (0, a.kt)(
            'pre',
            null,
            (0, a.kt)(
              'code',
              { parentName: 'pre', className: 'language-js' },
              "// babel.config.js\nmodule.exports = {\n  plugins: [\n    [\n      'import',\n      {\n        libraryName: '@positive-map/rc-components',\n        libraryDirectory: 'lib',\n        camel2DashComponentName: false,\n      },\n    ],\n  ],\n};\n"
            )
          ),
          (0, a.kt)('h2', { id: '\u8def\u7531\u76f8\u5173' }, '\u8def\u7531\u76f8\u5173'),
          (0, a.kt)(
            'p',
            null,
            '\u7ec4\u4ef6\u5e93\u4e2d\u5934\u90e8\u5bfc\u822a\u7b49\u7ec4\u4ef6\u4f7f\u7528\u4e86 react-router-dom \u7684 useLocation \u7b49 hook\uff0c\u56e0\u6b64\u9700\u8981\u5728\u9879\u76ee\u4e2d\u7684\u8def\u7531\u914d\u7f6e\u4e2d\u4f7f\u7528 BrowserRouter \u5305\u88f9\uff0c\u5426\u5219\u4f1a\u62a5\u9519\u3002\n\u793a\u4f8b\u4ee3\u7801\u5982\u4e0b\uff1a'
          ),
          (0, a.kt)(
            'pre',
            null,
            (0, a.kt)(
              'code',
              { parentName: 'pre', className: 'language-js' },
              'import { BrowserRouter as Router } from \'react-router-dom\';\n\nconst root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);\nroot.render(\n  <React.StrictMode>\n    <Router>\n      <App />\n    </Router>\n  </React.StrictMode>\n);\n\n'
            )
          ),
          (0, a.kt)('h2', { id: '\u672c\u5730\u5f00\u53d1' }, '\u672c\u5730\u5f00\u53d1'),
          (0, a.kt)('h3', { id: 'proxy-\u4ee3\u7406' }, 'Proxy \u4ee3\u7406'),
          (0, a.kt)(
            'p',
            null,
            '\u9700\u8981\u5bf9 devServer \u8bbe\u7f6e Proxy \u5c5e\u6027\uff0c\u5bf9\u7ec4\u4ef6\u5185\u7f6e\u8bf7\u6c42\u7684 api \u548c server \u8fdb\u884c\u4ee3\u7406\uff0c\u89e3\u51b3\u672c\u5730\u5f00\u53d1\u7684\u8de8\u57df\u95ee\u9898\uff0c\u793a\u4f8b\u4ee3\u7801\u5982\u4e0b\uff1a'
          ),
          (0, a.kt)(
            'pre',
            null,
            (0, a.kt)(
              'code',
              { parentName: 'pre', className: 'language-js' },
              "  const serverAddress = 'http://10.224.32.144:8080/'; // \u540e\u7aef\u5730\u5740\n\n  devServer: {\n    port: 3000,\n    proxy: {\n      \"/api\": {\n        target: serverAddress, // \u540e\u7aef\u5730\u5740,\n        changeOrigin: true,\n        secure: false,\n      },\n      '/server': {\n        target: serverAddress,\n        changeOrigin: true,\n        secure: false,\n      },\n    },\n  },\n"
            )
          ),
          (0, a.kt)('h3', { id: '\u68c0\u6d4b\u767b\u5f55\u6001' }, '\u68c0\u6d4b\u767b\u5f55\u6001'),
          (0, a.kt)(
            'p',
            null,
            '\u5f53\u5185\u7f6e\u63a5\u53e3\u68c0\u6d4b\u672a\u767b\u5f55\u65f6\uff0c\u4f1a\u5f39\u51fa\u6846\u63d0\u793a\uff0c\u70b9\u51fb\u786e\u5b9a\u540e\u4f1a\u8df3\u8f6c\u5230\u767b\u5f55\u9875\u8fdb\u884c\u767b\u5f55\uff0c\u767b\u5f55\u540e\u4f1a\u8df3\u8f6c\u5230\u9009\u62e9\u79df\u6237\u9875\u9762\uff0c\u9009\u62e9\u79df\u6237\u540e\u4f1a\u8df3\u8f6c\u5230\u539f\u9875\u9762\u3002'
          ),
          (0, a.kt)(
            'p',
            null,
            '\u6ce8\u610f\uff1a\u751f\u4ea7\u73af\u5883\u4e0b\u4e5f\u4f1a\u68c0\u6d4b\u767b\u5f55\u6001\uff0c\u4f46\u4e0d\u4f1a\u5f39\u51fa\u6846\u63d0\u793a\uff0c\u800c\u662f\u76f4\u63a5\u8df3\u8f6c\u5230\u767b\u5f55\u9875\u3002'
          )
        );
      }
      m.isMDXComponent = !0;
    },
  },
]);
