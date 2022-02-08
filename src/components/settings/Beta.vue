<template>
  <Setting name="Join the beta" icon="tool" @click="launchLink()" />
</template>

<script lang="ts">
import Vue from "vue";
import Setting from "@/components/settings/Setting.vue";

export default Vue.extend({
  components: { Setting },

  methods: {
    launchLink() {
      window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
    },
  },
});
</script>

<style></style>
