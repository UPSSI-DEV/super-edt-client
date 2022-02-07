<template>
  <router-link :to="route" class="pb-2 pt-3 rounded-lg flex flex-col items-center gap-1 opacity-60">
      <Feather :type="icon" />
      <span>{{ name }}</span>
  </router-link>
  

</template>

<script lang="ts">


export default {
    props: [ 'icon', 'route', 'name' ]
}
</script>

<style>

.router-link-exact-active, .router-link-active {
  @apply bg-black text-white;
  opacity: 1 !important;
}

</style>