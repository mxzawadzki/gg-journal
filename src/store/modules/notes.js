const state = {
  notes: [{
    id: Date.now() + Math.random(),
    title: 'First note',
    description: 'First note description',
    date: `${new Date().toDateString()} ${new Date().getHours()}:${new Date().getMinutes()<10?'0':''}${new Date().getMinutes()}`
  }]
};

const getters = {
  allNotes: (state) => state.notes,
};

const actions = {
  addNote({
    commit
  }, note) {
    commit('ADD_NOTE', note)
  },
  removeNote({
    commit
  }, id) {
    commit('REMOVE_NOTE', id)
  },
  removeAllNotes({
    commit
  }) {
    commit('REMOVE_ALL')
  }
};

const mutations = {
  ADD_NOTE: (state, note) => {
    state.notes.push(note)
  },
  REMOVE_NOTE: (state, id) => {
    state.notes = state.notes.filter(note => note.id !== id)
  },
  REMOVE_ALL: (state) => {
    state.notes = [];
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}