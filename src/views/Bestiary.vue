<template>
  <div class="bestiary">
    <div class="bestiary__buttons">
      <button
        class="bestiary__btn"
        v-for="(monster, index) in monsterList"
        :key="monster"
        @click="getMonster(monster.name, index)"
        :disabled="monster.isFetched"
      >
        {{ monster.name }}
      </button>
    </div>
    <div
      v-for="monster in monsters"
      :key="monster.name"
      class="bestiary__monster monster"
    >
      <h2 class="monster__name">{{ monster.name }}</h2>
      <p class="monster__alignment">
        Alignment: <span>{{ monster.alignment }}</span>
      </p>
      <p class="monster__ac">
        AC: <span>{{ monster.armor_class }}</span>
      </p>
      <p class="monster__hp">
        Hit Points: <span>{{ monster.hit_points }}</span>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
// additional lang="ts"
import { defineComponent, ref } from 'vue'

type Monster = {
  name: string
  alignment: string
  armor_class: number
  hit_points: number
}

type MonsterOption = {
  name: string
  isFetched: boolean
}

export default defineComponent({
  name: 'Bestiary',
  setup() {
    const monsters = ref<Monster[]>([])

    const monsterList = ref<MonsterOption[]>([
      { name: 'mimic', isFetched: false },
      { name: 'kobold', isFetched: false },
      { name: 'owlbear', isFetched: false },
      { name: 'will-o-wisp', isFetched: false }
    ])

    const getMonster = async (requestedMonster: string, index: number) => {
      try {
        const res = await fetch(
          `https://www.dnd5eapi.co/api/monsters/${requestedMonster}/`
        )
        const fetchedMonster = await res.json()

        const monsterInfo: Monster = {
          name: fetchedMonster.name,
          alignment: fetchedMonster.alignment,
          armor_class: fetchedMonster.armor_class,
          hit_points: fetchedMonster.hit_points
        }

        monsters.value.push(monsterInfo)
        monsterList.value[index].isFetched = true
      } catch (error) {
        console.log(error)
      }
    }

    return { monsters, monsterList, getMonster }
  }
})
</script>

<style lang="scss">
.bestiary {
  padding: 0 1rem;
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

.monster {
  margin-bottom: 1rem;
  &__name {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }

  &__alignment {
    span {
      font-weight: 700;
    }
  }

  &__ac {
    span {
      font-weight: 700;
    }
  }

  &__hp {
    span {
      font-weight: 700;
    }
  }
}
</style>
