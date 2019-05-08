<template>
  <div class="notes">
    <AddNote />
    <div class="notes__item" v-for="note in allNotes" :key="note.id">
      <p class="notes__title">{{ note.title }}</p> 
      <p class="notes__date">{{ note.date }}</p>
      <p class="notes__text">{{ note.description }}</p>
      <button class="notes__btn" @click="removeNote(note.id)">Remove note ❌</button>
    </div>
    <button class="notes__btn notes__btn--remove-all" @click="removeAllNotes()">Remove all notes</button>
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