<template>
  <Header />
  <!-- "vetur.experimental.templateInterpolationService": true  -->
  <div class="example">
    <p>{{ intro.subtitle }}</p>
    <button class="example__btn" @click="changeNumber('50')">
      Change number
    </button>
    <p>
      {{ number }} <span v-show="number === 50">thing to have fun with</span>
    </p>
  </div>
  <router-view />
</template>

<script lang="ts">
// additional lang="ts"
import { defineComponent, ref } from 'vue'
import Header from '@/components/Header.vue'

// define component
export default defineComponent({
  name: 'Home',
  components: {
    Header
  },
  setup() {
    const number = ref(20)
    const intro = ref({
      subtitle: 'Journal of happy things'
    })

    const changeNumber = (newNumber: number): void => {
      number.value = newNumber
    }

    return { number, intro, changeNumber }
  }
})
</script>

<style lang="scss">
.example {
  padding: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  &__btn {
    text-align: center;
    text-transform: uppercase;
    font-size: 0.8rem;
    font-family: $ui-font-family;
    background-color: $button-background-white;
    width: 10rem;
    padding: 0.25rem 0;
    border: none;

    &:hover {
      background-color: $button-hover-white;
      cursor: pointer;
    }
  }
}
</style>
