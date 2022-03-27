<template>
  <Setting name="Ignorer XFree" icon="bell-off" v-on:click="toggleIgnore()">
    <span class="font-bold">{{ isOn }}</span>
  </Setting>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Setting from "@/components/settings/Setting.vue";
import { ignoreXFree } from "@/stores/app-state";

export default defineComponent({
  components: { Setting },

  data() {
    return {
      ignore: ignoreXFree,
    };
  },

  computed: {
    isOn(): string {
      return this.ignore ? "OUI" : "NON";
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
