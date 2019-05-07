<template>
  <div class="addnote">
    <h3 class="addnote__title">Add note</h3>
    <form class="form" @submit.prevent="sendNote()">
      <label class="form__title" for="title">Title:</label>
      <input class="form__input" type="text" name="title" v-model="note.title" placeholder="Add title"><br>
      <label class="form__title" for="description">Note: </label>
      <textarea class="form__text" name="description" id="" cols="20" rows="2" placeholder="Write a note" v-model="note.description"></textarea>
      <input class="form__btn" type="submit" value="Add Note">
    </form>
  </div>
</template>

<script>
export default {
  name: 'AddNote',
  data() {
    return {
      note: {
        id: '',
        date: '',
        title: '',
        description: ''
      }
    }
  },
  methods: {
    setNoteData() {
      this.$store.dispatch('setId')
      this.$store.dispatch('setDate')
    },
    clearForm() {
      this.note.id = '';
      this.note.date = '';
      this.note.title = '';
      this.note.description = '';
    },
    sendNote() {
      this.setNoteData();
      const newNote = {
        id: this.$store.getters.getId,
        date: this.$store.getters.getDate,
        title: this.note.title,
        description: this.note.description
      }
      this.$store.dispatch('addNote', newNote)
      this.clearForm();
    },
  }
}
</script>

<style scoped>
</style>
