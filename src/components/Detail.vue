<template>
  <div class="flex items-center gap-2" @click="$emit('click')">
    <VueFeather :type="icon" size="16" />
    <span>{{ desc }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  emits: ["click"],
  props: ["icon", "desc"],
});
</script>

<style></style>
