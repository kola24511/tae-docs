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

В классе указывается только локальный ID:

```csharp
public override string Id => "test_crystal";
```

Игра добавляет к нему ID мода из `module.json`.
Для ExampleMod полный идентификатор получится таким:

```text
example.mod:test_crystal
```

Предметы с одинаковым локальным ID в разных модах
получают разные полные идентификаторы.

::: warning Сохранения
Не меняйте ID уже опубликованного предмета без необходимости.
Сохранения используют идентификатор для поиска контента.
Название и переводы можно менять отдельно.
:::

## Изображение

Поместите PNG-файл в проект:

```text
assets/icons/crystal.png
```

Укажите этот же относительный путь в `Icon`.
Скрипт сборки ExampleMod включит содержимое `assets/`
в готовый пакет.

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

Игра ищет названия и описания по локальному ID предмета:

```text
item.test_crystal.name
item.test_crystal.description
```

В `assets/lang/ru/items.json`:

```json
{
  "item.test_crystal.name": "Тестовый кристалл",
  "item.test_crystal.description": "Ресурс, который выпадает с тестового моба."
}
```

В `assets/lang/en/items.json`:

```json
{
  "item.test_crystal.name": "Test crystal",
  "item.test_crystal.description": "A resource dropped by the test mob."
}
```

Если в файле уже есть переводы других предметов,
добавьте новые ключи в существующий JSON-объект.

Переводы имеют приоритет над `Name` и `Description`
из класса. Если меняете текст в коде, обновите
соответствующие переводы.

## Проверка в игре

1. Соберите мод.
2. Замените установленную папку мода новой сборкой.
3. Перезапустите игру.
4. Проверьте статус мода в разделе «Модификации».
5. Зайдите в мир и убейте моба с таблицей `base:test-mob-loot`.

Должно выпасть от 1 до 3 кристаллов.
Проверьте изображение, название и описание в инвентаре.