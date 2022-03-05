<template>
    <router-view class="pb-0 pt-5 px-5 overflow-y-scroll"></router-view>
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
  @apply h-full m-0;
}

#app {
  display: grid;
  grid-template-rows: 1fr auto;
}
</style>
