<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="success">
      <b-navbar-brand href="#">Adam's proto-CRM</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>

<!--        <b-navbar-nav>-->
<!--          <b-nav-item href="#">Link</b-nav-item>-->
<!--          <b-nav-item href="#" disabled>Disabled</b-nav-item>-->
<!--        </b-navbar-nav>-->

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
              <em>User</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import { USER_ID, AUTH_TOKEN } from '../settings'

// if you have a user id, logout button appears, else, login button directs to /login
// If Admin, dashboard link is active. How to know if admin? Hmmm...

export default {
  name: 'Header',
  computed: {
    userId () {
      return this.$root.$data.userId
    }
  },
  methods: {
    logout () {
      localStorage.removeItem(USER_ID)
      localStorage.removeItem(AUTH_TOKEN)
      this.$root.$data.userId = localStorage.getItem(USER_ID)
    }
  }
}
</script>
