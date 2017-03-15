import Vue from 'vue'
import Router from 'vue-router'
import PageHome from '@/pages/GeniusRoot'
import Service from '@/pages/ServiceRoot'
import Platform from '@/pages/PlatformRoot'
import Record from '@/pages/RecordRoot'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: PageHome
    },
    {
      path:'/service',
      name:'service',
      component:Service
    },
    {
      path:'/platform',
      name:'platform',
      component:Platform
    },
    {
      path:'/record',
      name:'record',
      component:Record
    }
  ]
})
