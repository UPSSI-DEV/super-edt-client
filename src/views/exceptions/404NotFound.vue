<template>
  <div class="grid place-items-center">
    <p>
      The page <code>{{ path }}</code> was not found ...
    </p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "NotFound",
  data() {
    return {
      path: this.$route.path,
    };
  },
});
</script>

<style></style>
