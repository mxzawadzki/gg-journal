const state = {
  monsters: [{
      id: 1,
      title: 'Rat',
      description: 'Undeground Horror',
      armor: 'Unknown',
      hp: 'Unknown',
      attack: 'Unknown',
      damage: 'Unknown',
      encountered: true,
      known: false
    },
    {
      id: 2,
      title: 'Skeleton',
      description: 'Clicking clacking',
      armor: 'Unknown',
      hp: 'Unknown',
      attack: 'Unknown',
      damage: 'Unknown',
      encountered: false,
      known: false
    },
    {
      id: 3,
      title: 'Goblin',
      description: 'Gib food',
      armor: 'Unknown',
      hp: 'Unknown',
      attack: 'Unknown',
      damage: 'Unknown',
      encountered: false,
      known: false
    },
  ]
};

const getters = {
  allMonsters: (state) => state.monsters,
};

const actions = {
  updateMonster({commit}, monsterStatus) {
    commit('UPDATE_MONSTER', monsterStatus)
  },
  encounterMonster({commit}) {
    commit('ENCOUNTER_MONSTER')
  }
};

const mutations = {
  //here we'll import stuff from local storage
  // setMonsters: (state, monsters) => (state.monsters = monsters),
  UPDATE_MONSTER: (state, monsterStatus) => {
    const index = state.monsters.findIndex(monster => monster.id === monsterStatus.id)
    if (index !== -1) {
      state.monsters.splice(index, 1, monsterStatus)
    }
  },
  ENCOUNTER_MONSTER: (state) => {
    state.monsters.push(monster)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}