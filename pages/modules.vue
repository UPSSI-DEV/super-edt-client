<template>
  <nuxt-layout name="nav">
    <div v-for="i in new Array(3)">
      <h3 class="mb-4">UE 61 - SHS , Langues 2</h3>
      <div class="grid grid-cols-2 gap-4">
        <div class="col">
          <Module
            v-for="mod in mod_list.slice(0, mod_list.length / 2)"
            :module="mod"
            :key="mod.name"
          />
        </div>
        <div class="col">
          <Module
            v-for="mod in mod_list.slice(mod_list.length / 2, mod_list.length)"
            :module="mod"
            :key="mod.name"
          />
        </div>
      </div>
    </div>
  </nuxt-layout>
</template>

<script setup lang="ts">
import { Module as T_Module } from "@/types";

const mod_list: T_Module[] = [
  {
    name: "Gestion de projet",
    total_progress: 60,
  },
  {
    name: "EPS",
    total_progress: 100,
  },
  {
    name: "SHS",
    total_progress: 35,
  },
  {
    name: "Langues",
    total_progress: 80,
  },
];
</script>

<style scoped>
.col {
  @apply flex flex-col gap-4;
}
</style>
