const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'https://nurolang.com',
    gaTrackingId: null,
    trailingSlash: false,
  },
  header: {
    logo: 'https://raw.githubusercontent.com/nurolang/asset/86d4ceb50c5facb0182a264e9df31b20db05a186/img/logo_no_border.svg',
    logoLink: 'https://nurolang.com',
    title:
      "<a href='https://nurolang.com'></a>",
    githubUrl: 'https://github.com/nurolang/nurolang',
    helpUrl: '',
    tweetText: '',
    links: [{ text: '', link: '' }],
    search: {
      enabled: false,
      indexName: '',
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
    },
  },
  sidebar: {
    forcedNavOrder: [
      '/introduction', // add trailing slash if enabled above
      '/codeblock',
    ],
    collapsedNav: [
      '/codeblock', // add trailing slash if enabled above
    ],
    links: [{ text: 'nürolang', link: 'https://nurolang.com' }],
    frontline: false,
    ignoreIndex: true,
    title:
      "nürolang documentation",
  },
  siteMetadata: {
    title: 'nürolang | Neural nets. Fast. | Documentation',
    description: 'Documentation for the nürolang programming language ',
    ogImage: null,
    docsLocation: 'https://github.com/nurolang/site/tree/main/content',
    favicon: 'https://raw.githubusercontent.com/nurolang/asset/86d4ceb50c5facb0182a264e9df31b20db05a186/img/logo_no_border.svg',
  },
  pwa: {
    enabled: false, // disabling this will also remove the existing service worker.
    manifest: {
      name: 'nürolang documentation',
      short_name: 'nürolang',
      start_url: '/',
      background_color: '#8BBF37',
      theme_color: '#8BBF37',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      icons: [
        {
          src: 'src/logo_no_border.png',
          sizes: `512x512`,
          type: `image/png`,
        },
      ],
    },
  },
};

module.exports = config;
