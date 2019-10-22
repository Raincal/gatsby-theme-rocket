const path = require('path')

module.exports = ({ siteUrl = 'https://theme-rocket.netlify.com', title = 'Gatsby Theme Rocket', description = 'A super fast blog', author = 'Raincal' }) => ({
  siteMetadata: {
    siteUrl,
    title,
    description,
    author
  },
  plugins: [
    'gatsby-plugin-mdx',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: path.resolve('content'),
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
            resolve: 'gatsby-remark-yuque-images',
            options: {
              maxWidth: 1060,
            },
          },
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
      resolve: 'gatsby-plugin-layout',
      options: {
        component: require.resolve('./src/components/Layout/index.jsx'),
      },
    },
    {
      resolve: 'gatsby-plugin-feed',
    },
    'gatsby-plugin-catch-links',
    'gatsby-plugin-no-sourcemaps',
    'gatsby-plugin-postcss',
    'gatsby-plugin-netlify',
    // 'gatsby-plugin-brotli',
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        exclude: ['/tag/*'],
      },
    },
    {
      resolve: 'gatsby-plugin-page-creator',
      options: {
        path: path.join(__dirname, 'src', 'pages'),
      },
    }
  ],
})
