module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-rocket`, options: {
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
    }
  ]
}
