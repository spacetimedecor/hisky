import Router from 'vue-router'

import Dashboard from './components/Dashboard'
import Login from './components/Login'
import Register from './components/Register'
import User from './components/User'
import {AUTH_TOKEN} from "@/settings";


export const router = new Router({
  routes: [

    { path: '/', redirect: '/user' },
    {
      path: '/dashboard',
      component: Dashboard
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/register',
      component: Register
    },
    {
      path: '/user',
      component: User
    }
  ],

  mode: 'history'
})

router.beforeEach((to, from, next)=>{
  let isAuthenticated;
  if(localStorage.getItem(AUTH_TOKEN))
    isAuthenticated = true;
  else
    isAuthenticated= false;

  console.log("is authenticated", isAuthenticated)
  console.log("to.path", to.path)

  if ((to.path === '/user' || to.path === '/dashboard') && !isAuthenticated){
    next('/login')
  }

  if ((to.path === '/login' || to.path === '/register') && isAuthenticated){
    next('/user')
  }

  next()
})



