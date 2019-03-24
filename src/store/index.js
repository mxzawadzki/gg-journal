import Vuex from 'vuex'
import Vue from 'vue'
import quests from './modules/quests'
import notes from './modules/notes'
import monsters from './modules/monsters'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    quests,
    notes,
    monsters
  }
});