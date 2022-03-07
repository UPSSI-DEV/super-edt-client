<template>
  <Setting name="Theme" icon="layout" @click="changeTheme()">
    <div class="flex items-center justify-center" :class="color">
      <VueFeather :type="icon" size="20" />
    </div>
  </Setting>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Setting from "@/components/settings/Setting.vue";

type IconMap = {
  [details: string]: { icon: string; color: string };
};

const icons: IconMap = {
  light: { icon: "sun", color: "light" },
  dark: { icon: "moon", color: "dark" },
  /*alien: { icon: "box", color: "green-500" },*/
};

export default defineComponent({
  components: { Setting },

  data() {
    return {
      theme: "light" as string,
    };
  },

  computed: {
    icon(): string {
      return icons[this.theme].icon;
    },

    color(): string {
      return "theme-" + icons[this.theme].color;
    },
  },

  methods: {
    changeTheme() {
      console.log("Click");
      const options = Object.keys(icons);
      const newIndex = (options.indexOf(this.theme) + 1) % options.length;
      this.theme = options[newIndex];

      console.log(options, newIndex, this.theme, icons[this.theme]);
    },
  },

  mounted() {
    this.theme = "light";
  },
});
</script>

<style scoped>
.theme-light {
  @apply text-yellow-500;
}

.theme-dark {
  @apply text-purple-500;
}
</style>
