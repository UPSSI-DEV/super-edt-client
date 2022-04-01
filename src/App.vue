<template>
  <div
    class="m-3 mb-5 hidden items-center gap-3 rounded-md bg-red-500 p-3 font-bold text-white lg:flex"
  >
    <VueFeather type="alert-triangle" />
    <h1>
      <b>SuperEDT</b> n'est pas actuellement prévu pour ordinateur. Favorisez la
      vue mobile
    </h1>
  </div>

  <router-view
    id="router"
    class="relative overflow-y-scroll px-5 pb-0 pt-5"
    v-slot="{ Component }"
  >
    <keep-alive>
      <component :is="Component" />
    </keep-alive>
  </router-view>
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
  @apply relative m-0 h-full bg-bg;
}

body {
  @apply bg-bg text-text;
}

#app {
  display: grid;
  grid-template-rows: 1fr auto;
}

@media (min-width: 1024px) {
  #app {
    grid-template-rows: auto 1fr auto;
  }
}
</style>
