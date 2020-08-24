<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="success">
      <b-navbar-brand href="#">Adam's proto-CRM</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse" v-show="this.authenticated"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav >

        <b-navbar-nav>
          <b-nav-item to="/dashboard" href="#">Dashboard</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav  class="ml-auto" v-show="this.authenticated">
          <b-nav-item-dropdown  right>
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
              <em>User</em>
            </template>
            <b-dropdown-item href="#" @click="this.toUser">Profile</b-dropdown-item>
            <b-dropdown-item href="#"  @click="this.logout">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import { AUTH_TOKEN } from '../settings'

export default {
  name: 'Header',
  data: function (){
    return {
      authenticated: false,
      admin: false
    }
  },
  watch:{
    $route (to){
      if (to.path === '/dashboard' || to.path === '/user'){
        this.authenticated = true
      }
      else if (to.path === '/login' || to.path === '/register'){
        this.authenticated = false
      }
    }
  },
  methods: {
    toUser () {
      this.$router.push('/user').catch(()=>{});
    },
    logout () {
      localStorage.removeItem(AUTH_TOKEN)
      this.$router.push('/login').catch(()=>{});
    }
  }
}
</script>
