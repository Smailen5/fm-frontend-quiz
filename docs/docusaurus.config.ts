import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Frontend Quiz App',
  tagline: 'Quiz interattivo sui fondamenti del frontend',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://smailen5.github.io',
  baseUrl: '/fm-frontend-quiz/',

  organizationName: 'Smailen5',
  projectName: 'fm-frontend-quiz',

  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'it',
    locales: ['it'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/Smailen5/fm-frontend-quiz/tree/main/docs/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        blog: false,
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Frontend Quiz App',
      logo: {
        alt: 'Frontend Quiz App Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'sidebar',
          position: 'left',
          label: 'Documentazione',
        },
        {
          href: 'https://github.com/Smailen5/fm-frontend-quiz',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Panoramica',
              to: '/docs/overview',
            },
            {
              label: 'Guida introduttiva',
              to: '/docs/getting-started',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/Smailen5/fm-frontend-quiz',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Smailen Vargas. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
