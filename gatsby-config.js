module.exports = {
  siteMetadata: {
    title: "Raincal's Blog",
    description: 'Web developer/React/Node.js',
    siteUrl: 'https://blog.raincal.com',
    navButtons: [
      { name: '首页', icon: 'home', url: '/' },
      { name: '归档', icon: 'archive', url: '/archives' },
      { name: '标签', icon: 'tags', url: '/tags' },
      { name: '关于', icon: 'user', url: '/about' },
      { name: '友链', icon: 'link', url: '/links' },
    ],
    socialLinks: [
      { name: 'GitHub', icon: 'github-v', url: 'https://github.com/Raincal' },
      { name: 'RSS', icon: 'rss-v', url: '/rss.xml' },
      {
        name: 'Search',
        icon: 'search',
        url: 'https://www.google.com/search?q=site%3Ablog.raincal.com',
      },
    ],
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'markdown-pages',
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          'gatsby-remark-autolink-headers',
          'gatsby-remark-prismjs',
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 780,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `#2c88e8`,
        showSpinner: false,
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
    },
    'gatsby-plugin-catch-links',
    'gatsby-plugin-react-next',
    'gatsby-plugin-preact',
    'gatsby-plugin-no-sourcemaps',
  ],
}
