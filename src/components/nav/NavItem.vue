<template>
  <router-link
    :to="route"
    class="flex flex-col items-center gap-1 rounded-lg pb-2 pt-3 opacity-60"
  >
    <VueFeather :type="icon" />
    <span class="text-sm">{{ name }}</span>
  </router-link>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: ["icon", "route", "name"],
});
</script>

<style>
.router-link-exact-active,
.router-link-active {
  @apply bg-black text-white;
  opacity: 1 !important;
}
</style>
