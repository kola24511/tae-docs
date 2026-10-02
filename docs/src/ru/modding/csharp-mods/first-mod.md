---
title: Создание первого C#-мода
description: Подготовка проекта, сборка и запуск первого C#-мода.
---

# Создание первого C#-мода

В этом руководстве мы соберём ExampleMod и установим его в игру.
Пример добавляет тестовый кристалл, который выпадает с тестового
моба: от 1 до 3 предметов с вероятностью 100%.

## Что понадобится

- The Adventurer's Era.
- .NET SDK 10.
- SDK игры, совместимый с вашей версией игры.
- Редактор кода на ваш выбор.

## Получение проекта

Откройте [репозиторий ExampleMod](https://github.com/kola24511/TAE-example-mod)
и скачайте исходники через **Code → Download ZIP**.

Распакуйте архив в отдельную папку, в которой будете работать над модом.

Если используете Git, проект можно клонировать:

```sh
git clone https://github.com/kola24511/TAE-example-mod.git ExampleMod
cd ExampleMod
```

## Подготовка SDK

Установите [.NET SDK](https://dotnet.microsoft.com/ru-ru/download) и проверьте его доступность в терминале:

```sh
dotnet --version
```

Затем распакуйте SDK игры в папку `SDK` внутри проекта.

Проверьте расположение API:

```text
ExampleMod/
└── SDK/
    └── References/
        └── AdventurersEra.Modding.Api.dll
```

::: tip Два разных SDK
.NET SDK содержит инструменты сборки.
SDK игры содержит API, через который мод взаимодействует с игрой.
Для разработки нужны оба.
:::

Если будете хранить проект в Git, добавьте в `.gitignore`:

```gitignore
SDK/
bin/
obj/
dist/
```

## Структура проекта

```text
ExampleMod/
├── src/
│   ├── ExampleMod.cs
│   └── Resources/
│       └── CrystalResource.cs
├── assets/
│   ├── icons/
│   └── lang/
├── SDK/
├── module.json
├── ExampleMod.csproj
├── build.cmd
└── build.sh
```

| Путь | Назначение |
| --- | --- |
| `src/ExampleMod.cs` | Точка входа мода и регистрация контента |
| `src/Resources/CrystalResource.cs` | Свойства кристалла и его выпадение |
| `assets/icons/` | Изображения |
| `assets/lang/` | Переводы |
| `SDK/` | SDK игры для сборки |
| `module.json` | Идентификатор, версия и настройки мода |
| `ExampleMod.csproj` | Настройки сборки и упаковки |

## Сборка

На Windows запустите `build.cmd`.
В PowerShell из папки проекта:

```powershell
.\build.cmd
```

На Linux выполните из папки проекта:

```sh
sh build.sh
```

Также на обеих платформах можно собрать напрямую:

```sh
dotnet build ExampleMod.csproj -c Release
```

После успешной сборки появятся:

```text
dist/
├── package/
│   └── ExampleMod-1.0.0/
└── ExampleMod-1.0.0.zip
```

Папка содержит готовый мод для установки.
ZIP-архив предназначен для распространения.

Версия берётся из `module.json`.
SDK и исходники в готовый пакет не включаются.

## Запуск в игре

1. Закройте игру.
2. Скопируйте `dist/package/ExampleMod-1.0.0` в папку `Mods` рядом с игрой.
3. Запустите игру.
4. Откройте раздел **«Модификации»**.

ExampleMod должен появиться со статусом **«Загружен»**.

Правильный путь к манифесту:

```text
Mods/ExampleMod-1.0.0/module.json
```

Зайдите в мир и убейте тестового моба, использующего таблицу
`base:test-mob-loot`. Из него должен выпасть тестовый кристалл.

Пример добавляет предмет и правило выпадения.
Самих мобов он не создаёт.

## Если сборка не проходит

**Команда `dotnet` не найдена**

Проверьте установку [.NET SDK](https://dotnet.microsoft.com/ru-ru/download) и заново откройте терминал.

**Ошибка `Game SDK is missing`**

Проверьте, что файл API находится по пути
`SDK/References/AdventurersEra.Modding.Api.dll`.

**Мод отсутствует в игре**

Проверьте расположение `module.json`, перезапустите игру
и убедитесь, что установили готовую папку из `dist/package/`.