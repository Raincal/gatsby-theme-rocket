const config = require('./src/config')

module.exports = {
  siteMetadata: {
    title: config.title,
    description: config.description,
    author: config.author,
    siteUrl: config.siteUrl,
    navButtons: config.navButtons,
    socialLinks: config.socialLinks,
  },
  plugins: [
    'gatsby-mdx',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'markdown-pages',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-autolink-headers',
          'gatsby-remark-prismjs',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1060,
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-feed',
    },
    'gatsby-plugin-catch-links',
    'gatsby-plugin-no-sourcemaps',
    'gatsby-plugin-postcss',
    'gatsby-plugin-netlify',
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        exclude: ['/tag/*'],
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: "Raincal's Blog",
        short_name: 'Raincal',
        start_url: '/',
        background_color: '#f7f0eb',
        theme_color: '#323436',
        display: 'minimal-ui',
        icon: 'src/images/icon.png',
      },
    },
    'gatsby-plugin-offline',
  ],
}
