// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer').themes.github;
const darkCodeTheme = require('prism-react-renderer').themes.vsDark;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ASafariM Learn Docs',
  tagline: 'Learning material and blog posts',
  url: 'https://asafarim.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'ASAFARIM', // Usually your GitHub org/user name.
  projectName: 'asmsite', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/AliSafari-IT/asmsite',
          remarkPlugins: [require('mdx-mermaid')],
          rehypePlugins: [],
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/AliSafari-IT/asmsite/edit/main/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  stylesheets: [
    'https://fonts.googleapis.com/css?family=Sen|Source+Code+Pro',
    'https://at-ui.github.io/feather-font/css/iconfont.css',
  ],
  plugins:[
    [
      'docusaurus-plugin-openapi-docs',
      {
        id: "api", // plugin id
        docsPluginId: "classic", // id of plugin-content-docs or preset for rendering docs
        config: {
          petstore: { // the <id> referenced when running CLI commands
            specPath: "examples/petstore.yaml", // path to OpenAPI spec, URLs supported
            outputDir: "api/petstore", // output directory for generated files
            sidebarOptions: { // optional, instructs plugin to generate sidebar.js
              groupPathsBy: "tag", // group sidebar items by operation "tag"
            },
          },
          burgers: {
            specPath: "examples/food/burgers/openapi.yaml",
            outputDir: "api/food/burgers",
          }
        }
      },
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark', // Default to light mode
        disableSwitch: false, // Allow users to switch to dark mode
        respectPrefersColorScheme: true, // Optionally respect the OS-level scheme preference
      },
      navbar: {
        style: 'dark',
        title: 'ASafariM',
        logo: {
          alt: 'ASafariM Logo',
          src: 'img/logoT.svg',
          width: '50px',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Tutorial',
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: 'https://github.com/AliSafari-IT',
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
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/users/10703628/ali-safari',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/asmsite',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/AsafarimIT',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/AliSafari-IT/asmsite',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date(
          2024
        ).getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
    }),
    themes: ["docusaurus-theme-openapi-docs"], // export theme components
};

module.exports = config;
