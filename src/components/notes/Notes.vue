<template>
  <div>
    <p>Notes go here</p>
    <app-note></app-note>
  </div>
</template>
<script>
import Note from './Note.vue';
import AddNote from './AddNote.vue';

export default {
  name: 'Notes',
  components: {
    appNote: Note,
    appAddNote: AddNote
  }
}
</script>
<style>
  
</style>