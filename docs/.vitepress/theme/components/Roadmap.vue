<script setup lang="ts">
interface RoadmapItem {
  text: string
  status?: 'done' | 'wip' | 'planned' | 'research'
}

interface RoadmapCategory {
  title: string
  items: RoadmapItem[]
}

interface RoadmapData {
  title: string
  subtitle: string
  legend: { status: 'done' | 'wip' | 'planned' | 'research'; label: string }[]
  doneTitle?: string
  doneSubtitle?: string
  doneItems?: string[]
  plannedTitle: string
  plannedSubtitle: string
  columns: [RoadmapCategory[], RoadmapCategory[]]
  tipTitle: string
  tipText: string
}

defineProps<{ data: RoadmapData }>()
</script>

<template>
  <div class="roadmap">
    <h1 class="title">{{ data.title }}</h1>
    <p class="subtitle">{{ data.subtitle }}</p>

    <ul class="legend">
      <li v-for="entry in data.legend" :key="entry.label">
        <span class="dot" :class="`dot-${entry.status}`" />
        {{ entry.label }}
      </li>
    </ul>

    <section class="block" v-if="data.doneItems && data.doneItems.length">
      <h2>{{ data.doneTitle }}</h2>
      <p class="block-subtitle">{{ data.doneSubtitle }}</p>
      <ul class="done-grid">
        <li v-for="item in data.doneItems" :key="item">
          <span class="dot dot-done" />
          {{ item }}
        </li>
      </ul>
    </section>

    <section class="block">
      <h2 class="planned-title">{{ data.plannedTitle }}</h2>
      <p class="block-subtitle">{{ data.plannedSubtitle }}</p>
      <div class="columns">
        <div class="column" v-for="(column, colIndex) in data.columns" :key="colIndex">
          <div class="category" v-for="category in column" :key="category.title">
            <h3>{{ category.title }}</h3>
            <ul>
              <li v-for="item in category.items" :key="item.text">
                <span class="dot" :class="`dot-${item.status ?? 'planned'}`" />
                {{ item.text }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <div class="tip">
      <p class="tip-title">{{ data.tipTitle }}</p>
      <p class="tip-text">{{ data.tipText }}</p>
    </div>
  </div>
</template>

<style scoped>
.roadmap {
  max-width: 1280px;
  margin: 0 auto;
  padding: 32px 24px 64px;
}

.subtitle {
  color: var(--vp-c-text-2);
  font-size: 16px;
  line-height: 1.6;
  margin: 8px 0 24px;
  max-width: 720px;
}

.title {
  text-align: center;
  border-top: none;
  padding-top: 0;
  font-size: 2.5rem;
  margin: 0 0 48px;
}

.legend {
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  overflow-x: auto;
  gap: 24px;
  list-style: none;
  padding: 0;
  margin: 0 0 40px;
  font-size: 14px;
  color: var(--vp-c-text-1);
  border-bottom: 1px solid var(--vp-c-divider);
  padding-bottom: 24px;
}

.legend li {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
  white-space: nowrap;
  margin: 0;
}

.dot {
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}

.dot-done { background-color: #3fb950; }
.dot-wip { background-color: #4f9dff; }
.dot-planned { background-color: #a371f7; }
.dot-research { background-color: #e3a008; }

.block {
  margin-bottom: 48px;
}

.block h2 {
  font-size: 22px;
  font-weight: 600;
  margin: 0;
  border-top: none;
  padding-top: 0;
}

:global(.dark .planned-title) {
  color: #fff;
}

.block-subtitle {
  color: var(--vp-c-text-2);
  font-size: 14px;
  margin: 4px 0 20px;
}

.done-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 32px;
  list-style: none;
  padding: 0;
  margin: 0;
}

.done-grid li {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 0;
  margin: 0;
  border-bottom: 1px solid var(--vp-c-divider);
  font-size: 14px;
  color: var(--vp-c-text-1);
}

.columns {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 40px;
}

.category {
  margin-bottom: 28px;
}

.category h3 {
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--vp-c-text-1);
  margin: 0 0 4px;
  border-top: none;
  padding-top: 0;
}

:global(.dark .category h3) {
  color: #fff;
}

.category ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.category li {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 0;
  margin: 0;
  border-bottom: 1px solid var(--vp-c-divider);
  font-size: 14px;
  color: var(--vp-c-text-1);
}

.tip {
  background-color: var(--vp-c-bg-soft);
  border-radius: 12px;
  padding: 16px 20px;
}

.tip-title {
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--vp-c-text-2);
  margin: 0 0 6px;
}

.tip-text {
  font-size: 14px;
  color: var(--vp-c-text-1);
  margin: 0;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .done-grid,
  .columns {
    grid-template-columns: 1fr;
  }
}
</style>
