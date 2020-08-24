<template>
  <div id="User">

  </div>
</template>

<script>
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
    // Now we query me

  }
}
</script>

<style scoped>

</style>
