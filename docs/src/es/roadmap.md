---
title: Hoja de ruta
sidebar: false
aside: false
prev: false
next: false
---

<script setup>
import Roadmap from '../../.vitepress/theme/components/Roadmap.vue'

const data = {
  title: 'Hoja de ruta',
  subtitle: 'Esta hoja de ruta no está relacionada con la versión de demostración.',
  legend: [
    { status: 'planned', label: 'Planeado' }
  ],
  plannedTitle: 'Planeado',
  plannedSubtitle: 'El orden no está fijado — el color del punto indica qué tan cerca está el elemento.',
  columns: [
    [
      {
        title: 'Bases del mundo',
        items: [
          { text: 'Recursos y mineral' },
          { text: 'Biomas y paisajes' },
          { text: 'Almacenamiento y clasificación' },
          { text: 'Generación procedural del mundo' },
        ]
      },
      {
        title: 'Mundo y entorno',
        items: [
          { text: 'Clima' },
          { text: 'Ciclo día/noche' },
          { text: 'Mazmorras' },
          { text: 'Puntos de interés y ruinas' },
          { text: 'Eventos dinámicos' }
        ]
      },
      {
        title: 'Personaje y progresión',
        items: [
          { text: 'Armas y armaduras' },
          { text: 'Fabricación y mejoras' },
          { text: 'Botín y rareza de objetos' },
          { text: 'Estadísticas y equipo' },
          { text: 'Reputación, facciones, logros' },
          { text: 'Sistema de clases y árbol de habilidades' },
        ]
      },
      {
        title: 'Asentamientos y PNJ',
        items: [
          { text: 'Misiones, eventos' },
          { text: 'Comportamiento de los PNJ' },
          { text: 'Generación de asentamientos' },
          { text: 'Comercio y economía' },
          { text: 'Personalidades y oficios' },
        ]
      }
    ],
    [
      {
        title: 'Sistema de combate',
        items: [
          { text: 'Tiro con arco' },
          { text: 'Estados y efectos' },
          { text: 'Magia y hechizos' },
          { text: 'Combate cuerpo a cuerpo, bloqueo y esquiva' },
        ]
      },
      {
        title: 'Sistema de construcción',
        items: [
          { text: 'Muebles y objetos funcionales' },
        ]
      },
      {
        title: 'Multijugador',
        items: [
          { text: 'Cooperativo' },
          { text: 'Servidores dedicados' },
        ]
      },
      {
        title: 'Modding',
        items: [
          { text: 'Mods en C#' },
          { text: 'Mods del lado del servidor' },
          { text: 'Herramienta de modding' },
          { text: 'Documentación con ejemplos' },
        ]
      },
      {
        title: 'Otros',
        items: [
          { text: 'Logros de Steam' },
          { text: 'Steam Workshop' },
          { text: 'Soporte para mandos' },
        ]
      }
    ]
  ],
  tipTitle: 'Consejo',
  tipText: 'Esta lista cambia a medida que avanza el desarrollo.'
}
</script>

<Roadmap :data="data" />
