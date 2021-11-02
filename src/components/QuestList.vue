<template>
  <div class="order">
    <div class="order__buttons">
      <button
        class="order__btn"
        v-for="option in orderOptions"
        :key="option"
        @click="handleClick(option)"
      >
        order by {{ option }}
      </button>
    </div>
    <p>Ordered by {{ order }}</p>
  </div>
  <ul class="quests">
    <!-- object is of type unknown with props not defined -->
    <!-- with PropType autocomplete will work -->
    <li v-for="quest in orderedQuests" :key="quest.id" class="quests__quest">
      <h2 class="quests__title">
        {{ quest.title }}

        <span
          class="quests__status"
          v-show="!quest.isActive && !quest.isFinished"
          >Open</span
        >
        <span class="quests__status" v-show="quest.isActive">In progress</span>
        <span class="quests__status" v-show="quest.isFinished">Finished</span>
      </h2>
      <p class="quests__risk">
        Possible risk:
        <span :class="`quests__risk quests__risk--${risk(quest.difficulty)}`">{{
          risk(quest.difficulty)
        }}</span>
      </p>
      <p class="quests__reward">
        Reward: <span>{{ quest.reward }}</span>
      </p>
      <p class="quests__text">{{ quest.content }}</p>
      <button
        class="quests__btn"
        v-show="!quest.isActive && !quest.isFinished"
        @click="startQuest(quest)"
      >
        Start
      </button>
      <button
        class="quests__btn"
        v-show="quest.isActive && !quest.isFinished"
        @click="finishQuest(quest)"
      >
        Finish
      </button>
      <button
        class="quests__btn"
        v-show="!quest.isActive && quest.isFinished"
        @click="restartQuest(quest)"
      >
        Restart
      </button>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, ref, computed, PropType } from 'vue'
import { Quest as QuestType } from '../types/Quest'
import { OrderTerm } from '../types/OrderTerm'

export default defineComponent({
  name: 'QuestList',
  props: {
    quests: {
      required: true,
      // prop assertion with imported PropType
      // type: Array
      type: Array as PropType<QuestType[]>
    }
  },
  // Destructuring the `props` will cause the value to lose reactivity
  setup(props) {
    const orderOptions = ref<OrderTerm[]>(['title', 'difficulty', 'reward'])
    // only one of three possible values from OrderTerm
    const order = ref<OrderTerm>('title')

    const handleClick = (term: OrderTerm): void => {
      order.value = term
    }
    // computed<QuestType[]>
    const orderedQuests = computed(() => {
      return [...props.quests].sort((a: any, b: any) => {
        // return [...props.quests].sort((a: QuestType, b: QuestType) => {
        return a[order.value] > b[order.value] ? 1 : -1
      })
    })

    const risk = (difficulty: number): string => {
      let calculatedRisk
      switch (difficulty) {
        case 1:
          calculatedRisk = 'low'
          break
        case 2:
          calculatedRisk = 'medium'
          break
        case 3:
          calculatedRisk = 'high'
          break
        default:
          calculatedRisk = 'low'
          break
      }
      return calculatedRisk
    }

    const startQuest = (quest: QuestType): void => {
      quest.isActive = true
      quest.isFinished = false
    }

    const finishQuest = (quest: QuestType): void => {
      quest.isActive = false
      quest.isFinished = true
    }

    const restartQuest = (quest: QuestType): void => {
      quest.isActive = false
      quest.isFinished = false
    }

    return {
      orderOptions,
      order,
      handleClick,
      orderedQuests,
      risk,
      startQuest,
      finishQuest,
      restartQuest
    }
  }
})
</script>

<style lang="scss">
.order {
  padding: 0 1rem;
  margin-bottom: 1rem;
  &__buttons {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;
  }
  &__btn {
    text-align: center;
    text-transform: uppercase;
    font-size: 0.8rem;
    font-family: $ui-font-family;
    background-color: $button-background-white;
    width: 10rem;
    padding: 0.25rem 0;
    border: none;

    &:hover {
      background-color: $button-hover-white;
      cursor: pointer;
    }
  }
}

.quests {
  display: flex;
  flex-flow: column;
  gap: 1rem;

  &__quest {
    padding: 0 1rem;
    font-family: $base-font-family;
  }
  &__btn {
    text-align: center;
    text-transform: uppercase;
    font-size: 0.8rem;
    font-family: $ui-font-family;
    background-color: $button-background-white;
    width: 10rem;
    padding: 0.25rem 0;
    border: none;

    &:hover {
      background-color: $button-hover-white;
      cursor: pointer;
    }
  }
  &__title {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }
  &__status {
    display: block;
    font-size: 1rem;
    opacity: 0.8;
    padding-left: 1px;
  }
  &__risk {
    font-weight: 700;
    font-family: $ui-font-family;
    &--high {
      color: #af3f57;
    }
    &--medium {
      color: #e99803;
    }
    &--low {
      color: #319159;
    }
  }
  &__reward {
    font-family: $ui-font-family;
    font-size: 1rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    span {
      color: #e99803;
    }
  }
  &__text {
    margin-bottom: 0.5rem;
  }
}
</style>
