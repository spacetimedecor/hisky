<template>
  <div id="app">
    <Header/>
      <b-container fluid class="h-100">
      <router-view/>
    </b-container>
  </div>
</template>

<script>
  import Header from '@/components/Header'

  export default {
    name: 'app',
    components: {
      Header
    },
    mounted() {
      console.log(this);
    }
  }
</script>

<style>
  html, body, #app {
    height: 100%;
    overflow: hidden;
  }

</style>
