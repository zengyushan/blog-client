import Vue from 'vue'
import Router from 'vue-router'
import Create from '@/pages/Create/template.vue'
import Detail from '@/pages/Detail/template.vue'
import Edit from '@/pages/Edit/template.vue'
import Index from '@/pages/Index/template.vue'
import Login from '@/pages/Login/template.vue'
import My from '@/pages/My/template.vue'
import Register from '@/pages/Register/template.vue'
import User from '@/pages/User/template.vue'
import store from '../store'

Vue.use(Router)


const router = new Router({
  routes: [
    {
      path: '/create',
      component: Create,
      meta: {requiresAuth:true}
    },
    {
      path: '/detail/:blogId',
      component: Detail
    },
    {
      path: '/edit/:blogId',
      component: Edit,
      meta: {requiresAuth:true}
    },
    {
      path: '/',
      component: Index
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/my',
      component: My,
      meta: {requiresAuth:true}
    },
    {
      path: '/register',
      component: Register
    },
    {
      path: '/user/:userId',
      name: 'User',
      component: User
    }
  ]
})

//当路由切换时
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    store.dispatch('checkLogin').then(isLogin=>{
      console.log(isLogin)
      if (!isLogin) {
        next({
          path: '/login',
          query: { redirect: to.fullPath }
        })
      } else {
        next() //有requiresAuth的，同时已登录的，也直接跳转
      }
    })
  } else {
    next() // 没有requiresAuth的直接跳转
  }
})
export default router
