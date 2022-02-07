<template>
  <div id="app">
    <router-view class="p-3 overflow-y-scroll"></router-view>
    <NavBar />
  </div>
</template>

<script>
import NavBar from "@/components/nav/NabBar.vue"

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
  display: grid;
  grid-template-rows: 1fr auto;
}
</style>
