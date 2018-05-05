const config = require('./src/config/')

module.exports = {
  siteMetadata: {
    title: config.title,
    description: config.description,
    siteUrl: config.siteUrl,
    navButtons: config.navButtons,
    socialLinks: config.socialLinks,
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
              maxWidth: 1060,
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
