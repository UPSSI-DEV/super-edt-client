<template>
  <div class="flex gap-2 items-center" @click="$emit('click')">
    <Feather :type="icon" size="16" />
    <span>{{ desc }}</span>
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  props: ["icon", "desc"],
});
</script>

<style></style>
