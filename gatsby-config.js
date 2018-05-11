const config = require('./src/config/')
const rootDir = 'public'

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
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: '#2c88e8',
        showSpinner: false,
      },
    },
    {
      resolve: 'gatsby-plugin-feed',
    },
    'gatsby-plugin-catch-links',
    'gatsby-plugin-react-next',
    'gatsby-plugin-preact',
    'gatsby-plugin-no-sourcemaps',
    'gatsby-plugin-netlify',
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        exclude: ["/tag/*"],
      }
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
    {
      resolve: 'gatsby-plugin-offline',
      options: {
        navigateFallback: null,
        navigateFallbackWhitelist: [],
        staticFileGlobs: [
          `${rootDir}/**/*.ttf`,
          `${rootDir}/commons-*js`,
          `${rootDir}/app-*js`,
          `${rootDir}/component-*js`,
          `${rootDir}/index.html`,
          `${rootDir}/manifest.json`,
          `${rootDir}/manifest.webmanifest`,
          `${rootDir}/offline-plugin-app-shell-fallback/index.html`,
        ],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/cdn\.jsdelivr\.net/,
            handler: 'cacheFirst',
          },
          {
            urlPattern: /\/static\//,
            handler: `cacheFirst`,
          },
          {
            urlPattern: /\/\w+([/\w.-]+)?\/$/,
            handler: 'cacheFirst',
          },
          {
            urlPattern: /\.(?:js|css|ttf|woff|woff2)$/,
            handler: `fastest`,
          },
        ],
      },
    },
  ],
}
