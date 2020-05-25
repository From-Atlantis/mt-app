import Vue from 'vue'
import Router from 'vue-router'
import defaultPage from '@/views/defaultPage.vue'
import mIndex from '@/page/index.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
      path: '/',
      name: 'defaultPage',
      component: defaultPage,
      redirect: '/index',
      children: [{
          path: '/index',
          name: 'index',
          component: mIndex
        },
        {
          path: '/changeCity',
          name: 'changeCity',
          component: () => import('@/page/changeCity.vue')
        },
        {
          path: 's/:name',
          name: 'goodsList',
          component: () => import('@/page/goodsList.vue')
        }
      ]
    },
    {
      path: '/blank',
      name: 'blank',
      component: () => import('@/views/blank.vue'),
      children: [{
        path: '/login',
        name: 'login',
        component: () => import('@/page/login.vue')
      }, {
        path: '/register',
        name: 'register',
        component: () => import('@/page/register.vue')
      }]
    }
  ]
})