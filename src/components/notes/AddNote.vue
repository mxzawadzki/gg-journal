<template>
  <div>
    <h3>Add note</h3>
    <form @submit.prevent="addNote(note)">
      <label for="title">Title:</label>
      <input type="text" name="title" v-model="note.title" placeholder="Add title"><br>
      <label for="description">Note: </label>
      <textarea name="description" id="" cols="20" rows="2" placeholder="Write a note" v-model="note.description"></textarea>
      <input type="submit" value="Add Note">
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'AddNote',
  data() {
    return {
      note: {
        id: '',
        title: '',
        description: '',
        date: ''
      }
    }
  },
  // computed: {
  //   ...mapGetters(['getDate', 'getId']),
  // },
  methods: {
    ...mapActions(['addNote'])
  }
}
</script>

<style scoped>
</style>
