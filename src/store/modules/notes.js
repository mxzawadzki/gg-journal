const state = {
  notes: [{
      id: 1,
      title: 'First note',
      description: 'First note description',
      date: undefined
    },
    {
      id: 2,
      title: 'Second note',
      description: 'Second note description',
      date: undefined
    },
    {
      id: 3,
      title: 'Third note',
      description: 'Third note description',
      date: undefined
    },

  ]
};

const getters = {
  allNotes: (state) => state.notes,
};

const actions = {
  addNote({commit}, title) {
      commit('ADD_NOTE', title)
  },
  removeNote({commit}, id) {
    commit('REMOVE_NOTE', id)
  },
  removeAllNotes({commit}) {
    commit('REMOVE_ALL')
  }
};

const mutations = {
  ADD_NOTE: (state, note) => state.notes.push(note),
  REMOVE_NOTE: (state, id) => state.notes = state.notes.filter(note => note.id !== id),
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