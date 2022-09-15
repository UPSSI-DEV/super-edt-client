<template>
  <nuxt-link v-if="module" to="/module-details" class="card block">
    <p>{{ module?.name }}</p>
    <div class="relative">
      <div class="mt-4 h-2 w-full rounded bg-white"></div>
      <div
        class="absolute top-0 h-2 rounded bg-primary-light"
        :style="percentStyle"
      ></div>
    </div>
  </nuxt-link>

  <!-- SKELETON VIEW -->
  <div v-else class="card flex-col gap-3">
    <p class="skeleton-text opacity-50">h</p>
    <p class="skeleton-text w-2/4 text-sm opacity-50">h</p>
    <div class="relative">
      <div class="mt-4 h-2 w-full rounded bg-white opacity-50"></div>
    </div>
  </div>
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
