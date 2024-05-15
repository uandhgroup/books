// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer').themes.github;
const darkCodeTheme = require('prism-react-renderer').themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'tech.books',
  tagline: 'Where developers grow together',
  url: 'https://books.hhf.co.in/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'booksdothhf', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/dailydotdev/docs/edit/main',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: 'https://github.com/dailydotdev/docs/edit/main',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: ['UA-109059578-7', 'G-Y94RMTGW0M'],
          // Optional fields.
          anonymizeIP: false, // Should IPs be anonymized?
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      algolia: {
        // If Algolia did not provide you any appId, use 'BH4D9OD16A'
        appId: '6U4HGKGU11',

        // Public API key: it is safe to commit it
        apiKey: '59ac6e87811a06cd6f1de04ce4825117',

        indexName: 'docs-daily',

        // Optional: see doc section below
        contextualSearch: true,

        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.

        // Optional: Algolia search parameters
        replaceSearchResultPathname: {
          from: '/docs/', // or as RegExp: /\/docs\//
          to: '/',
        //... other Algolia params
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      navbar: {
        // title: 'My Site',
        logo: {
          alt: 'daily.dev Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            label: 'Docs',
            type: 'doc',
            docId: 'intro',
            position: 'left',
          },

          {
            label: 'Changelog',
            href: 'https://app.daily.dev/sources/daily_updates',
            position: 'left',
          },
          {
            href: 'https://github.com/dailydotdev/docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'SOFTWARE Books',
            items: [
              {
                label: 'Home',
                to: 'https://daily.dev/',
              },
              {
                label: 'Chrome extension',
                to: 'https://chrome.google.com/webstore/detail/dailydev-the-homepage-dev/jlmpjdjjbgclbocgajdjefcidcncaied',
              },
              {
                label: 'Firefox add-on',
                to: 'https://addons.mozilla.org/en-US/firefox/addon/daily/',
              },
              {
                label: 'Web version',
                to: 'https://app.daily.dev/',
              },
              {
                label: 'Changelog',
                to: 'https://changelog.daily.dev/',
              },
            ],
          },
          {
            title: 'HARDWARE Books',
            items: [
              {
                label: 'Open source',
                to: 'https://github.com/dailydotdev/.github/blob/master/CONTRIBUTING.md',
              },
              {
                label: 'Feature requests',
                to: 'https://github.com/dailydotdev/daily/discussions',
              },
              {
                label: 'Online events',
                to: 'https://www.meetup.com/the-monthly-dev-world-class-talks-by-expert-developers/',
              },
              {
                label: 'Swag store',
                to: 'https://store.daily.dev/',
              },
            ],
          },
          {
            title: 'On-Premise Hosting',
            items: [
              {
                label: 'Blog',
                to: 'https://daily.dev/blog',
              },
              {
                label: 'Brand book',
                to: 'https://brand.daily.dev/',
              },
              {
                label: 'Contact',
                to: 'https://daily.dev/contact',
              },
              {
                label: 'Privacy',
                to: 'https://daily.dev/privacy',
              },
              {
                label: 'Terms',
                to: 'https://daily.dev/tos',
              },
            ],
          },
          {
            title: 'Social',
            items: [
              {
                label: 'Twitter/X',
                to: 'https://twitter.com/hhf_tech',
              },
              {
                label: 'GitHub',
                to: 'https://github.com/hhf_tech',
              },
              {
                label: 'YouTube',
                to: 'https://www.youtube.com/channel/UCXUjtTfQWJa0G9K_SqRm3jQ',
              },
              {
                label: 'Discord',
                to: 'https://www.instagram.com/dailydotdev/',
              },
              {
                label: 'Donate',
                to: 'https://www.tiktok.com/@dailydotdev',
              },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} HHF Books. All rights not-reserved :). HHF Books is maintained by HHF-TechTips.`,
      },
      announcementBar: {
        id: 'support_us',
        content:
          'Try HHF Tech Tips <a target="_blank" rel="noopener noreferrer" href="https://techtips.hhf.co.in"> now!</a>',
        backgroundColor: '#fafbfc',
        textColor: '#091E42',
        isCloseable: true,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
