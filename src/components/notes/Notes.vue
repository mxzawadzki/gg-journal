<template>
  <div>
    <AddNote />
    <br>
    <div v-for="note in allNotes" :key="note.id">
      <p>{{ note.title }}</p> 
      <p>{{ note.description }}</p>
      <p>{{ note.date }}</p>
      <p @click="removeNote(note.id)">X</p>
      <br>
    </div>
    <button @click="removeAllNotes()">Remove all notes</button>
  </div>
</template>
<script>
import AddNote from './AddNote.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Notes',
  components: {
    AddNote
  },
  methods: {
    ...mapActions(['removeNote', 'removeAllNotes'])
  },
  computed: {
    ...mapGetters(['allNotes'])
  }
};
</script>
<style>
  
</style>