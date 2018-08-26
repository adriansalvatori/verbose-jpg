import Vue from 'vue'
import Router from 'vue-router'
import Banner1 from '@/components/Banner1'
import Banner2 from '@/components/Banner2'
import Banner3 from '@/components/Banner3'
import Banner4 from '@/components/Banner4'
import Banner5 from '@/components/Banner5'
import Banner6 from '@/components/Banner6'
import Banner7 from '@/components/Banner7'
import Banner8 from '@/components/Banner8'
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/banner-1',
      name: 'Banner1',
      component: Banner1
    },
    {
      path: '/banner-2',
      name: 'Banner2',
      component: Banner2
    },
    {
      path: '/banner-3',
      name: 'Banner3',
      component: Banner3
    },
    {
      path: '/banner-4',
      name: 'Banner4',
      component: Banner4
    },
    {
      path: '/banner-5',
      name: 'Banner5',
      component: Banner5
    },
    {
      path: '/banner-6',
      name: 'Banner6',
      component: Banner6
    },
    {
      path: '/banner-7',
      name: 'Banner7',
      component: Banner7
    },
    {
      path: '/banner-8',
      name: 'Banner8',
      component: Banner8
    }
  ]
})
