<template>
  <header class="header">
    <h1 class="header__title">Good Game Journal</h1>
    <h2 class="header__link-name">{{ $route.name }}</h2>
    <div id="nav" class="nav">
      <router-link to="/quests" class="nav__link">Quests</router-link>
      <router-link to="/notes" class="nav__link">Notes</router-link>
      <router-link to="/bestiary" class="nav__link">Bestiary</router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style>

</style>


