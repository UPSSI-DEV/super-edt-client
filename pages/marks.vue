<template>
  <nuxt-layout name="nav">
    <div class="flex items-center gap-3">
      <vue-feather type="feather"></vue-feather>
      <h1 class="text-base font-bold text-primary">SuperEDT</h1>
    </div>

    <div class="text-base text-primary">Dernière notes</div>
    <Mark />
    <div class="flex w-full rounded border border-primary"></div>
    <Mark v-for="i in new Array(5)" />
  </nuxt-layout>
</template>

<script setup lang="ts">
import VueFeather from "vue-feather";
</script>

<style></style>
