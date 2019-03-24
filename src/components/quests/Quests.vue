<template>
  <div>
    <p>Quests</p>
    <app-quest></app-quest>
  </div>
</template>
<script>
import Quest from './Quest.vue';

export default {
  name: 'Quests',
  components: {
    appQuest: Quest
  }
}
</script>
<style>
  
</style>