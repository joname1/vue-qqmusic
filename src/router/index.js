import Vue from 'vue'
import Router from 'vue-router'
import Feature from '@/pages/feature'
import Singer from '@/pages/singer'
import Rank from '@/pages/rank'
import Search from '@/pages/search'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/feature'
    },{
      path: '/feature',
      component: Feature
    },{
      path: '/singer',
      component: Singer
    },{
    	path: '/rank',
    	component: Rank
    },{
    	path: '/search',
    	component: Search
    }
  ]
})
