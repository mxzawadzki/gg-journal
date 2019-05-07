<template>
  <div>
    <div v-for="monster in allMonsters" :key="monster.id">
      <div v-if="monster.encountered">
        <p>{{ monster.title }}</p><button @click="learnAbout(monster)">Learn about {{monster.title}}</button>
        <p>{{ monster.description }}</p>
        <hr>
        <div v-if="monster.known">
          <p>Armor Class: {{ monster.armor }}</p>
          <p>Hit Points: {{ monster.hp }}</p>
          <p>Hit Chance: {{ monster.attack }}</p>
          <p>Damage: {{ monster.damage }}</p>
        </div>
        <br><br>
      </div>
    </div>
    <button @click="encounterMonster()">Encounter New Monster</button>
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