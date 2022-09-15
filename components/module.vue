<template>
  <nuxt-link to="/module-details" class="card block">
    <p>{{ module.name }}</p>
    <div class="relative">
      <div class="mt-4 h-2 w-full rounded bg-white"></div>
      <div
        class="absolute top-0 h-2 rounded bg-primary-light"
        :style="percentStyle"
      ></div>
    </div>
  </nuxt-link>
</template>

<script setup lang="ts">
import { Module as T_Module } from "@/types";

// Props definition
type Props = {
  module?: T_Module;
};
const props = defineProps<Props>();

const percentStyle = computed(
  () => `width: ${props.module?.total_progress ?? 0}%;`
);
</script>

<style scoped></style>
