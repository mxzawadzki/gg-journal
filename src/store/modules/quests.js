const state = {
  quests: [{
      id: 1,
      title: 'First Quest',
      description: 'First quest description',
      date: undefined,
      done: true
    },
    {
      id: 2,
      title: 'Second Quest',
      description: 'Second quest description',
      date: undefined,
      done: false
    },
    {
      id: 3,
      title: 'Third Quest',
      description: 'Third quest description',
      date: undefined,
      done: false
    },

  ]
};

const getters = {
  allQuests: (state) => state.quests,
  unfinishedQuests: (state) => {
    return state.quests.filter(quest => !quest.done)
  }
};

const actions = {
finishQuest({commit}, id) {
    commit('FINISH_QUEST', id)
  },
};

const mutations = {
  // initStore(state) {
  //   if (localStorage.getItem('store')) {
  //     this.replaceState(Object.assign(state, JSON.parse(localStorage.getItem('store'))));
  //   }
  // },
  // FINISH_QUEST(state, id) {
  //   //target quest
  //   // state.quests.done = true;
  // }
}

export default {
  state,
  getters,
  actions,
  mutations
}