---
title: Roadmap
sidebar: false
aside: false
prev: false
next: false
---

<script setup>
import Roadmap from '../../.vitepress/theme/components/Roadmap.vue'

const data = {
  title: 'Roadmap',
  subtitle: 'This roadmap is not related to the demo version.',
  legend: [
    { status: 'planned', label: 'Planned' }
  ],
  plannedTitle: 'Planned',
  plannedSubtitle: 'Order is not fixed — the dot color shows how close an item is.',
  columns: [
    [
      {
        title: 'World basics',
        items: [
          { text: 'Resources and ore' },
          { text: 'Biomes and landscapes' },
          { text: 'Storage and sorting' },
          { text: 'Procedural world generation' },
        ]
      },
      {
        title: 'World and environment',
        items: [
          { text: 'Weather' },
          { text: 'Day/night cycle' },
          { text: 'Dungeons' },
          { text: 'Points of interest and ruins' },
          { text: 'Dynamic events' }
        ]
      },
      {
        title: 'Character and progression',
        items: [
          { text: 'Weapons and armor' },
          { text: 'Crafting and upgrades' },
          { text: 'Loot and item rarity' },
          { text: 'Stats and equipment' },
          { text: 'Reputation, factions, achievements' },
          { text: 'Class system and skill tree' },
        ]
      },
      {
        title: 'Settlements and NPCs',
        items: [
          { text: 'Quests, events' },
          { text: 'NPC behavior' },
          { text: 'Settlement generation' },
          { text: 'Trade and economy' },
          { text: 'Personalities and professions' },
        ]
      }
    ],
    [
      {
        title: 'Combat system',
        items: [
          { text: 'Bow shooting' },
          { text: 'Statuses and effects' },
          { text: 'Magic and spells' },
          { text: 'Melee combat, blocking and dodging' },
        ]
      },
      {
        title: 'Building system',
        items: [
          { text: 'Furniture and functional objects' },
        ]
      },
      {
        title: 'Multiplayer',
        items: [
          { text: 'Co-op' },
          { text: 'Dedicated servers' },
        ]
      },
      {
        title: 'Modding',
        items: [
          { text: 'C# mods' },
          { text: 'Server-side mods' },
          { text: 'Modding tool' },
          { text: 'Documentation with examples' },
        ]
      },
      {
        title: 'Other',
        items: [
          { text: 'Steam achievements' },
          { text: 'Steam Workshop' },
          { text: 'Gamepad support' },
        ]
      }
    ]
  ],
  tipTitle: 'Tip',
  tipText: 'This list changes as development progresses.'
}
</script>

<Roadmap :data="data" />
