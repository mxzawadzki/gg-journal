<template>
  <div>
    <h3>Add note</h3>
    <form @submit="onSubmit">
      <label for="title">Title:</label>
      <input type="text" name="title" v-model="title" placeholder="Add title"><br>
      <label for="note">Note: </label>
      <textarea name="note" id="" cols="20" rows="2" placeholder="Write a note" v-model="note"></textarea>
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
      note: '',
      date: ''
    }
  },
  methods: {
    ...mapActions(['addNote']),
    onSubmit(e) {
      e.preventDefault();
      this.addNote(this.title);
      //create ID
    }
  }
}
</script>

<style scoped>
</style>
