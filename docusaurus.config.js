// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import { themes as prismThemes } from 'prism-react-renderer';
import { createRequire } from 'module';
import { fileURLToPath } from 'url';
import { getRemarkPlugin } from 'docusaurus-plugin-glossary';

const require = createRequire(import.meta.url);
const __dirname = fileURLToPath(new URL('.', import.meta.url));


/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '@mcclowes',
  tagline: 'Personal blog',
  favicon: 'img/favicon.ico',

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
          remarkPlugins: [
            getRemarkPlugin(
              {
                glossaryPath: 'glossary/glossary.json',
                routePath: '/glossary',
              },
              { siteDir: __dirname }
            ),
          ],
          // editUrl:
          //   'https://github.com/mcclowes/mcclowes.com',
        },
        blog: {
          showReadingTime: true,
          blogSidebarCount: 'ALL',
          remarkPlugins: [
            getRemarkPlugin(
              {
                glossaryPath: 'glossary/glossary.json',
                routePath: '/glossary',
              },
              { siteDir: __dirname }
            ),
          ],

          // editUrl:
          //   'https://github.com/mcclowes/mcclowes.com',
        },
        pages: {
          remarkPlugins: [
            getRemarkPlugin(
              {
                glossaryPath: 'glossary/glossary.json',
                routePath: '/glossary',
              },
              { siteDir: __dirname }
            ),
          ],
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: [
    'vercel-analytics',
    'docusaurus-plugin-sass',
    [
      'docusaurus-plugin-cookie-consent',
      {
        enabled: true,
        title: 'Cookie Consent',
        description:
          'We use cookies to enhance your browsing experience, analyze site traffic, and improve future content. You can accept all cookies or choose to accept only essential ones.',
        storageKey: 'mcclowes-cookie-consent',
        toastMode: true,
        acceptAllText: 'Accept All',
        rejectOptionalText: 'Essential Only',
        rejectAllText: 'Reject All',
        categories: {
          necessary: {
            label: 'Essential Cookies',
            description:
              'Required for the website to function properly. These cannot be disabled.',
          },
          analytics: {
            label: 'Analytics Cookies',
            description:
              'Help us understand how visitors interact with the site, analyze traffic patterns, and improve content quality.',
          },
          marketing: {
            label: 'Marketing Cookies',
            description:
              'Used to track visitors across websites to display relevant advertisements and measure campaign effectiveness.',
          },
          functional: {
            label: 'Functional Cookies',
            description:
              'Enable enhanced functionality, personalization features, and remember your preferences.',
          },
        },
      },
    ],
    '@docusaurus/theme-live-codeblock',
    'docusaurus-plugin-image-zoom',
    [require.resolve('./src/plugins/posthog-plugin'), {}],
    [
      'docusaurus-plugin-glossary',
      {
        glossaryPath: 'glossary/glossary.json',
        routePath: '/glossary',
      },
    ],
  ],

  // Inject environment variables into the client
  scripts: [
    {
      src: '/env.js',
      async: false,
    },
  ],

  themes: ['@docusaurus/theme-mermaid'],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/social-card.png',
      colorMode: {
        defaultMode: 'dark',
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: '@mcclowes',
        logo: {
          alt: 'mcclowes logo',
          src: 'img/logo.svg',
          srcDark: 'img/logo-dark.svg',
        },
        hideOnScroll: true,
        items: [
          { to: '/blog', label: 'Blog', position: 'left' },
          { to: '/about-me', label: 'About', position: 'left' },
          {
            href: 'https://cv.mcclowes.com/',
            label: 'CV',
            position: 'left',
          },
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
              {
                label: 'Glossary',
                to: '/glossary',
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

      liveCodeBlock: {
        /**
         * The position of the live playground, above or under the editor
         * Possible values: "top" | "bottom"
         */
        playgroundPosition: 'bottom',
      },

      zoom: {
        selector: '.markdown > p > img, .markdown-img',
        background: {
          light: 'rgb(255, 255, 255)',
          dark: 'rgb(50, 50, 50)',
        },
      },
    }),

  markdown: {
    mermaid: true, // In order for Mermaid code blocks in Markdown to work, you also need to enable the Remark plugin with this option
  },
};

export default config;
