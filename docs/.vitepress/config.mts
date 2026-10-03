import { defineVersionedConfig } from '@viteplus/versions'

// https://vitepress.dev/reference/site-config
export default defineVersionedConfig({
  title: "TAE Docs",
  description: "A VitePress Site",
  base: '/tae-docs/',
  vite: {
    optimizeDeps: {
      exclude: [
        '@nolebase/vitepress-plugin-enhanced-readabilities/client',
        'vitepress',
        '@nolebase/ui'
      ]
    },
    ssr: {
      noExternal: [
        '@nolebase/vitepress-plugin-enhanced-readabilities',
        '@nolebase/ui'
      ]
    }
  },
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
          { text: 'Документация', link: '/modding/' },
          { text: 'Дорожная карта', link: '/roadmap' }
        ],
        sidebar: {
          '/modding/': [
            {
              text: 'Моддинг',
              items: [
                {
                  text: 'Начало',
                  collapsed: false,
                  items: [
                    { text: 'Введение', link: '/modding/getting-started/introduction' },
                    { text: 'Установка модов', link: '/modding/getting-started/installing-mods' },
                    { text: 'Возможности и ограничения', link: '/modding/getting-started/capabilities-and-limitations' },
                    { text: 'Общие основы', link: '/modding/getting-started/common-basics' }
                  ]
                },
                {
                  text: 'C#-моды',
                  collapsed: false,
                  items: [
                    { text: 'Создание первого мода', link: '/modding/csharp-mods/first-mod' },
                    { text: 'Добавление предмета', link: '/modding/csharp-mods/adding-an-item' },
                  ]
                },
                {
                  text: 'Дата-моды',
                  collapsed: false,
                  items: [
                    { text: 'Создание первого дата-мода', link: '/modding/data-mods/first-data-mod' }
                  ]
                },
                {
                  text: 'Справочник',
                  collapsed: false,
                  items: [
                    { text: 'C# API', link: '/modding/reference/csharp-api' },
                    { text: 'Форматы JSON', link: '/modding/reference/json-formats' }
                  ]
                }
              ]
            }
          ]
        }
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
    },
    fr: {
      lang: 'fr',
      label: 'Français',
      themeConfig: {
        nav: [
          { text: 'Accueil', link: '/' },
          { text: 'Feuille de route', link: '/roadmap' }
        ]
      }
    },
    es: {
      lang: 'es',
      label: 'Español',
      themeConfig: {
        nav: [
          { text: 'Inicio', link: '/' },
          { text: 'Hoja de ruta', link: '/roadmap' }
        ]
      }
    },
    it: {
      lang: 'it',
      label: 'Italiano',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Roadmap', link: '/roadmap' }
        ]
      }
    },
    ja: {
      lang: 'ja',
      label: '日本語',
      themeConfig: {
        nav: [
          { text: 'ホーム', link: '/' },
          { text: 'ロードマップ', link: '/roadmap' }
        ]
      }
    },
    ko: {
      lang: 'ko',
      label: '한국어',
      themeConfig: {
        nav: [
          { text: '홈', link: '/' },
          { text: '로드맵', link: '/roadmap' }
        ]
      }
    },
    th: {
      lang: 'th',
      label: 'ไทย',
      themeConfig: {
        nav: [
          { text: 'หน้าแรก', link: '/' },
          { text: 'แผนงาน', link: '/roadmap' }
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
      { icon: 'github', link: 'https://github.com/kola24511/tae-docs' },
      { icon: 'discord', link: 'https://discord.gg/vPNGMTy7dg' }
    ]
  }
})
