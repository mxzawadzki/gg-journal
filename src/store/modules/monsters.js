const state = {
  monsters: [{
      id: 1,
      title: 'Rat',
      description: 'Undeground Horror',
      armor: 'Unknown',
      hp: 'Unknown',
      attack: 'Unknown',
      damage: 'Unknown',
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
      known: false
    },

  ]
};

const getters = {
  allMonsters: (state) => state.monsters,
};

const actions = {
  //need local storage
};

const mutations = {
  //here we'll import stuff from local storage
  setMonsters: (state, monsters) => (state.monsters = monsters)
}

export default {
  state,
  getters,
  actions,
  mutations
}