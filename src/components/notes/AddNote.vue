<template>
  <div>
    <h3>Add note</h3>
    <form @submit="onSubmit">
      <label for="title">Title:</label>
      <input type="text" name="title" v-model="title" placeholder="Add title"><br>
      <label for="description">Note: </label>
      <textarea name="description" id="" cols="20" rows="2" placeholder="Write a note" v-model="description"></textarea>
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
      id: '',
      title: '',
      description: '',
      date: ''
    }
  },
  methods: {
    ...mapActions(['addNote']),
    onSubmit(e) {
      e.preventDefault();
      this.addNote({id: Date.now() + Math.random(), title: this.title, description: this.description, date: new Date().toLocaleString('en-GB')});
      //create ID
    }
  }
}
</script>

<style scoped>
</style>
