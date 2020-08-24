<template>
  <div id="User">

  </div>
</template>

<script>
import queryFactory from "@/queryFactory";

export default {
name: "User",
  data(){
    return {
      username: '',
      email: '',
      firstName: '',
      lastName: '',
      lastLogin: '',
      dateJoined: '',
      isStaff: false,
      isSuperuser: false
    }
  },
  mounted(){

    this.$apollo.query({
      query: queryFactory("me")
    })
    .then((response)=>{

      console.log(response)

      this.$notify({
        group: 'notifications',
        type: 'success',
        title: 'Important message',
        text: "You have successfully logged in!",
      });
    })
    .catch((error)=>{
      this.$notify({
        group: 'notifications',
        type: 'error',
        title: 'Important message',
        text: error,
      })
    });
  }
}
</script>

<style scoped>

</style>
