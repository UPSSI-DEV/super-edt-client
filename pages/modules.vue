<template>
  <nuxt-layout name="nav">
    <div v-for="i in new Array(3)">
      <h3 class="mb-4">UE 61 - SHS , Langues 2</h3>
      <div class="grid grid-cols-2 gap-4">
        <div class="col">
          <Module v-for="i in new Array(2)" :module="mod1" />
        </div>
        <div class="col">
          <Module v-for="i in new Array(2)" :module="mod1" />
        </div>
      </div>
    </div>
  </nuxt-layout>
</template>

<script setup lang="ts">
import { Module as T_Module } from "@/types";

const mod1: T_Module = {
  name: "Gestion de projet",
  total_progress: 35,
};
</script>

<style scoped>
.col {
  @apply flex flex-col gap-4;
}
</style>
