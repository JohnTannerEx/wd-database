import { defineConfig } from 'vitepress'
import { iconReplacerPlugin } from './theme/icontransformer'

export default defineConfig({
  title: 'AV Database',
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
          { text: '⭐ OBS Plugins', link: '/obs' },
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
      pattern: 'https://github.com/JohnTannerEx/wd-database/edit/main/docs'
    }
  },
  vite:{
    plugins: [
      iconReplacerPlugin(),
    ]
  }
})