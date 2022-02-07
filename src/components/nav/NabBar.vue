<template>
  <div class="grid grid-cols-4 nav-bar p-3 gap-1">
    <NavItem
      v-for="item in items"
      :key="item.route"
      :name="item.name"
      :route="item.route"
      :icon="item.icon"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import NavItem from "@/components/nav/NavItem.vue";

type NavData = {
  name: string;
  route: string;
  icon: string;
};

const data: NavData[] = [
  { name: "Week", route: "week", icon: "calendar" },
  { name: "Modules", route: "modules", icon: "book" },
  { name: "Tests", route: "tests", icon: "percent" },
  { name: "Settings", route: "settings", icon: "settings" },
];

export default Vue.extend({
  components: { NavItem },

  data() {
    return {
      items: data as NavData[],
    };
  },
});
</script>

<style></style>
