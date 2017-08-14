import Vue from 'vue'
import Router from 'vue-router'
import Feature from '@/pages/Feature'
import Rank from '@/pages/Rank'
import Search from '@/pages/Search'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Feature
    },{
      path: '/feature',
      name: 'Feature',
      component: Feature
    },{
    	path: '/rank',
    	name: 'Rank',
    	component: Rank
    },{
    	path: '/search',
    	name: 'Search',
    	component: Search
    }
  ]
})
