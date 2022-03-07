<template>
  <router-view class="overflow-y-scroll px-5 pb-0 pt-5"></router-view>
  <NavBar />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavBar from "@/components/nav/NabBar.vue";

export default defineComponent({
  components: { NavBar },
});
</script>

<style>
html,
body,
#app {
  @apply m-0 h-full;
}

#app {
  display: grid;
  grid-template-rows: 1fr auto;
}
</style>
