<template>
  <b-row class="vh-100" align-h="center" align-v="center">
    <b-col class="h-50" md="6" style="transform: translateY(-6rem)">
      <h2 class="text-center" style="transform: translateY(-1rem)">Register</h2>
      <b-form @submit="onSubmit">

        <b-form-group
            id="input-group-0"
            label="Email address:"
            label-for="input-0"
            description="We'll never share your email with anyone else (unless you betray us...)"
        >
          <b-form-input
              id="input-0"
              v-model="form.email"
              type="email"
              required
              placeholder="Enter email"
          ></b-form-input>
        </b-form-group>

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
            id="input-group-2"
            label="Your first name:"
            label-for="input-2"
        >
          <b-form-input
              id="input-2"
              v-model="form.firstname"
              placeholder="Enter name"
          ></b-form-input>
        </b-form-group>

        <b-form-group
            id="input-group-3"
            label="Your last name:"
            label-for="input-3"
        >
          <b-form-input
              id="input-3"
              v-model="form.lastname"
              placeholder="Enter name"
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

        <b-form-group
            id="input-group-5"
            label="Your password again please:"
            label-for="input-5"
        >
          <b-form-input
              id="input-5"
              v-model="form.password2"
              type="password"
              required
              placeholder="Enter password again"
          ></b-form-input>
        </b-form-group>
        <b-button type="submit" variant="success">Submit</b-button>
        <b-button to="/login" variant="warning">Login</b-button>
      </b-form>
    </b-col>
  </b-row>
</template>

<script>
import queryFactory from "@/queryFactory";

export default {
  name: "Register",
  methods: {

    onSubmit: function (evt) {
      evt.preventDefault()
      if (this.passwordsAreSame) {
        this.$apollo.mutate({
          mutation: queryFactory("register"),
          variables: {
            firstname: this.form.firstname,
            lastname: this.form.lastname,
            username: this.form.username,
            email: this.form.email,
            password: this.form.password1,
          }
        })
        .then((response)=>{
          console.log(response);
          if (response.data.register.message === "Thanks for signing up!"){
            this.$notify({
              group: 'notifications',
              type: 'success',
              title: 'Important message',
              text: 'Registration successful!',
            });
            this.$router.push('login').catch(()=>{});
          }
        })
        .catch(()=>{
          this.$notify({
            group: 'notifications',
            type: 'error',
            title: 'Important message',
            text: 'Registration error (an account with these details probably exists)',
          })
        });
      } else {
        this.$notify({
          group: 'notifications',
          type: 'error',
          title: 'Important message',
          text: 'Your passwords don\'t match!',
        })
      }
    }
  },
  computed: {
    passwordsAreSame: function(){
      return this.form.password1 === this.form.password2
    }
  },
  data() {
    return {
      form: {
        email: '',
        username: '',
        firstname: '',
        lastname: '',
        password1: '',
        password2: ''
      }
    }
  }
}
</script>

<style scoped>

</style>
