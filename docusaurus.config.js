// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import { themes as prismThemes } from 'prism-react-renderer';
import { createRequire } from 'module';
import { fileURLToPath } from 'url';

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

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'docusaurus-plugin-glossary/preset',
      /** @type {import('@docusaurus/preset-classic').Options & {glossary?: any}} */
      ({
        glossary: {
          glossaryPath: 'glossary/glossary.json',
          routePath: '/glossary',
        },
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // editUrl:
          //   'https://github.com/mcclowes/mcclowes.com',
        },
        blog: {
          showReadingTime: true,
          blogSidebarCount: 'ALL',
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
    'docusaurus-plugin-sass',
    [
      'docusaurus-plugin-cookie-consent',
      {
        enabled: true,
        title: 'Cookie Consent',
        description:
          'We use cookies and browser storage to enhance your browsing experience, analyze site traffic, and improve future content. Read our [Privacy Policy](/privacy) for details.',
        storageKey: 'mcclowes-cookie-consent',
        toastMode: true,
        acceptAllText: 'Accept All',
        rejectOptionalText: 'Essential Only',
        rejectAllText: 'Reject All',
        categories: {
          necessary: {
            label: 'Essential Cookies',
            description:
              'Required for the website to function properly, including storing your cookie preferences. These cannot be disabled.',
          },
          analytics: {
            label: 'Analytics Cookies',
            description:
              'Help us understand how visitors interact with the site through PostHog analytics. Includes web vitals tracking and optional session recording.',
          },
          marketing: {
            label: 'Marketing Cookies',
            description: 'Currently not used on this site.',
            enabled: false,
          },
          functional: {
            label: 'Functional Cookies',
            description:
              'Enable enhanced functionality like Giscus comments (requires GitHub authentication). Stores authentication tokens in browser storage.',
          },
        },
      },
    ],
    '@docusaurus/theme-live-codeblock',
    'docusaurus-plugin-image-zoom',
    [require.resolve('./src/plugins/posthog-plugin'), {}],
    [
      '@docusaurus/plugin-ideal-image',
      {
        quality: 70,
        max: 1030, // max resized image's size
        min: 640, // min resized image's size
        steps: 2, // number of images generated between min and max
        disableInDev: false,
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
          { to: '/start-here', label: 'Start here', position: 'left' },
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            type: 'docSidebar',
            sidebarId: 'projectsSidebar',
            position: 'left',
            label: 'Projects',
          },
          { to: '/about-me', label: 'About', position: 'left' },
          {
            href: 'https://cv.mcclowes.com/',
            label: 'CV',
            position: 'left',
          },
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
                label: 'Projects',
                to: '/docs/intro',
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
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },
};

export default config;
