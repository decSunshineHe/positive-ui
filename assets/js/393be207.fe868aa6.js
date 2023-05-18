'use strict';
(self.webpackChunkui_website = self.webpackChunkui_website || []).push([
  [414],
  {
    7239: (e, t, a) => {
      a.r(t),
        a.d(t, { contentTitle: () => r, default: () => m, frontMatter: () => o, metadata: () => s, toc: () => d });
      var n = a(5773),
        p = (a(7378), a(5318));
      const o = { title: 'Markdown page example' },
        r = 'Markdown page example',
        s = {
          type: 'mdx',
          permalink: '/positive-map/markdown-page',
          source: '@site/src/pages/markdown-page.md',
          title: 'Markdown page example',
          description: "You don't need React to write simple standalone pages.",
          frontMatter: { title: 'Markdown page example' },
        },
        d = [],
        i = { toc: d },
        l = 'wrapper';
      function m(e) {
        let { components: t, ...a } = e;
        return (0, p.kt)(
          l,
          (0, n.Z)({}, i, a, { components: t, mdxType: 'MDXLayout' }),
          (0, p.kt)('h1', { id: 'markdown-page-example' }, 'Markdown page example'),
          (0, p.kt)('p', null, "You don't need React to write simple standalone pages.")
        );
      }
      m.isMDXComponent = !0;
    },
  },
]);
