import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'WD Database',
  description: 'Database for all useful resssources',
  base: '/wd-database/',
  themeConfig: {
    nav: [
      { text: '📖 Glossary', link: 'https://rentry.org/The-Piracy-Glossary' },
      {
        text: '💾 Backups',
        link: 'https://github.com/fmhy/FMHY/wiki/Backups'
      },
      {
        text: '🌱 Ecosystem',
        items: [
          { text: '🌐 Search', link: '/posts/search' },
          { text: '🔖 Bookmarks', link: 'https://github.com/fmhy/bookmarks' },
          { text: '✅ SafeGuard', link: 'https://github.com/fmhy/FMHY-SafeGuard' },
          { text: '🚀 Startpage', link: 'https://fmhy.net/startpage' },
          { text: '📋 snowbin', link: 'https://pastes.fmhy.net' },
          {
            text: '®️ Redlib',
            link: 'https://redlib.fmhy.net/r/FREEMEDIAHECKYEAH/wiki/index'
          },
          { text: '🔎 SearXNG', link: 'https://searx.fmhy.net/' },
          {
            text: '💡 Site Hunting',
            link: 'https://www.reddit.com/r/FREEMEDIAHECKYEAH/wiki/find-new-sites/'
          },
          { text: '❓ FAQs', link: 'https://redd.it/xrxen7' },
          {
            text: '😇 SFW FMHY',
            link: 'https://rentry.org/piracy'
          },
          {
            text: '🏠 Selfhosting',
            link: '/other/selfhosting'
          },
          { text: '🏞 Wallpapers', link: '/other/wallpapers' },
          { text: '💙 Feedback', link: '/feedback' }
        ]
      }
    ],

    search: {
      provider: 'local',
      options: {
        detailedView: true
      }
    },

    sidebar: [
      {
        text: 'Examples',
        collapsed: false,
        items: [
          { text: '⭐ Adblocking', link: '/privacy' },
          { text: '⭐ Markdown Examples', link: '/markdown-examples' },
          { text: '⭐ Runtime API Examples', link: '/api-examples' }
        ]
      },
      {
        text: 'Examples',
        collapsed: false,
        items: [
          {
            text: 'Manuels',
            items:[
              { text: 'Adblocking', link: '/markdown-examples' }
            ]
          },
          { text: 'Adblocking', link: '/privacy' },
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/JohnTannerEx' }
    ],

    editLink: {
      pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path'
    }
  }
})