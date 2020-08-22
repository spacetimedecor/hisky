import Router from 'vue-router'

import Dashboard from './components/Dashboard'
import Login from './components/Login'
import Register from './components/Register'
import User from './components/User'

export default new Router({

  routes: [
    {
      path: '/',
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