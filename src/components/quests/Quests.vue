<template>
  <div>
    <button v-show="!allQuestsVisible" @click="showQuests()">Show all quests</button>
    <button v-show="allQuestsVisible" @click="hideQuests()">Hide finished quets</button>
    <div v-for="quest in quests" :key="quest.id">
      <p>{{ quest.title }}</p> 
      <p>{{ quest.description }}</p>
      <p>{{ quest.date }}</p>
      <br>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Quests',
  data() {
    return {
      allQuestsVisible: false,
      quests: this.$store.getters.unfinishedQuests
    }
  },
  methods: {
    showQuests() {
      this.allQuestsVisible = true;
      this.quests = this.allQuests
    },
    hideQuests() {
      this.allQuestsVisible = false;
      this.quests = this.unfinishedQuests
    }
  },
  computed: { 
    ...mapGetters(['allQuests', 'unfinishedQuests'])
    // allQuests() {
    //   return this.$store.getters.allQuests
    // },
    // unfinishedQuests() {
    //   return this.$store.getters.unfinishedQuests
    // }
  }
};
</script>
<style>
  
</style>