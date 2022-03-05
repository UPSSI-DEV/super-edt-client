<template>
  <div class="flex gap-2 items-center" @click="$emit('click')">
    <vue-feather :type="icon" size="16" />
    <span>{{ desc }}</span>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: ["icon", "desc"],
});
</script>

<style></style>
