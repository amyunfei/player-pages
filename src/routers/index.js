import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login.vue'
import Home from '@/views/Home.vue'
import List from '@/views/List.vue'
import Search from '@/views/Search.vue'
import My from '@/views/My.vue'
import Singer from '@/views/Singer.vue'
import Album from '@/views/Album.vue'
import Music from '@/components/Music.vue'
import Dynamics from '@/components/Dynamics.vue'
import About from '@/components/About.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      redirect: '/'
    },
    {
      path: '/',
      name: 'login',
      component: Login,
      meta: {
        hideControl: true
      }
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta: {
        showFooter: true,
        hideControl: true
      }
    },
    {
      path: '/list',
      name: 'list',
      component: List,
      meta: {
        showFooter: true,
        hideControl: true
      }
    },
    {
      path: '/search',
      name: 'search',
      component: Search,
      meta: {
        showFooter: true,
        hideControl: true
      }
    },
    {
      path: '/my',
      name: 'my',
      component: My,
      meta: {
        showFooter: true,
        hideControl: true
      },
      children:[
        {
          path: '/my/music',
          component: Music,
          meta: {
            showFooter: true,
            hideControl: true
          }
        },
        {
          path: '/my/dynamics',
          component: Dynamics,
          meta: {
            showFooter: true,
            hideControl: true
          }
        },
        {
          path: '/my/about',
          component: About,
          meta: {
            showFooter: true,
            hideControl: true
          }
        },
        {
          path: '',
          redirect: '/my/music'
        }
      ]
    },
    {
      path: '/singer/:id',
      name: 'singer',
      component: Singer
    },
    {
      path: '/album/:id',
      name: 'album',
      component: Album
    },
  ]
})
