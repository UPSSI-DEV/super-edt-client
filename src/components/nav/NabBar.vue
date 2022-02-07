<template>
  <div class="grid grid-cols-4 nav-bar p-3 gap-1">
    <NavItem v-for="item in items" :key="item.route" :name="item.name" :route="item.route" :icon="item.icon" />
  </div>
</template>

<script>
import NavItem from '@/components/nav/NavItem.vue'
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

</style>