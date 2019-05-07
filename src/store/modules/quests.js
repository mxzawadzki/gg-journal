const state = {
  quests: [{
      id: 1,
      title: 'Kill ten rats',
      description: 'One week ago Rat King moved to town\'s sewers, it is time to get rid of this vermin plague.',
      date: `${new Date().toDateString()} ${new Date().getHours()}:${new Date().getMinutes()<10?'0':''}${new Date().getMinutes()}`,
      done: true
    },
    {
      id: 2,
      title: 'Basket of goodies',
      description: 'Nice old lady requested one basket of blueberries, you couldn\'t possiby refuse. Nearby "Forest of Darkest Horrors" is waiting for you.',
      date: `${new Date().toDateString()} ${new Date().getHours()}:${new Date().getMinutes()<10?'0':''}${new Date().getMinutes()}`,
      done: false
    },
    {
      id: 3,
      title: 'Slay the Pumpkin Demon',
      description: 'Pumpkin Demon terrorizes poor peasants in the country, forcingly feeding them pumpkin jam.',
      date: `${new Date().toDateString()} ${new Date().getHours()}:${new Date().getMinutes()<10?'0':''}${new Date().getMinutes()}`,
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
updateQuest({commit}, questStatus) {
    commit('UPDATE_QUEST', questStatus)
  },
};

const mutations = {
  // initStore(state) {
  //   if (localStorage.getItem('store')) {
  //     this.replaceState(Object.assign(state, JSON.parse(localStorage.getItem('store'))));
  //   }
  // },
  UPDATE_QUEST: (state, questStatus) => {
    const index = state.quests.findIndex(quest => quest.id === questStatus.id)
    if (index !== -1) {
      state.quests.splice(index, 1, questStatus)
    }
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}