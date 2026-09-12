import { defineVersionedConfig } from '@viteplus/versions'

// https://vitepress.dev/reference/site-config
export default defineVersionedConfig({
  title: "TAE Docs",
  description: "A VitePress Site",
  base: '/tae-docs/',
  versionsConfig: {
    current: '0.1',
    // the plain built-in dropdown has no icon option; we use the
    // VersionSwitcher component below instead, which ships with one
    versionSwitcher: false
  },
  locales: {
    root: {
      lang: 'en',
      label: 'English',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Roadmap', link: '/roadmap' }
        ],
        sidebar: [
          {
            text: 'Examples',
            items: [
              { text: 'Markdown Examples', link: '/markdown-examples' },
              { text: 'Runtime API Examples', link: '/api-examples' }
            ]
          }
        ]
      }
    },
    ru: {
      lang: 'ru',
      label: 'Русский',
      themeConfig: {
        nav: [
          { text: 'Главная', link: '/' },
          { text: 'Дорожная карта', link: '/roadmap' }
        ],
        sidebar: [
          {
            text: 'Примеры',
            items: [
              { text: 'Примеры Markdown', link: '/markdown-examples' },
              { text: 'Примеры Runtime API', link: '/api-examples' }
            ]
          }
        ]
      }
    },
    zh: {
      lang: 'zh',
      label: '中文',
      themeConfig: {
        nav: [
          { text: '首页', link: '/' },
          { text: '路线图', link: '/roadmap' }
        ]
      }
    },
    de: {
      lang: 'de',
      label: 'Deutsch',
      themeConfig: {
        nav: [
          { text: 'Startseite', link: '/' },
          { text: 'Roadmap', link: '/roadmap' }
        ]
      }
    }
  },
  themeConfig: {
    // shared across every locale, appended after each locale's own nav
    nav: [
      { component: 'VersionSwitcher' }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/kola24511/tae-docs' }
    ]
  }
})
