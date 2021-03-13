<template>
  <div id = "app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {

  }
}
</script>

<style>
@import "./assets/css/base.css";
#app {
  height: 100%;
  min-height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>