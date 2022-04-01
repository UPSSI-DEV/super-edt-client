<template>
  <Setting name="Thème visuel" icon="layout" @click="changeTheme()">
    <div class="flex items-center justify-center" :class="color">
      <VueFeather :type="icon" size="20" />
    </div>
  </Setting>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Setting from "@/components/settings/Setting.vue";

import { darkMode } from "@/stores/app-state";
import { BasicColorSchema } from "@vueuse/core";

import Map from "@/tools/map";
import { isTSConstructSignatureDeclaration } from "@babel/types";

type IconInfo = { icon: string; color: string };

const icons = new Map<BasicColorSchema, IconInfo>();
icons.set("light", { icon: "sun", color: "light" });
icons.set("dark", { icon: "moon", color: "dark" });

export default defineComponent({
  components: { Setting },

  data() {
    return {
      theme: darkMode,
    };
  },

  computed: {
    icon(): string {
      return icons.get(this.theme).icon;
    },

    color(): string {
      return "theme-" + icons.get(this.theme).color;
    },
  },

  methods: {
    changeTheme() {
      const options = icons.keySet();
      const newIndex = (options.indexOf(this.theme) + 1) % options.length;

      this.theme = options[newIndex];
    },
  },
});
</script>

<style scoped>
.theme-light {
  @apply text-yellow-500;
}

.theme-dark {
  @apply text-violet-600;
}
</style>
