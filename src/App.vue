<template>
  <div id="app">
    <router-view></router-view>
    <NavBar />
  </div>
</template>

<script>
import NavBar from "@/components/NabBar.vue"

export default {
  components: { NavBar }
}
</script>


<style>
html, body, #app {
  height: 100%;
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  display: grid;
  grid-template-rows: 1fr auto;
}
</style>
