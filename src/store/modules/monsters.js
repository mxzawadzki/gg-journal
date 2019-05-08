const state = {
  monsters: [{
      id: 1,
      title: 'Rat',
      description: 'Undeground Horror. These omnivorous rodents thrive almost anywhere.',
      armor: '10',
      hp: '5',
      attack: 'd20',
      damage: '1d2',
      experience: '10 XP',
      action: {
        title: 'Bite.',
        desc: 'Melee Weapon Attack: +0 to hit, reach 5 ft., one target. Hit: 1 piercing damage.'
      },
      encountered: true,
      known: false
    },
    {
      id: 2,
      title: 'Skeleton',
      description: 'This medium creature appears to be nothing but a set of bones. Pinpoints of red light smolder in its empty eye sockets. The bones animate together while grabbing a weapon and it deftly heads in your direction.',
      armor: '12',
      hp: '10',
      attack: 'd20+4',
      damage: '1d6+2',
      experience: '50 XP',
      action: {
        title: 'Shortsword.',
        desc: 'Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) piercing damage.'
      },
      encountered: false,
      known: false
    },
    {
      id: 3,
      title: 'Goblin',
      description: 'Goblins are small, black-hearted humanoids that lair in despoiled dungeons and other dismal settings. Individually weak, they gather in large numbers to torment other creatures.',
      armor: '14',
      hp: '15',
      attack: 'd20+4',
      damage: '1d6+2',
      experience: '50 XP',
      action: {
        title: 'Scimitar.',
        desc: 'Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) slashing damage.'
      },
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