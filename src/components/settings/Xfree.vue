<template>
  <Setting name="Ignore XFree" icon="bell-off" v-on:click="toggleIgnore()">
    <span class="font-bold">{{ isOn }}</span>
  </Setting>
</template>

<script lang="ts">
import Vue from "vue";
import Setting from "@/components/settings/Setting.vue";

export default Vue.extend({
  components: { Setting },

  data() {
    return {
      ignore: true as boolean,
    };
  },

  computed: {
    isOn(): string {
      return this.ignore ? "YES" : "NO";
    },
  },

  methods: {
    toggleIgnore() {
      this.ignore = !this.ignore;
    },
  },
});
</script>

<style></style>
