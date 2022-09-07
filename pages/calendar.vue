<template>
  <nuxt-layout name="nav">
    <Event v-for="i in new Array(15)" />
  </nuxt-layout>
</template>

<script setup lang="ts">
import VueFeather from "vue-feather";
</script>
