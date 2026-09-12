---
outline: deep
---

# Примеры Runtime API

Эта страница демонстрирует использование некоторых runtime API, предоставляемых VitePress.

Основной API `useData()` можно использовать для доступа к данным сайта, темы и текущей страницы. Он работает как в `.md`, так и в `.vue` файлах:

```md
<script setup>
import { useData } from 'vitepress'

const { theme, page, frontmatter } = useData()
</script>

## Результаты

### Данные темы
<pre>{{ theme }}</pre>

### Данные страницы
<pre>{{ page }}</pre>

### Frontmatter страницы
<pre>{{ frontmatter }}</pre>
```

<script setup>
import { useData } from 'vitepress'

const { site, theme, page, frontmatter } = useData()
</script>

## Результаты

### Данные темы
<pre>{{ theme }}</pre>

### Данные страницы
<pre>{{ page }}</pre>

### Frontmatter страницы
<pre>{{ frontmatter }}</pre>

## Ещё

Полный список runtime API смотрите в [документации](https://vitepress.dev/reference/runtime-api#usedata).
