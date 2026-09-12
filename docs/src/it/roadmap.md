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
  subtitle: 'Questa roadmap non è collegata alla versione demo.',
  legend: [
    { status: 'planned', label: 'Pianificato' }
  ],
  plannedTitle: 'Pianificato',
  plannedSubtitle: "L'ordine non è fisso — il colore del punto indica quanto è vicino l'elemento.",
  columns: [
    [
      {
        title: 'Basi del mondo',
        items: [
          { text: 'Risorse e minerali' },
          { text: 'Biomi e paesaggi' },
          { text: 'Stoccaggio e smistamento' },
          { text: 'Generazione procedurale del mondo' },
        ]
      },
      {
        title: 'Mondo e ambiente',
        items: [
          { text: 'Meteo' },
          { text: 'Ciclo giorno/notte' },
          { text: 'Dungeon' },
          { text: 'Punti di interesse e rovine' },
          { text: 'Eventi dinamici' }
        ]
      },
      {
        title: 'Personaggio e progressione',
        items: [
          { text: 'Armi e armature' },
          { text: 'Crafting e miglioramenti' },
          { text: 'Bottino e rarità degli oggetti' },
          { text: 'Statistiche ed equipaggiamento' },
          { text: 'Reputazione, fazioni, obiettivi' },
          { text: 'Sistema di classi e albero delle abilità' },
        ]
      },
      {
        title: 'Insediamenti e PNG',
        items: [
          { text: 'Missioni, eventi' },
          { text: 'Comportamento dei PNG' },
          { text: 'Generazione degli insediamenti' },
          { text: 'Commercio ed economia' },
          { text: 'Personalità e mestieri' },
        ]
      }
    ],
    [
      {
        title: 'Sistema di combattimento',
        items: [
          { text: "Tiro con l'arco" },
          { text: 'Stati ed effetti' },
          { text: 'Magia e incantesimi' },
          { text: 'Combattimento corpo a corpo, blocco e schivata' },
        ]
      },
      {
        title: 'Sistema di costruzione',
        items: [
          { text: 'Mobili e oggetti funzionali' },
        ]
      },
      {
        title: 'Multigiocatore',
        items: [
          { text: 'Cooperativa' },
          { text: 'Server dedicati' },
        ]
      },
      {
        title: 'Modding',
        items: [
          { text: 'Mod in C#' },
          { text: 'Mod lato server' },
          { text: 'Strumento di modding' },
          { text: 'Documentazione con esempi' },
        ]
      },
      {
        title: 'Altro',
        items: [
          { text: 'Obiettivi Steam' },
          { text: 'Steam Workshop' },
          { text: 'Supporto ai controller' },
        ]
      }
    ]
  ],
  tipTitle: 'Suggerimento',
  tipText: "Questo elenco cambia con l'avanzare dello sviluppo."
}
</script>

<Roadmap :data="data" />
