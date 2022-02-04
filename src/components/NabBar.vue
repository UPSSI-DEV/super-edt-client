<template>
  <div class="nav-bar">
    <NavItem v-for="item in items" :key="item.route" :name="item.name" :route="item.route" :icon="item.icon" />
  </div>
</template>

<script>
import NavItem from './NavItem.vue'
export default {
  components: { NavItem },

  data() {
    return {
      items: [
        {name: "Week",      route: "week",      icon: "calendar"  },
        {name: "Modules",   route: "modules",   icon: "book"      },
        {name: "Tests",     route: "tests",     icon: "percent"   },
        {name: "Settings",  route: "settings",  icon: "settings"  }
      ]
    }
  }

}
</script>

<style>
.nav-bar {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}
</style>