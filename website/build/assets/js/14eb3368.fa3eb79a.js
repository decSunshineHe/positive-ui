'use strict';
(self.webpackChunkui_website = self.webpackChunkui_website || []).push([
  [817],
  {
    6821: (e, t, a) => {
      a.d(t, { Z: () => E });
      var n = a(5773),
        r = a(7378),
        i = a(8944),
        l = a(5484),
        s = a(5161),
        c = a(8862),
        o = a(1884),
        m = a(9213),
        d = a(8948);
      function u(e) {
        return r.createElement(
          'svg',
          (0, n.Z)({ viewBox: '0 0 24 24' }, e),
          r.createElement('path', {
            d: 'M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z',
            fill: 'currentColor',
          })
        );
      }
      const b = { breadcrumbHomeIcon: 'breadcrumbHomeIcon_sfvy' };
      function h() {
        const e = (0, d.Z)('/');
        return r.createElement(
          'li',
          { className: 'breadcrumbs__item' },
          r.createElement(
            o.Z,
            {
              'aria-label': (0, m.I)({
                id: 'theme.docs.breadcrumbs.home',
                message: 'Home page',
                description: 'The ARIA label for the home page in the breadcrumbs',
              }),
              className: 'breadcrumbs__link',
              href: e,
            },
            r.createElement(u, { className: b.breadcrumbHomeIcon })
          )
        );
      }
      const v = { breadcrumbsContainer: 'breadcrumbsContainer_T5ub' };
      function p(e) {
        let { children: t, href: a, isLast: n } = e;
        const i = 'breadcrumbs__link';
        return n
          ? r.createElement('span', { className: i, itemProp: 'name' }, t)
          : a
          ? r.createElement(
              o.Z,
              { className: i, href: a, itemProp: 'item' },
              r.createElement('span', { itemProp: 'name' }, t)
            )
          : r.createElement('span', { className: i }, t);
      }
      function g(e) {
        let { children: t, active: a, index: l, addMicrodata: s } = e;
        return r.createElement(
          'li',
          (0, n.Z)({}, s && { itemScope: !0, itemProp: 'itemListElement', itemType: 'https://schema.org/ListItem' }, {
            className: (0, i.default)('breadcrumbs__item', { 'breadcrumbs__item--active': a }),
          }),
          t,
          r.createElement('meta', { itemProp: 'position', content: String(l + 1) })
        );
      }
      function E() {
        const e = (0, s.s1)(),
          t = (0, c.Ns)();
        return e
          ? r.createElement(
              'nav',
              {
                className: (0, i.default)(l.k.docs.docBreadcrumbs, v.breadcrumbsContainer),
                'aria-label': (0, m.I)({
                  id: 'theme.docs.breadcrumbs.navAriaLabel',
                  message: 'Breadcrumbs',
                  description: 'The ARIA label for the breadcrumbs',
                }),
              },
              r.createElement(
                'ul',
                { className: 'breadcrumbs', itemScope: !0, itemType: 'https://schema.org/BreadcrumbList' },
                t && r.createElement(h, null),
                e.map((t, a) => {
                  const n = a === e.length - 1;
                  return r.createElement(
                    g,
                    { key: a, active: n, index: a, addMicrodata: !!t.href },
                    r.createElement(p, { href: t.href, isLast: n }, t.label)
                  );
                })
              )
            )
          : null;
      }
    },
    777: (e, t, a) => {
      a.r(t), a.d(t, { default: () => I });
      var n = a(7378),
        r = a(8831),
        i = a(5161),
        l = a(8948),
        s = a(8944),
        c = a(1884),
        o = a(5626),
        m = a(9213);
      const d = {
        cardContainer: 'cardContainer_H47c',
        cardTitle: 'cardTitle_tTnA',
        cardDescription: 'cardDescription_rTl4',
      };
      function u(e) {
        let { href: t, children: a } = e;
        return n.createElement(c.Z, { href: t, className: (0, s.default)('card padding--lg', d.cardContainer) }, a);
      }
      function b(e) {
        let { href: t, icon: a, title: r, description: i } = e;
        return n.createElement(
          u,
          { href: t },
          n.createElement('h2', { className: (0, s.default)('text--truncate', d.cardTitle), title: r }, a, ' ', r),
          i && n.createElement('p', { className: (0, s.default)('text--truncate', d.cardDescription), title: i }, i)
        );
      }
      function h(e) {
        let { item: t } = e;
        const a = (0, i.Wl)(t);
        return a
          ? n.createElement(b, {
              href: a,
              icon: '\ud83d\uddc3\ufe0f',
              title: t.label,
              description:
                t.description ??
                (0, m.I)(
                  {
                    message: '{count} items',
                    id: 'theme.docs.DocCard.categoryDescription',
                    description:
                      'The default description for a category card in the generated index about how many items this category includes',
                  },
                  { count: t.items.length }
                ),
            })
          : null;
      }
      function v(e) {
        let { item: t } = e;
        const a = (0, o.Z)(t.href) ? '\ud83d\udcc4\ufe0f' : '\ud83d\udd17',
          r = (0, i.xz)(t.docId ?? void 0);
        return n.createElement(b, {
          href: t.href,
          icon: a,
          title: t.label,
          description: t.description ?? r?.description,
        });
      }
      function p(e) {
        let { item: t } = e;
        switch (t.type) {
          case 'link':
            return n.createElement(v, { item: t });
          case 'category':
            return n.createElement(h, { item: t });
          default:
            throw new Error(`unknown item type ${JSON.stringify(t)}`);
        }
      }
      function g(e) {
        let { className: t } = e;
        const a = (0, i.jA)();
        return n.createElement(E, { items: a.items, className: t });
      }
      function E(e) {
        const { items: t, className: a } = e;
        if (!t) return n.createElement(g, e);
        const r = (0, i.MN)(t);
        return n.createElement(
          'section',
          { className: (0, s.default)('row', a) },
          r.map((e, t) =>
            n.createElement(
              'article',
              { key: t, className: 'col col--6 margin-bottom--lg' },
              n.createElement(p, { item: e })
            )
          )
        );
      }
      var f = a(4619),
        N = a(4506),
        _ = a(5069),
        Z = a(6821),
        L = a(1999);
      const T = { generatedIndexPage: 'generatedIndexPage_cf3v', list: 'list_qoTc', title: 'title_Ww3I' };
      function k(e) {
        let { categoryGeneratedIndex: t } = e;
        return n.createElement(r.d, {
          title: t.title,
          description: t.description,
          keywords: t.keywords,
          image: (0, l.Z)(t.image),
        });
      }
      function x(e) {
        let { categoryGeneratedIndex: t } = e;
        const a = (0, i.jA)();
        return n.createElement(
          'div',
          { className: T.generatedIndexPage },
          n.createElement(N.Z, null),
          n.createElement(Z.Z, null),
          n.createElement(_.Z, null),
          n.createElement(
            'header',
            null,
            n.createElement(L.Z, { as: 'h1', className: T.title }, t.title),
            t.description && n.createElement('p', null, t.description)
          ),
          n.createElement(
            'article',
            { className: 'margin-top--lg' },
            n.createElement(E, { items: a.items, className: T.list })
          ),
          n.createElement(
            'footer',
            { className: 'margin-top--lg' },
            n.createElement(f.Z, { previous: t.navigation.previous, next: t.navigation.next })
          )
        );
      }
      function I(e) {
        return n.createElement(n.Fragment, null, n.createElement(k, e), n.createElement(x, e));
      }
    },
    4619: (e, t, a) => {
      a.d(t, { Z: () => o });
      var n = a(5773),
        r = a(7378),
        i = a(9213),
        l = a(8944),
        s = a(1884);
      function c(e) {
        const { permalink: t, title: a, subLabel: n, isNext: i } = e;
        return r.createElement(
          s.Z,
          {
            className: (0, l.default)(
              'pagination-nav__link',
              i ? 'pagination-nav__link--next' : 'pagination-nav__link--prev'
            ),
            to: t,
          },
          n && r.createElement('div', { className: 'pagination-nav__sublabel' }, n),
          r.createElement('div', { className: 'pagination-nav__label' }, a)
        );
      }
      function o(e) {
        const { previous: t, next: a } = e;
        return r.createElement(
          'nav',
          {
            className: 'pagination-nav docusaurus-mt-lg',
            'aria-label': (0, i.I)({
              id: 'theme.docs.paginator.navAriaLabel',
              message: 'Docs pages navigation',
              description: 'The ARIA label for the docs pagination',
            }),
          },
          t &&
            r.createElement(
              c,
              (0, n.Z)({}, t, {
                subLabel: r.createElement(
                  i.Z,
                  {
                    id: 'theme.docs.paginator.previous',
                    description: 'The label used to navigate to the previous doc',
                  },
                  'Previous'
                ),
              })
            ),
          a &&
            r.createElement(
              c,
              (0, n.Z)({}, a, {
                subLabel: r.createElement(
                  i.Z,
                  { id: 'theme.docs.paginator.next', description: 'The label used to navigate to the next doc' },
                  'Next'
                ),
                isNext: !0,
              })
            )
        );
      }
    },
    5069: (e, t, a) => {
      a.d(t, { Z: () => c });
      var n = a(7378),
        r = a(8944),
        i = a(9213),
        l = a(5484),
        s = a(5611);
      function c(e) {
        let { className: t } = e;
        const a = (0, s.E)();
        return a.badge
          ? n.createElement(
              'span',
              { className: (0, r.default)(t, l.k.docs.docVersionBadge, 'badge badge--secondary') },
              n.createElement(
                i.Z,
                { id: 'theme.docs.versionBadge.label', values: { versionLabel: a.label } },
                'Version: {versionLabel}'
              )
            )
          : null;
      }
    },
    4506: (e, t, a) => {
      a.d(t, { Z: () => p });
      var n = a(7378),
        r = a(8944),
        i = a(353),
        l = a(1884),
        s = a(9213),
        c = a(2935),
        o = a(5484),
        m = a(4453),
        d = a(5611);
      const u = {
        unreleased: function (e) {
          let { siteTitle: t, versionMetadata: a } = e;
          return n.createElement(
            s.Z,
            {
              id: 'theme.docs.versions.unreleasedVersionLabel',
              description: "The label used to tell the user that he's browsing an unreleased doc version",
              values: { siteTitle: t, versionLabel: n.createElement('b', null, a.label) },
            },
            'This is unreleased documentation for {siteTitle} {versionLabel} version.'
          );
        },
        unmaintained: function (e) {
          let { siteTitle: t, versionMetadata: a } = e;
          return n.createElement(
            s.Z,
            {
              id: 'theme.docs.versions.unmaintainedVersionLabel',
              description: "The label used to tell the user that he's browsing an unmaintained doc version",
              values: { siteTitle: t, versionLabel: n.createElement('b', null, a.label) },
            },
            'This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.'
          );
        },
      };
      function b(e) {
        const t = u[e.versionMetadata.banner];
        return n.createElement(t, e);
      }
      function h(e) {
        let { versionLabel: t, to: a, onClick: r } = e;
        return n.createElement(
          s.Z,
          {
            id: 'theme.docs.versions.latestVersionSuggestionLabel',
            description: 'The label used to tell the user to check the latest version',
            values: {
              versionLabel: t,
              latestVersionLink: n.createElement(
                'b',
                null,
                n.createElement(
                  l.Z,
                  { to: a, onClick: r },
                  n.createElement(
                    s.Z,
                    {
                      id: 'theme.docs.versions.latestVersionLinkLabel',
                      description: 'The label used for the latest version suggestion link label',
                    },
                    'latest version'
                  )
                )
              ),
            },
          },
          'For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).'
        );
      }
      function v(e) {
        let { className: t, versionMetadata: a } = e;
        const {
            siteConfig: { title: l },
          } = (0, i.Z)(),
          { pluginId: s } = (0, c.gA)({ failfast: !0 }),
          { savePreferredVersionName: d } = (0, m.J)(s),
          { latestDocSuggestion: u, latestVersionSuggestion: v } = (0, c.Jo)(s),
          p = u ?? (g = v).docs.find(e => e.id === g.mainDocId);
        var g;
        return n.createElement(
          'div',
          {
            className: (0, r.default)(t, o.k.docs.docVersionBanner, 'alert alert--warning margin-bottom--md'),
            role: 'alert',
          },
          n.createElement('div', null, n.createElement(b, { siteTitle: l, versionMetadata: a })),
          n.createElement(
            'div',
            { className: 'margin-top--md' },
            n.createElement(h, { versionLabel: v.label, to: p.path, onClick: () => d(v.name) })
          )
        );
      }
      function p(e) {
        let { className: t } = e;
        const a = (0, d.E)();
        return a.banner ? n.createElement(v, { className: t, versionMetadata: a }) : null;
      }
    },
  },
]);
