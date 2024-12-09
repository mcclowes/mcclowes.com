// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'mcclowes',
  tagline: 'Personal blog',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://mcclowes.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'mcclowes', // Usually your GitHub org/user name.
  projectName: 'mcclowes.com', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // editUrl:
          //   'https://github.com/mcclowes/mcclowes.com',
        },
        blog: {
          showReadingTime: true,
          // editUrl:
          //   'https://github.com/mcclowes/mcclowes.com',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: [
    'vercel-analytics',
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        defaultMode: 'dark',
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'mcclowes',
        logo: {
          alt: 'mcclowes logo',
          src: 'img/logo.svg',
          srcDark: 'img/logo-dark.svg'
        },
        hideOnScroll: true,
        items: [
          {to: '/blog', label: 'Blog', position: 'left'},
          {to: '/about-me',label: 'About',position: 'left'},
          //{ to: '/docs', label: 'Docs', position: 'left' },
          // {
          //   type: 'docSidebar',
          //   sidebarId: 'tutorialSidebar',
          //   position: 'left',
          //   label: 'Tutorial',
          // },
          {
            href: 'https://github.com/mcclowes',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Pages',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'About',
                to: '/about-me',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/maxclaytonclowes/',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/mcclowes',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/mcclowes',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} mcclowes, Built with Docusaurus.`,
      },
      
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['bash', 'diff', 'json'],
      },
    }),
};

module.exports = config;
