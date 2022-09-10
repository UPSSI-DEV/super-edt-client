<template>
  <div class="card mb-6 block">
    <p>{{ name }}</p>
    <div class="relative">
      <div class="mt-4 h-2 w-full rounded bg-white"></div>
      <div class="absolute top-0 h-2 w-2/3 rounded bg-primary-light"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Props definition
type Props = {
  name?: string;
};
const props = defineProps<Props>();
</script>

<style scoped></style>
