<template>
  <div class="flex h-full w-full flex-col">
    <!-- Header -->
    <div class="flex items-center justify-between gap-4 p-4">
      <div class="flex items-center gap-4">
        <img src="@/assets/images/logo.png" width="48" alt="" />
        <h1 class="text-xl font-semibold">SuperEDT</h1>
      </div>

      <nuxt-link
        to="/profile"
        class="grid place-items-center rounded-lg bg-gray p-2"
      >
        <vue-feather type="user" size="16"></vue-feather>
      </nuxt-link>
    </div>

    <!-- Content -->
    <div class="flex flex-grow flex-col gap-4 overflow-y-scroll p-4">
      <!-- <transition-group name="fade" mode="out-in"> -->
      <slot />
      <!-- </transition-group> -->
    </div>

    <!-- Footer -->
    <div class="flex items-center justify-between p-8">
      <nuxt-link
        v-for="[icon, link] in Object.entries(links)"
        :to="link"
        class="grid place-items-center"
        :class="{ 'text-primary': isRouteActive(link) }"
      >
        <vue-feather :type="icon" size="24"></vue-feather>
      </nuxt-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import VueFeather from "vue-feather";

const links = {
  calendar: "/calendar",
  grid: "/modules",
  "check-square": "/tasks",
  percent: "/marks",
};

const isRouteActive = (id: string) => useRoute().path.includes(id);
</script>
