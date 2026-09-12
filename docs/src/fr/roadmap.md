---
title: Feuille de route
sidebar: false
aside: false
prev: false
next: false
---

<script setup>
import Roadmap from '../../.vitepress/theme/components/Roadmap.vue'

const data = {
  title: 'Feuille de route',
  subtitle: "Cette feuille de route n'est pas liée à la version de démonstration.",
  legend: [
    { status: 'planned', label: 'Prévu' }
  ],
  plannedTitle: 'Prévu',
  plannedSubtitle: "L'ordre n'est pas fixe — la couleur du point indique la proximité de l'élément.",
  columns: [
    [
      {
        title: 'Bases du monde',
        items: [
          { text: 'Ressources et minerai' },
          { text: 'Biomes et paysages' },
          { text: 'Stockage et tri' },
          { text: 'Génération procédurale du monde' },
        ]
      },
      {
        title: 'Monde et environnement',
        items: [
          { text: 'Météo' },
          { text: 'Cycle jour/nuit' },
          { text: 'Donjons' },
          { text: "Points d'intérêt et ruines" },
          { text: 'Événements dynamiques' }
        ]
      },
      {
        title: 'Personnage et progression',
        items: [
          { text: 'Armes et armures' },
          { text: 'Fabrication et améliorations' },
          { text: 'Butin et rareté des objets' },
          { text: 'Statistiques et équipement' },
          { text: 'Réputation, factions, succès' },
          { text: 'Système de classes et arbre de compétences' },
        ]
      },
      {
        title: 'Colonies et PNJ',
        items: [
          { text: 'Quêtes, événements' },
          { text: 'Comportement des PNJ' },
          { text: 'Génération de colonies' },
          { text: 'Commerce et économie' },
          { text: 'Personnalités et métiers' },
        ]
      }
    ],
    [
      {
        title: 'Système de combat',
        items: [
          { text: "Tir à l'arc" },
          { text: 'Statuts et effets' },
          { text: 'Magie et sorts' },
          { text: 'Combat au corps à corps, blocage et esquive' },
        ]
      },
      {
        title: 'Système de construction',
        items: [
          { text: 'Meubles et objets fonctionnels' },
        ]
      },
      {
        title: 'Multijoueur',
        items: [
          { text: 'Coopératif' },
          { text: 'Serveurs dédiés' },
        ]
      },
      {
        title: 'Modding',
        items: [
          { text: 'Mods C#' },
          { text: 'Mods côté serveur' },
          { text: 'Outil de modding' },
          { text: 'Documentation avec exemples' },
        ]
      },
      {
        title: 'Autre',
        items: [
          { text: 'Succès Steam' },
          { text: 'Atelier Steam' },
          { text: 'Support des manettes' },
        ]
      }
    ]
  ],
  tipTitle: 'Astuce',
  tipText: 'Cette liste évolue au fur et à mesure du développement.'
}
</script>

<Roadmap :data="data" />
