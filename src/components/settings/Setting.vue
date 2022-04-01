<template>
  <div
    @click="$emit('click')"
    class="tap-effect flex items-center justify-between rounded-md p-3 transition-colors"
  >
    <div class="flex items-center justify-start gap-2">
      <VueFeather :type="icon" size="16" />
      <p>{{ name }}</p>
    </div>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  emits: ["click"],
  props: ["icon", "name"],
});
</script>

<style>
.tap-effect:active {
  @apply bg-bg-secondary;
}
</style>
