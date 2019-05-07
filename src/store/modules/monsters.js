const state = {
  monsters: [{
      id: 1,
      title: 'Rat',
      description: 'Undeground Horror',
      armor: '10',
      hp: '5',
      attack: 'd20',
      damage: '1d2',
      encountered: true,
      known: false
    },
    {
      id: 2,
      title: 'Skeleton',
      description: 'Clicking clacking',
      armor: '12',
      hp: '10',
      attack: 'd20+2',
      damage: '1d6',
      encountered: false,
      known: false
    },
    {
      id: 3,
      title: 'Goblin',
      description: 'Gib food',
      armor: '14',
      hp: '15',
      attack: 'd20+5',
      damage: '1d8',
      encountered: false,
      known: false
    },
  ]
};

const getters = {
  allMonsters: (state) => state.monsters,
};

const actions = {
  updateMonster({
    commit
  }, monsterStatus) {
    commit('UPDATE_MONSTER', monsterStatus)
  },
  encounterMonster({
    commit
  }, monsterId) {
    commit('ENCOUNTER_MONSTER', monsterId)
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
  ENCOUNTER_MONSTER: (state, monsterId) => {
    state.monsters[monsterId].encountered = true
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}