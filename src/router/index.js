import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '@/pages/home/home'
import aboutUs from '@/pages/about-us/about-us'
import contactUs from '@/pages/contact-us/contact-us'
import login from '@/pages/login/login'
import retrievePsw from '@/pages/login/retrieve-psw/retrievePsw'
import pswVerify from '@/pages/login/psw-verify/pswdVerify'
import docum from '@/pages/document/document.vue'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',  // 首页
    name: 'home',
    component: home
  },
  {
    path: '/aboutUs',  // 关于我们
    name: 'aboutUs',
    component: aboutUs
  },
  {
    path: '/contactUs',  // 联系我们
    name: 'contactUs',
    component: contactUs
  },
  {
    path: '/login',  // 登录
    name: 'login',
    component: login,
    children: [
      {
        path: '/login/retrievePsw',
        component: retrievePsw
      }
    ]
  },
  {
    path: '/pswVerify', // 密码找回
    name: 'pswVerify',
    component: pswVerify
  },
  {
    path: '/document', // 文档中心
    name: 'document',
    component: docum
  },
  {
    path: '*',
    redirect: '/home'
  }
]

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: routes
})

export default router
