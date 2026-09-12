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
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      //{ text: 'Examples', link: '/markdown-examples' }
      { component: 'VersionSwitcher' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/kola24511/tae-docs' }
    ]
  }
})
