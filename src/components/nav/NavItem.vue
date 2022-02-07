<template>
  <router-link
    :to="route"
    class="flex flex-col gap-1 items-center pb-2 pt-3 rounded-lg opacity-60"
  >
    <Feather :type="icon" />
    <span>{{ name }}</span>
  </router-link>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: ["icon", "route", "name"],
});
</script>

<style>
.router-link-exact-active,
.router-link-active {
  @apply text-white bg-black;
  opacity: 1 !important;
}
</style>
