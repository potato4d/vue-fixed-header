module.exports = {
  title: 'vue-fixed-header',
  base: '/vue-fixed-header/',
  description:
    'Simple and cross-browser friendly fixed header component for Vue.js.',
  themeConfig: {
    nav: [
      { text: 'About', link: '/about/' },
      { text: 'API', link: '/api/' }
    ],
    sidebar: {
      '/about/': ['/about/'],
      '/api/': ['/api/', '/api/props.md', '/api/events.md']
    },
    repo: 'potato4d/vue-fixed-header',
    repoLabel: 'GitHub',
    docsRepo: 'potato4d/vue-fixed-header',
    docsDir: 'docs',
    editLinks: true
  }
}
