<template>
  <div>
    <p>Monsters</p>
    <app-monster></app-monster>
  </div>
</template>
<script>
import Monster from './Monster.vue';

export default {
  name: 'Monsters',
  components: {
    appMonster: Monster
  }
}
</script>
<style>
  
</style>