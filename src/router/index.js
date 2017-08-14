import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/home'
import Detail from '@/components/detail/detail'
import NotFound from '@/components/notFound'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    }
  ]
})
