<template>
  <div>
    <div v-for="monster in allMonsters" :key="monster.id">
      <p>{{ monster.title }}</p><button>Learn about {{monster.title}}</button>
      <p>{{ monster.description }}</p>
      <hr>
      <p>Armor Class: {{ monster.armor }}</p>
      <p>Hit Points: {{ monster.hp }}</p>
      <p>Hit Chance: {{ monster.attack }}</p>
      <p>Damage: {{ monster.damage }}</p>
      <br><br>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Monsters',
  data() {
    return {

    }
  },
  methods: {

  },
  computed: {
    ...mapGetters(['allMonsters'])
  }
};
</script>
<style>
  
</style>