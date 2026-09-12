---
title: 로드맵
sidebar: false
aside: false
prev: false
next: false
---

<script setup>
import Roadmap from '../../.vitepress/theme/components/Roadmap.vue'

const data = {
  title: '로드맵',
  subtitle: '이 로드맵은 데모 버전과 관련이 없습니다.',
  legend: [
    { status: 'planned', label: '계획됨' }
  ],
  plannedTitle: '계획됨',
  plannedSubtitle: '순서는 고정되어 있지 않습니다 — 점 색상은 항목이 얼마나 가까운지를 나타냅니다.',
  columns: [
    [
      {
        title: '월드 기초',
        items: [
          { text: '자원과 광석' },
          { text: '바이옴과 지형' },
          { text: '보관과 정리' },
          { text: '절차적 월드 생성' },
        ]
      },
      {
        title: '월드와 환경',
        items: [
          { text: '날씨' },
          { text: '낮과 밤 주기' },
          { text: '던전' },
          { text: '관심 지점과 유적' },
          { text: '동적 이벤트' }
        ]
      },
      {
        title: '캐릭터와 성장',
        items: [
          { text: '무기와 방어구' },
          { text: '제작과 강화' },
          { text: '전리품과 아이템 희귀도' },
          { text: '스탯과 장비' },
          { text: '평판, 진영, 업적' },
          { text: '클래스 시스템과 스킬 트리' },
        ]
      },
      {
        title: '정착지와 NPC',
        items: [
          { text: '퀘스트, 이벤트' },
          { text: 'NPC 행동' },
          { text: '정착지 생성' },
          { text: '거래와 경제' },
          { text: '성격과 직업' },
        ]
      }
    ],
    [
      {
        title: '전투 시스템',
        items: [
          { text: '활 쏘기' },
          { text: '상태와 효과' },
          { text: '마법과 주문' },
          { text: '근접 전투, 방어와 회피' },
        ]
      },
      {
        title: '건축 시스템',
        items: [
          { text: '가구와 기능성 오브젝트' },
        ]
      },
      {
        title: '멀티플레이어',
        items: [
          { text: '협동 플레이' },
          { text: '전용 서버' },
        ]
      },
      {
        title: '모딩',
        items: [
          { text: 'C# 모드' },
          { text: '서버 사이드 모드' },
          { text: '모딩 툴' },
          { text: '예제가 포함된 문서' },
        ]
      },
      {
        title: '기타',
        items: [
          { text: 'Steam 업적' },
          { text: 'Steam 워크숍' },
          { text: '게임패드 지원' },
        ]
      }
    ]
  ],
  tipTitle: '팁',
  tipText: '이 목록은 개발이 진행됨에 따라 변경됩니다.'
}
</script>

<Roadmap :data="data" />
