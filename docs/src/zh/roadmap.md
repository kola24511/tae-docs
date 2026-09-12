---
title: 路线图
sidebar: false
aside: false
prev: false
next: false
---

<script setup>
import Roadmap from '../../.vitepress/theme/components/Roadmap.vue'

const data = {
  title: '路线图',
  subtitle: '本路线图与演示版本无关。',
  legend: [
    { status: 'planned', label: '计划中' }
  ],
  plannedTitle: '计划中',
  plannedSubtitle: '顺序尚未固定 — 圆点颜色表示该项目的临近程度。',
  columns: [
    [
      {
        title: '世界基础',
        items: [
          { text: '资源与矿石' },
          { text: '生物群系与地貌' },
          { text: '仓储与分类' },
          { text: '程序化世界生成' },
        ]
      },
      {
        title: '世界与环境',
        items: [
          { text: '天气' },
          { text: '昼夜循环' },
          { text: '地牢' },
          { text: '兴趣点与遗迹' },
          { text: '动态事件' }
        ]
      },
      {
        title: '角色与成长',
        items: [
          { text: '武器与护甲' },
          { text: '制作与升级' },
          { text: '战利品与物品稀有度' },
          { text: '属性与装备' },
          { text: '声望、阵营与成就' },
          { text: '职业系统与技能树' },
        ]
      },
      {
        title: '定居点与NPC',
        items: [
          { text: '任务与事件' },
          { text: 'NPC 行为' },
          { text: '定居点生成' },
          { text: '贸易与经济' },
          { text: '性格与职业' },
        ]
      }
    ],
    [
      {
        title: '战斗系统',
        items: [
          { text: '弓箭射击' },
          { text: '状态与效果' },
          { text: '魔法与法术' },
          { text: '近战格斗、格挡与闪避' },
        ]
      },
      {
        title: '建造系统',
        items: [
          { text: '家具与功能性物件' },
        ]
      },
      {
        title: '多人游戏',
        items: [
          { text: '合作模式' },
          { text: '专用服务器' },
        ]
      },
      {
        title: '模组支持',
        items: [
          { text: 'C# 模组' },
          { text: '服务器端模组' },
          { text: '模组制作工具' },
          { text: '带示例的文档' },
        ]
      },
      {
        title: '其他',
        items: [
          { text: 'Steam 成就' },
          { text: 'Steam 创意工坊' },
          { text: '手柄支持' },
        ]
      }
    ]
  ],
  tipTitle: '提示',
  tipText: '该列表会随着开发进度而变化。'
}
</script>

<Roadmap :data="data" />
