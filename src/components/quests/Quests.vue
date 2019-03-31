<template>
  <div>
    <button v-show="allQuestsVisible" @click="hideFinishedQuests()">Hide finished quets</button>
    <button v-show="!allQuestsVisible" @click="showAllQuests()">Show all quests</button>
    <div v-for="quest in allQuests" :key="quest.id">
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
      allQuestsVisible: true
    }
  },
  methods: {
    hideFinishedQuests() {
      this.allQuestsVisible = false;
    },
    showAllQuests() {
      this.allQuestsVisible = true;
    }
  },
  computed: { 
    ...mapGetters(['allQuests'])
  },
  created() {
    //this.fetchQuests();
  }
};
</script>
<style>
  
</style>