const siteUrl = 'https://blog.raincal.com'

module.exports = {
  siteUrl,
  title: "Raincal's Blog",
  description: 'Web developer/React/Node.js',
  author: 'Raincal',
  navButtons: [
    { name: '首页', icon: 'home', url: '/' },
    { name: '归档', icon: 'archive', url: '/archives/' },
    { name: '标签', icon: 'tags', url: '/tags/' },
    { name: '关于', icon: 'user', url: '/about/' },
    { name: '友链', icon: 'link', url: '/links/' },
  ],
  socialLinks: [
    { name: 'GitHub', icon: 'github-v', url: 'https://github.com/Raincal' },
    { name: 'RSS', icon: 'rss-v', url: `${siteUrl}/rss.xml` },
    {
      name: 'Search',
      icon: 'search',
      url: 'https://www.google.com/search?q=site%3Ablog.raincal.com',
    },
  ],
}
