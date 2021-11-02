<template>
  <QuestList :quests="quests" />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import QuestList from '../components/QuestList.vue'
// import { Quest as QuestType } from '../types/Quest'

type QuestType = {
  id: string
  title: string
  content: string
  reward: number
  difficulty: number
  isActive: boolean
  isFinished: boolean
}

export default defineComponent({
  name: 'Quests',
  components: {
    QuestList
  },
  setup() {
    // https://donjon.bin.sh/fantasy/random/
    const quests = ref<QuestType[]>([
      {
        id: '1',
        title: 'Destroy an evil artifact',
        content:
          'A sage named Chrustosius seeks a company of adventurers to recover and destroy an evil artifact from the Dread Gauntlet of Ages.',
        difficulty: 3,
        reward: 1200,
        isActive: false,
        isFinished: false
      },
      {
        id: '2',
        title: 'Investigate a portal',
        content:
          'An ex-adventurer named Hily seeks a company of adventurers to investigate a magical portal which has been discovered in Beacon Island.',
        difficulty: 2,
        reward: 600,
        isActive: false,
        isFinished: false
      },
      {
        id: '3',
        title: 'Protect the tome',
        content: `A dwarf named Singi Grolfison seeks a company of adventurers to escort Ziri's Tome of the Dark Arts safely to the village of Leburh.`,
        difficulty: 1,
        reward: 250,
        isActive: false,
        isFinished: false
      },
      {
        id: '4',
        title: 'Find lost explorers',
        content:
          'A merchant named Helmel seeks a company of adventurers to discover the fate of a company of explorers lost in the Lunti Hills.',
        difficulty: 2,
        reward: 800,
        isActive: false,
        isFinished: false
      }
    ])

    return { quests }
  }
})
</script>
