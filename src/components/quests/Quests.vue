<template>
  <div>
    <button v-show="!allQuestsVisible" @click="showQuests()">Show all quests</button>
    <button v-show="allQuestsVisible" @click="hideQuests()">Hide finished quets</button>
    <div v-for="quest in quests" :key="quest.id">
      <p>{{ quest.title }}</p> 
      <p>{{ quest.description }}</p>
      <p>{{ quest.date }}</p>
      <p v-if="!quest.done" @click="finishQuest(quest)">✔️</p>
      <p v-else @click="restartQuest(quest)">Finished</p>
      <br>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Quests',
  data() {
    return {
      allQuestsVisible: false,
      quests: this.$store.getters.unfinishedQuests
    }
  },
  methods: {
    ...mapActions(['updateQuest']),
    showQuests() {
      this.allQuestsVisible = true;
      this.quests = this.$store.getters.allQuests
    },
    hideQuests() {
      this.allQuestsVisible = false;
      this.quests = this.$store.getters.unfinishedQuests
    },
    finishQuest(quest) {
      const questStatus = {
        id: quest.id,
        title: quest.title,
        description: quest.description,
        date: quest.date,
        done: true
      };
      this.$store.dispatch('updateQuest', questStatus)
      this.quests = this.$store.getters.unfinishedQuests
    },
    restartQuest(quest) {
      const questStatus = {
        id: quest.id,
        title: quest.title,
        description: quest.description,
        date: quest.date,
        done: false
      };
      this.$store.dispatch('updateQuest', questStatus)
    },
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