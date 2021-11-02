<template>
  <header class="header">
    <h1 class="header__title">Journal</h1>
    <h2 class="header__view">{{ $route.name }}</h2>
    <div class="nav">
      <router-link to="/" class="nav__link">Quests</router-link>
      <router-link to="/bestiary" class="nav__link">Bestiary</router-link>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Header'
})
</script>

<style lang="scss">
.header {
  position: relative;
  background: #272727;
  color: $text-color-white;
  text-align: center;
  position: relative;
  padding: 1rem 0.25rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  z-index: 2;

  &__title {
    text-transform: uppercase;
    text-align: center;
    font-family: $title-font-family;
    font-size: 1.45rem;
    font-weight: 700;
    color: $text-color-white;
  }

  &__view {
    position: absolute;
    text-align: center;
    text-transform: capitalize;
    letter-spacing: 0.1rem;
    font-family: $ui-font-family;
    font-weight: 700;
    font-size: 4.5rem;
    color: darken($text-color-white, 75%);
    z-index: -1;
    left: 1rem;
    top: 1rem;
    line-height: 1;
  }
}

.nav {
  margin-top: 1rem;

  &__link {
    display: inline-block;
    text-align: center;
    text-transform: uppercase;
    font-size: 0.8rem;
    font-family: $ui-font-family;
    background-color: #1d1d1d;
    width: 6rem;
    padding: 0.25rem 0;
    margin: 0 0.25rem;

    &:hover {
      background-color: #161616;
    }
  }
}
</style>
