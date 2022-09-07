<template>
  <div class="flex h-full flex-col items-center justify-center gap-4 p-4">
    <div class="flex items-center justify-center gap-2">
      <img src="@/assets/images/logo.png" width="64" alt="" />
      <h1 class="text-2xl font-semibold">SuperEDT</h1>
    </div>

    <nuxt-link
      v-for="[name, link] in Object.entries(providers)"
      :to="link"
      class="button w-full"
    >
      <img :src="load(name)" class="h-4" alt="" />
      <p>Se connecter avec {{ name }}</p>
    </nuxt-link>
  </div>
</template>

<script setup lang="ts">
const load = (name: string) =>
  `../assets/images/providers/${name.toLowerCase()}.png`;

const providers = {
  Discord: "/info",
  Google: "/info",
};
</script>
