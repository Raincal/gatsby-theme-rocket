const path = require('path')

module.exports = ({ title, description, author, siteUrl, navButtons, socialLinks }) => ({
  siteMetadata: {
    title,
    description,
    author,
    siteUrl,
    navButtons,
    socialLinks,
  },
  plugins: [
    'gatsby-plugin-mdx',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'markdown-pages',
      },
    },
    {
      resolve: 'gatsby-source-yuque',
      options: {
        login: 'raincal',
        repo: 'blog',
        mdNameFormat: 'slug',
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
    'gatsby-plugin-brotli',
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        exclude: ['/tag/*'],
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Raincal\'s Blog',
        short_name: 'Raincal',
        start_url: '/',
        background_color: '#f7f0eb',
        theme_color: '#3b5998',
        display: 'minimal-ui',
        icon: require.resolve('./src/images/icon.png'),
        legacy: false,
      },
    },
    {
      resolve: 'gatsby-plugin-page-creator',
      options: {
        path: path.join(__dirname, 'src', 'pages'),
      },
    }
    // {
    //   resolve: 'gatsby-plugin-offline',
    //   options: {
    //     runtimeCaching: [
    //       {
    //         urlPattern: /.*\/$/,
    //         handler: 'networkFirst',
    //       },
    //       {
    //         urlPattern: /(\.js$|\.css$|static\/)/,
    //         handler: 'cacheFirst',
    //       },
    //       {
    //         urlPattern: /^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/,
    //         handler: 'staleWhileRevalidate',
    //       },
    //       {
    //         urlPattern: /^https?:\/\/fonts\.googleapis\.com\/css/,
    //         handler: 'staleWhileRevalidate',
    //       },
    //     ],
    //   },
    // },
  ],
})
