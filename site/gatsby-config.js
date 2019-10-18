module.exports = {
  assetPrefix: 'https://cdn.jsdelivr.net/gh/Raincal/gatsby-theme-rocket@web',
  plugins: [
    {
      resolve: 'gatsby-theme-rocket',
      options: {
        siteUrl: 'https://blog.raincal.com',
        title: 'Raincal\'s Blog',
        description: 'Web developer/React/Node.js',
      }
    },
    {
      resolve: 'gatsby-source-yuque',
      options: {
        login: 'raincal',
        repo: 'blog',
        mdNameFormat: 'slug',
      },
    },
    'gatsby-plugin-preact'
  ]
}
