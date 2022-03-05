<template>
  <div class="grid place-items-center">
    <p>
      The page <code>{{ path }}</code> was not found ...
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "NotFound",
  data() {
    return {
      path: this.$route.path,
    };
  },
});
</script>

<style></style>
