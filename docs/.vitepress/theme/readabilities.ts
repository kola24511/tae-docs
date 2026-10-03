import type { Options } from '@nolebase/vitepress-plugin-enhanced-readabilities/client'
import { LayoutMode } from '@nolebase/vitepress-plugin-enhanced-readabilities/client'
import { defaultRuLocale } from '@nolebase/vitepress-plugin-enhanced-readabilities/locales'

const contentLayoutMaxWidth = {
  title: 'Максимальная ширина содержимого',
  titleAriaLabel: 'Максимальная ширина содержимого',
  titleHelpMessage: 'Настройте ширину текста и примеров кода для удобного чтения.',
  titleScreenNavWarningMessage: 'Изменение ширины содержимого недоступно на мобильных экранах.',
  slider: 'Ширина содержимого',
  sliderAriaLabel: 'Настроить максимальную ширину содержимого',
  sliderHelpMessage: 'Переместите ползунок, чтобы изменить максимальную ширину содержимого.',
  // Version 2.18.2 uses this key for the slider's accessible label.
  optionFullWidthAriaLabel: 'Настроить максимальную ширину содержимого'
}

export const readabilitiesOptions = {
  layoutSwitch: {
    defaultMode: LayoutMode.Original
  },
  spotlight: {
    defaultToggle: false
  },
  locales: {
    // Matches locales.ru.lang in the VitePress configuration.
    ru: {
      ...defaultRuLocale,
      title: {
        title: 'Настройки чтения',
        titleAriaLabel: 'Настройки чтения'
      },
      layoutSwitch: {
        ...defaultRuLocale.layoutSwitch,
        titleScreenNavWarningMessage: 'Изменение макета недоступно на мобильных экранах.',
        contentLayoutMaxWidth,
        pageLayoutMaxWidth: {
          title: 'Максимальная ширина страницы',
          titleAriaLabel: 'Максимальная ширина страницы',
          titleHelpMessage: 'Настройте общую ширину страницы, включая область бокового меню.',
          titleScreenNavWarningMessage: 'Изменение ширины страницы недоступно на мобильных экранах.',
          slider: 'Ширина страницы',
          sliderAriaLabel: 'Настроить максимальную ширину страницы',
          sliderHelpMessage: 'Переместите ползунок, чтобы изменить максимальную ширину страницы.'
        }
      }
    }
  }
} satisfies Options
