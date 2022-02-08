<template>
  <div
    @click="$emit('click')"
    class="tap-effect flex items-center justify-between p-3 rounded-md transition-colors"
  >
    <div class="flex gap-2 items-center justify-start">
      <Feather :type="icon" size="16" />
      <p>{{ name }}</p>
    </div>
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: ["icon", "name"],
});
</script>

<style>
.tap-effect:active {
  @apply bg-gray-100;
}
</style>
