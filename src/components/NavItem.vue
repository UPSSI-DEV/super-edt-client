<template>
  <router-link :to="route" class="nav-item">
      <Feather :type="icon" />
      <span>{{ name }}</span>
  </router-link>
  

</template>

<script>


export default {
    props: [ 'icon', 'route', 'name' ]
}
</script>

<style>

</style>