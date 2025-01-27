// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'uSpeedo',
  tagline: 'Check out our API reference documentation and quickstarts. From using the SDK to sample apps for Web, iOS, and Android, you\'ll get what you need.',
  favicon: 'img/favicon.ico',
  // Set the production url of your site here
  url: 'https://docs.uspeedo.com/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
  staticDirectories: ['static'],

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'uSpeedo', // Usually your GitHub org/user name.
  projectName: 'product', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en','zh-Hans']
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          // routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/uSpeedo/product/blob/main/docs',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/logo.png',
      navbar: {
        title: 'uSpeedo Docs',
        logo: {
          alt: 'uSpeedo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'sms',
            position: 'left',
            label: 'SMS',
          },
          { 
            type: 'docSidebar', 
            sidebarId: 'sdk',
            position: 'left',
            label: 'SDK',
          },
          { 
            type: 'docSidebar', 
            sidebarId: 'api',
            position: 'left',
            label: 'API',
          },
          {
            href: 'https://github.com/uSpeedo/product',
            label: 'GitHub',
            position: 'right',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          }
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        // theme: require('prism-react-renderer/themes/dracula'),
        darkTheme: darkCodeTheme,
      },
      giscus: {
        repo: 'uSpeedo/product',
        repoId: 'R_kgDOJEVgeQ',
        category: 'Announcements',
        categoryId: 'DIC_kwDOJEVgec4CUsqV',
        dataLang: "en"
      },
    }),
    clientModules: [require.resolve('./src/clientModules/routeModules.js')]
};

module.exports = config;
