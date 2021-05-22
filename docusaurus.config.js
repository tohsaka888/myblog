/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Tohsaka888的个人博客',
  tagline: 'Dinosaurs are cool',
  url: 'https://tohsaka888.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'tohsaka888', // Usually your GitHub org/user name.
  projectName: 'tohsaka888.github.io', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Tohsaka888的个人博客',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'JavaScript/JavaScript',
          position: 'left',
          label: '文档',
        },
        {to: '/blog', label: '博客', position: 'left'},
        {
          href: 'https://github.com/tohsaka888',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'http://tohsaka888.xyz',
          label: '我的音乐网站',
          position: 'left',
        }
      ],
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
