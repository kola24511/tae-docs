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
  subtitle: 'Diese Roadmap steht in keinem Zusammenhang mit der Demoversion.',
  legend: [
    { status: 'planned', label: 'Geplant' }
  ],
  plannedTitle: 'Geplant',
  plannedSubtitle: 'Die Reihenfolge ist nicht festgelegt — die Punktfarbe zeigt, wie nah ein Punkt ist.',
  columns: [
    [
      {
        title: 'Weltgrundlagen',
        items: [
          { text: 'Ressourcen und Erz' },
          { text: 'Biome und Landschaften' },
          { text: 'Lagerung und Sortierung' },
          { text: 'Prozedurale Weltgenerierung' },
        ]
      },
      {
        title: 'Welt und Umgebung',
        items: [
          { text: 'Wetter' },
          { text: 'Tag-Nacht-Zyklus' },
          { text: 'Dungeons' },
          { text: 'Points of Interest und Ruinen' },
          { text: 'Dynamische Ereignisse' }
        ]
      },
      {
        title: 'Charakter und Fortschritt',
        items: [
          { text: 'Waffen und Rüstung' },
          { text: 'Crafting und Verbesserungen' },
          { text: 'Beute und Item-Seltenheit' },
          { text: 'Attribute und Ausrüstung' },
          { text: 'Ruf, Fraktionen, Erfolge' },
          { text: 'Klassensystem und Skillbaum' },
        ]
      },
      {
        title: 'Siedlungen und NPCs',
        items: [
          { text: 'Quests, Ereignisse' },
          { text: 'NPC-Verhalten' },
          { text: 'Siedlungsgenerierung' },
          { text: 'Handel und Wirtschaft' },
          { text: 'Persönlichkeiten und Berufe' },
        ]
      }
    ],
    [
      {
        title: 'Kampfsystem',
        items: [
          { text: 'Bogenschießen' },
          { text: 'Status und Effekte' },
          { text: 'Magie und Zauber' },
          { text: 'Nahkampf, Blocken und Ausweichen' },
        ]
      },
      {
        title: 'Bausystem',
        items: [
          { text: 'Möbel und funktionale Objekte' },
        ]
      },
      {
        title: 'Mehrspieler',
        items: [
          { text: 'Koop' },
          { text: 'Dedizierte Server' },
        ]
      },
      {
        title: 'Modding',
        items: [
          { text: 'C#-Mods' },
          { text: 'Server-seitige Mods' },
          { text: 'Modding-Tool' },
          { text: 'Dokumentation mit Beispielen' },
        ]
      },
      {
        title: 'Sonstiges',
        items: [
          { text: 'Steam-Erfolge' },
          { text: 'Steam Workshop' },
          { text: 'Gamepad-Unterstützung' },
        ]
      }
    ]
  ],
  tipTitle: 'Tipp',
  tipText: 'Diese Liste ändert sich im Laufe der Entwicklung.'
}
</script>

<Roadmap :data="data" />
