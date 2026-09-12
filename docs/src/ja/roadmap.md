---
title: ロードマップ
sidebar: false
aside: false
prev: false
next: false
---

<script setup>
import Roadmap from '../../.vitepress/theme/components/Roadmap.vue'

const data = {
  title: 'ロードマップ',
  subtitle: 'このロードマップはデモ版とは関係ありません。',
  legend: [
    { status: 'planned', label: '計画中' }
  ],
  plannedTitle: '計画中',
  plannedSubtitle: '順序は固定されていません — ドットの色は近さを示します。',
  columns: [
    [
      {
        title: '世界の基礎',
        items: [
          { text: '資源と鉱石' },
          { text: 'バイオームと地形' },
          { text: '保管と仕分け' },
          { text: 'プロシージャルな世界生成' },
        ]
      },
      {
        title: '世界と環境',
        items: [
          { text: '天候' },
          { text: '昼夜サイクル' },
          { text: 'ダンジョン' },
          { text: '興味深い場所と遺跡' },
          { text: '動的イベント' }
        ]
      },
      {
        title: 'キャラクターと成長',
        items: [
          { text: '武器と防具' },
          { text: 'クラフトと強化' },
          { text: '戦利品とアイテムレア度' },
          { text: 'ステータスと装備' },
          { text: '評判、派閥、実績' },
          { text: 'クラスシステムとスキルツリー' },
        ]
      },
      {
        title: '集落とNPC',
        items: [
          { text: 'クエスト、イベント' },
          { text: 'NPCの行動' },
          { text: '集落生成' },
          { text: '取引と経済' },
          { text: '性格と職業' },
        ]
      }
    ],
    [
      {
        title: '戦闘システム',
        items: [
          { text: '弓射撃' },
          { text: '状態と効果' },
          { text: '魔法と呪文' },
          { text: '近接戦闘、ブロック、回避' },
        ]
      },
      {
        title: '建築システム',
        items: [
          { text: '家具と機能的オブジェクト' },
        ]
      },
      {
        title: 'マルチプレイヤー',
        items: [
          { text: '協力プレイ' },
          { text: '専用サーバー' },
        ]
      },
      {
        title: 'MOD対応',
        items: [
          { text: 'C# MOD' },
          { text: 'サーバーサイドMOD' },
          { text: 'MOD制作ツール' },
          { text: 'サンプル付きドキュメント' },
        ]
      },
      {
        title: 'その他',
        items: [
          { text: 'Steam実績' },
          { text: 'Steamワークショップ' },
          { text: 'ゲームパッド対応' },
        ]
      }
    ]
  ],
  tipTitle: 'ヒント',
  tipText: 'このリストは開発の進行に応じて変化します。'
}
</script>

<Roadmap :data="data" />
