<template>
  <div class="nav-bar grid grid-cols-4 gap-1 p-3">
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
import { defineComponent } from "vue";
import NavItem from "@/components/nav/NavItem.vue";

type NavData = {
  name: string;
  route: string;
  icon: string;
};

const data: NavData[] = [
  { name: "Cours", route: "week", icon: "calendar" },
  { name: "Modules", route: "modules", icon: "book" },
  { name: "Examens", route: "exams", icon: "edit" },
  { name: "Paramètres", route: "settings", icon: "settings" },
];

export default defineComponent({
  components: { NavItem },

  data() {
    return {
      items: data as NavData[],
    };
  },
});
</script>

<style></style>
