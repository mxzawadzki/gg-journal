<template>
  <div class="bestiary">
    <div class="bestiary__item" v-for="monster in allMonsters" :key="monster.id">
      <div v-if="monster.encountered">
        <p class="bestiary__title">{{ monster.title }}</p>
        <p class="bestiary__text">{{ monster.description }}</p>
        <div class="bestiary__stats" v-if="monster.known">
          <p><span class="bestiary__stat">Armor Class:</span> {{ monster.armor }}</p>
          <p><span class="bestiary__stat">Hit Points:</span>  {{ monster.hp }}</p>
          <p><span class="bestiary__stat">Hit Chance:</span>  {{ monster.attack }}</p>
          <p><span class="bestiary__stat">Damage:</span>  {{ monster.damage }}</p>
          <p class="bestiary__text"><span class="bestiary__stat">Experience:</span> {{ monster.experience }}</p>
          <p class="bestiary__text"><span class="bestiary__stat"></span><strong> {{ monster.action.title }}</strong> {{ monster.action.desc }}</p>
        </div>
        <button class="bestiary__btn" v-show="monster.known == false" @click="learnAbout(monster)">Learn about {{monster.title}}</button>
      </div>
    </div>
    <button class="bestiary__btn" v-show="allMonsters.length != monsterCounter" @click="encounterMonster()">Encounter New Monster</button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Monsters',
  data() {
    return {
      monsterCounter: 1
    }
  },
  methods: {
    learnAbout(monster) {
      const monsterStatus = {
        id: monster.id,
        title: monster.title,
        description: monster.description,
        armor: monster.armor,
        hp: monster.hp,
        attack: monster.attack,
        damage: monster.damage,
        experience: monster.experience,
        action: {title: monster.action.title, desc: monster.action.desc},
        encountered: true,
        known: true
      }
      this.$store.dispatch('updateMonster', monsterStatus)
    },
    encounterMonster() {
      const monsterId = this.monsterCounter
      this.$store.dispatch('encounterMonster', monsterId)
      this.monsterCounter++
    }
  },
  computed: {
    ...mapGetters(['allMonsters'])
  }
};
</script>

<style>
  
</style>