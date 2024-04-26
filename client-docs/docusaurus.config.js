// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer').themes.github;
const darkCodeTheme = require('prism-react-renderer').themes.vsDark;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ASAFARIM Learn Docs',
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
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/AliSafari-IT/asmsite',
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
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'ASAFARIM Learn Docs',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
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
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
    plugins: [ [
        'docusaurus-plugin-openapi-docs',
        {
          id: "apiDocs",
          docsPluginId: "classic",
          config: {
            petstore: { // Note: petstore key is treated as the <id> and can be used to specify an API doc instance when using CLI commands
              specPath: "examples/petstore.yaml", // Path to designated spec file
              outputDir: "api/petstore", // Output directory for generated .mdx docs
              sidebarOptions: {
                groupPathsBy: "tag",
              },
            },
            burgers: {
              specPath: "examples/food/burgers/openapi.yaml",
              outputDir: "api/food/burgers",
            }
          }
        },
      ]
    ],
    themes: ["docusaurus-theme-openapi-docs"], 
  
};

module.exports = config;
