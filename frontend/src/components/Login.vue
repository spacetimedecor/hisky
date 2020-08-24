<template>
  <b-row class="vh-100" align-h="center" align-v="center">
    <b-col class="h-50" md="6" style="transform: translateY(-6rem)">
      <h2 class="text-center" style="transform: translateY(-1rem)">Login</h2>
      <b-form @submit="onSubmit">

        <b-form-group
            id="input-group-1"
            label="Username:"
            label-for="input-1"
        >
          <b-form-input
              id="input-1"
              v-model="form.username"
              required
              placeholder="Enter username"
          ></b-form-input>
        </b-form-group>

        <b-form-group
            id="input-group-4"
            label="Your password:"
            label-for="input-4"
        >
          <b-form-input
              id="input-4"
              v-model="form.password1"
              type="password"
              required
              placeholder="Enter password"
          ></b-form-input>
        </b-form-group>

        <b-button type="submit" variant="success">Submit</b-button>
      </b-form>
    </b-col>
  </b-row>
</template>

<script>
  import { USER_ID, AUTH_TOKEN } from '@/settings'

  export default {
    name: 'Login',
    methods: {
      onSubmit(evt) {
        evt.preventDefault()

      },
      saveUserData (id, token) {

        localStorage.setItem(USER_ID, id)
        localStorage.setItem(AUTH_TOKEN, token)
        this.$root.$data.userId = localStorage.getItem(USER_ID)
      }
    },
    data() {
      return {
        form: {
          username: '',
          password: ''
        }
      }
    }
  }
</script>
