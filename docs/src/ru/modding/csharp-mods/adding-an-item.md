---
title: Добавление предмета
description: Создание ресурсного предмета в C#-моде.
---

# Добавление предмета

Ресурсный предмет описывается классом, наследующим `Resource`
из API игры.

В ExampleMod уже есть `CrystalResource`.
В этом руководстве разберём его устройство.

## Класс предмета

Файл `src/Resources/CrystalResource.cs`:

```csharp
using System.Collections.Generic;
using AdventurersEra.Modding;

namespace ExampleMod.Resources
{
    public sealed class CrystalResource : Resource
    {
        public override string Id => "test_crystal";
        public override string Name => "Тестовый кристалл";
        public override string Description =>
            "Ресурс, который выпадает с тестового моба.";

        public override string Icon => "assets/icons/crystal.png";
        public override int MaxStack => 99;
        public override int Weight => 1;

        public override IEnumerable<ResourceLoot> Loot
        {
            get
            {
                yield return new ResourceLoot
                {
                    Table = "base:test-mob-loot",
                    Chance = 1f,
                    MinAmount = 1,
                    MaxAmount = 3,
                    Rarity = "uncommon"
                };
            }
        }
    }
}
```

Основные свойства:

| Свойство | Назначение |
| --- | --- |
| `Id` | Локальный идентификатор предмета внутри мода |
| `Name` | Название, используемое при отсутствии перевода |
| `Description` | Описание, используемое при отсутствии перевода |
| `Icon` | Путь к изображению относительно папки мода |
| `MaxStack` | Максимальное количество предметов в одном стаке |
| `Weight` | Вес одного предмета |
| `Loot` | Правила выпадения этого предмета |

## Идентификатор

В классе указан локальный ID `test_crystal`.
С ID мода `example.mod` получается полный идентификатор
`example.mod:test_crystal`.

Правила ID и их связь с сохранениями описаны в
[общих основах](../getting-started/common-basics#id-мода-и-предметов).

## Изображение

Укажите путь к PNG-файлу в `Icon`:
`assets/icons/crystal.png`.
Скрипт сборки ExampleMod включает содержимое `assets/` в готовый пакет.

Правила путей и изображений — в [общих основах](../getting-started/common-basics#ресурсы-и-изображения).

## Регистрация

Предмет нужно зарегистрировать в методе `Load`
точки входа мода:

```csharp
ModContent.Register(context, new CrystalResource());
```

В ExampleMod этот вызов уже находится в `src/ExampleMod.cs`.
Для доступа к классу используется:

```csharp
using ExampleMod.Resources;
```

::: tip Несколько предметов
Передавайте все предметы мода в один вызов `ModContent.Register`.
Регистрация контента выполняется один раз во время `Load`.
:::

## Выпадение с моба

Свойство `Loot` добавляет предмет в существующую
таблицу выпадения.

В нашем примере:

| Настройка | Значение |
| --- | --- |
| `Table` | `base:test-mob-loot` |
| `Chance` | `1f` — вероятность 100% |
| `MinAmount` | Минимум 1 предмет |
| `MaxAmount` | Максимум 3 предмета |
| `Rarity` | `uncommon` |

Для вероятности 25% укажите `Chance = 0.25f`.

Правило действует только для мобов, использующих
указанную таблицу. Оно не добавляет предмет всем мобам
и не создаёт новых мобов.

Если предмет не должен выпадать, не переопределяйте `Loot`.
Способ его получения нужно будет настроить отдельно.

## Переводы

Для кристалла используются ключи `item.test_crystal.name`
и `item.test_crystal.description`.
Они уже находятся в `assets/lang/ru/items.json`
и `assets/lang/en/items.json`.

При изменении `Name` и `Description` обновите и переводы.
Формат языковых файлов и порядок поиска текста описаны в
[общих основах](../getting-started/common-basics#локализация).

## Проверка в игре

1. Соберите мод.
2. Замените установленную папку мода новой сборкой.
3. Перезапустите игру.
4. Проверьте статус мода в разделе «Модификации».
5. Зайдите в мир и убейте моба с таблицей `base:test-mob-loot`.

Должно выпасть от 1 до 3 кристаллов.
Проверьте изображение, название и описание в инвентаре.
