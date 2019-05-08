<template>
  <div class="quest">
    <button class="quest__btn" v-show="!allQuestsVisible" @click="showQuests()">Show all quests</button>
    <button class="quest__btn" v-show="allQuestsVisible" @click="hideQuests()">Hide finished quests</button>
    <div class="quest__item" :class="{'quest__item--done': quest.done}" v-for="quest in quests" :key="quest.id">
      <p class="quest__title">{{ quest.title }}</p> 
      <p class="quest__date">{{ quest.date }}</p>
      <p class="quest__text">{{ quest.description }}</p>
      <button class="quest__btn" v-if="!quest.done" @click="finishQuest(quest)">Finish ✔️</button>
      <button class="quest__btn" v-else @click="restartQuest(quest)">Restart</button>
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
      if (!this.allQuestsVisible) {
        this.quests = this.$store.getters.unfinishedQuests
      }
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