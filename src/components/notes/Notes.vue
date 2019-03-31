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
  methods: {
    ...mapActions(['removeNote', 'removeAllNotes'])
    //...mapActions(['addNote'])
  },
  components: {
    AddNote
  },
  data() {
    return {

    }
  },
  computed: mapGetters(['allNotes']),
  setId() {
    this.id = Date.now() + Math.random();
  },
  setDate() {
    let currentDate = new Date();
    this.date = currentDate.toLocaleDateString();
  },
  created() {
    //this.fetchNotes();
  }
};
</script>
<style>
  
</style>