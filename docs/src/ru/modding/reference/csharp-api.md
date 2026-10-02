---
title: C# API
description: Публичные типы и методы API моддинга The Adventurer's Era.
---

# C# API

Справочник описывает текущий API с `apiVersion: 1`.
Публичные типы находятся в пространстве имён `AdventurersEra.Modding`
и сборке `AdventurersEra.Modding.Api.dll` из SDK игры.

Подготовка проекта и подключение SDK описаны в
[первом C#-моде](../csharp-mods/first-mod).
Настройки манифеста, ID и языковые файлы — в
[общих основах](../getting-started/common-basics).

## IGameModule

Точка входа C#-мода. Интерфейс наследует `IDisposable`.

| Метод | Назначение |
| --- | --- |
| `Load(IModuleContext context)` | Инициализация мода, регистрация контента и публикация API |
| `Dispose()` | Освобождение ресурсов и отписка от событий |

Класс точки входа должен быть публичным, неабстрактным,
без параметров типа и с публичным конструктором без параметров.
Его полное имя указывается в `code.entryPoint` манифеста.

```csharp
using AdventurersEra.Modding;

namespace ExampleMod
{
    public sealed class ExampleMod : IGameModule
    {
        public void Load(IModuleContext context)
        {
            context.Log(ModuleLogLevel.Info, "ExampleMod initialized");
        }

        public void Dispose()
        {
        }
    }
}
```

Мод живёт в течение работы приложения. `Load` вызывается при загрузке модов,
а не при каждом входе в мир. В этот момент игровой мир может ещё не существовать.
Готового публичного API жизненного цикла мира и сессии пока нет.

`Dispose` может быть вызван и после ошибки в `Load`.
Освобождайте только те ресурсы, которые успели создать.
При завершении работы зависимые моды освобождаются раньше своих зависимостей.

## IModuleContext

Контекст передаётся в `Load` и содержит данные текущего мода и методы API.

### Свойства

| Свойство | Тип | Назначение |
| --- | --- | --- |
| `ModuleId` | `string` | ID мода из манифеста |
| `ModuleVersion` | `string` | Версия мода |
| `DirectoryPath` | `string` | Путь к установленной папке мода |
| `IsDedicatedServer` | `bool` | Запущено ли приложение как выделенный сервер |

`IsDedicatedServer` относится именно к выделенному серверу.
В обычной игре, в том числе при хостинге мира, значение будет `false`.

### Методы

| Метод | Назначение |
| --- | --- |
| `Log(ModuleLogLevel level, string message)` | Записать сообщение в журнал мода |
| `RegisterContent(ModuleContentDefinition content)` | Зарегистрировать один набор предметов и правил выпадения |
| `PublishApi<T>(T implementation)` | Опубликовать реализацию API текущего мода |
| `TryGetApi<T>(string moduleId, out T implementation)` | Получить API загруженной зависимости |

Для `PublishApi` и `TryGetApi` тип `T` должен быть ссылочным типом (`where T : class`).

## Логирование

`ModuleLogLevel` содержит три значения: `Info`, `Warning`, `Error`.
Идентификатор мода добавляется к сообщению автоматически.

Пример вызовов внутри `Load`:

```csharp
context.Log(ModuleLogLevel.Info, "Mod initialized");
context.Log(ModuleLogLevel.Warning, "Optional setting is missing");
```

Запись с уровнем `Error` сама по себе не останавливает загрузку.
Если инициализация не может продолжаться, выбросьте исключение из `Load`.

## Resource

Базовый класс ресурсного предмета. Создайте наследника и переопределите свойства.

| Свойство | Тип | Обязательное / значение по умолчанию |
| --- | --- | --- |
| `Id` | `string` | Обязательно; локальный ID без префикса мода |
| `Name` | `string` | Обязательно; непустое название, до 128 символов |
| `Icon` | `string` | Обязательно; путь к существующему PNG внутри мода |
| `Description` | `string` | Пустая строка; не более 4096 символов |
| `MaxStack` | `int` | `99`; допустимо от `1` до `9999` |
| `Weight` | `int` | `1`; допустимо от `0` до `10000` |
| `Loot` | `IEnumerable<ResourceLoot>` | Пустая последовательность |

Минимальный предмет без правила выпадения:

```csharp
using AdventurersEra.Modding;

namespace ExampleMod.Resources
{
    public sealed class CrystalResource : Resource
    {
        public override string Id => "test_crystal";
        public override string Name => "Test crystal";
        public override string Icon => "assets/icons/crystal.png";
    }
}
```

Изображение должно присутствовать в установленном моде.
Названия и описания можно переводить через ключи
`item.<локальный ID>.name` и `item.<локальный ID>.description`.

## ResourceLoot

Одно добавляемое правило выпадения для предмета, объявившего его в `Resource.Loot`.

| Свойство | Тип | Значение по умолчанию и ограничения |
| --- | --- | --- |
| `Table` | `string` | Пустая строка; нужно указать полный ID существующей таблицы |
| `Chance` | `float` | `1f`; допустимо от `0f` до `1f` |
| `MinAmount` | `int` | `1`; допустимо от `1` до `9999` |
| `MaxAmount` | `int` | `1`; не меньше `MinAmount` и не больше `9999` |
| `Rarity` | `string` | `"common"` |

Редкость: `common`, `uncommon`, `rare`, `epic` или `legendary`.
`Chance = 0.25f` означает вероятность 25%, `1f` — 100%.

В `ResourceLoot` нет свойства `Item`:
`ModContent.Register` автоматически связывает правило с объявившим его предметом.
Таблица должна существовать в игре или загруженной зависимости.
Правило дополняет её выпадение и не создаёт новую таблицу или моба.

Полный пример свойства `Loot` — в
[руководстве по предметам](../csharp-mods/adding-an-item#класс-предмета).

## Регистрация контента

### ModContent.Register

```csharp
public static void Register(IModuleContext context, params Resource[] resources);
```

Удобный способ зарегистрировать предметы, описанные классами.
Метод собирает предметы и их `ResourceLoot` в один набор
и передаёт его в `context.RegisterContent`.

Внутри `Load`, с `using ExampleMod.Resources`:

```csharp
ModContent.Register(context, new CrystalResource());
```

Если предметов несколько, передайте все экземпляры в этот же вызов.

Правила регистрации:

- Регистрация выполняется один раз во время `Load`.
- Мод должен использовать `side: "both"`.
- Набор должен содержать хотя бы один предмет или правило выпадения.
- При регистрации через C# в манифесте не должно быть блока `content`.
- При неудачной загрузке мода зарегистрированный им контент откатывается.

Игра владеет регистрацией контента и освобождает её при завершении работы.
Метод не возвращает объект, который нужно самостоятельно удалять в `Dispose`.

### RegisterContent и типы описаний

Для регистрации без наследников `Resource` доступен
`context.RegisterContent(ModuleContentDefinition content)`.
Это альтернативный способ регистрации с теми же ограничениями.

| Тип | Свойства |
| --- | --- |
| `ModuleContentDefinition` | `Items` — массив `ResourceItemDefinition`; `Loot` — массив `LootRuleDefinition`. Оба по умолчанию пустые |
| `ResourceItemDefinition` | `Id`, `Name`, `Description`, `Icon`, `MaxStack`, `Weight` |
| `LootRuleDefinition` | `Table`, `Item`, `Chance`, `MinAmount`, `MaxAmount`, `Rarity` |

`ResourceItemDefinition.Id` — локальный ID.
`LootRuleDefinition.Item` и `Table` — полные ID вида `mod_id:local_id`.
Числовые ограничения и значения по умолчанию совпадают с `Resource` и `ResourceLoot`.
В ссылках на контент другого мода требуется объявленная зависимость.

## Локализация из кода

Методы расширения доступны с `using AdventurersEra.Modding`:

| Метод | Назначение |
| --- | --- |
| `context.Localize(string key, string fallback = null)` | Получить перевод или запасной текст |
| `context.GetLocalization()` | Получить `IModuleLocalization` текущего мода |

Пример внутри `Load`:

```csharp
string message = context.Localize("ui.example.initialized", "Mod initialized");
context.Log(ModuleLogLevel.Info, message);
```

`IModuleLocalization` предоставляет:

| Член | Назначение |
| --- | --- |
| `Language` | Текущий код языка |
| `Get(string key, string fallback = null)` | Получить текст по ключу |
| `Changed` | Событие изменения языка, тип `Action` |

Если перевод отсутствует, используется `fallback`.
Если не задан и он, возвращается сам ключ.
Если подписываетесь на `Changed`, отписывайтесь в `Dispose`.
На выделенном сервере используется `defaultLanguage` мода.

Игровой контекст реализует `ILocalizedModuleContext`, который добавляет свойство
`Localization` к `IModuleContext`.
У другого хоста без поддержки этого интерфейса методы расширения
выбрасывают `NotSupportedException`.

Правила файлов и поиска переводов описаны в
[общих основах](../getting-started/common-basics#локализация).

## API других модов

### PublishApi

Провайдер публикует реализацию во время своего `Load`:

```csharp
context.PublishApi<IGreetingApi>(greetingApi);
```

Здесь `IGreetingApi` — общий контракт, а `greetingApi` — его реализация.
Один тип API можно опубликовать только один раз в пределах мода.
Передача `null` и публикация после завершения `Load` приводят к ошибке.

### TryGetApi

Потребитель запрашивает опубликованный контракт:

```csharp
if (context.TryGetApi<IGreetingApi>("example.greetings", out var greetings))
{
    context.Log(ModuleLogLevel.Info, greetings.Greet("modders"));
}
```

Это фрагменты для модов, уже ссылающихся на сборку с `IGreetingApi`.
Конкретный контракт определяется автором мода-провайдера.

ID провайдера должен быть указан в `dependencies` потребителя.
`TryGetApi` возвращает `false`, если провайдер не объявлен зависимостью,
не загружен или не опубликовал API именно этого типа.

Общий контракт размещается в отдельной DLL, предоставляемой провайдером
через `code.libraries`. Потребитель ссылается на неё при сборке,
но не включает вторую копию в свой пакет (`Private=false` в ссылке проекта).
Аналогично DLL API игры не включается в пакет мода.

Если контент ссылается на предметы или таблицы зависимости, эта зависимость
тоже должна быть объявлена в манифесте.

Для создания рабочего мода используйте
[ExampleMod](https://github.com/kola24511/TAE-example-mod).
