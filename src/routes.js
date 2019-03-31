import Vue from 'vue'
import VueRouter from 'vue-router'
import Quests from './components/quests/Quests.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [{
      path: '/quests',
      name: 'quests',
      component: Quests
    },
    {
      path: '/notes',
      name: 'notes',
      component: () => import('./components/notes/Notes.vue')
    }, 
    {
      path: '/bestiary',
      name: 'bestiary',
      component: () => import('./components/bestiary/Monsters.vue')
    },
    {
      path: '/*',
      redirect: {
        name: 'quests'
      }
    }
  ]
})
