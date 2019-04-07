import Vuex from 'vuex'
import Vue from 'vue'
import * as getters from './getters'
import * as actions from './actions'
import * as mutations from './mutations'
import quests from './modules/quests'
import notes from './modules/notes'
import monsters from './modules/monsters'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    id: undefined,
    date: undefined,
  },

  getters,
  mutations,
  actions,

  modules: {
    quests,
    notes,
    monsters
  }
});