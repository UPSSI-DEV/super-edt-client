<template>
  <div class="flex h-full flex-col items-center justify-center gap-4 p-4">
    <div class="flex items-center justify-center gap-2">
      <img src="/images/logo.png" class="h-16" />
      <h1 class="text-2xl font-semibold">SuperEDT</h1>
    </div>

    <nuxt-link
      v-for="p in providers"
      :to="p.url"
      @click="setProvider(p)"
      class="button w-full"
    >
      <img :src="p.icon" class="h-4" />
      <p>Se connecter avec {{ p.name }}</p>
    </nuxt-link>
  </div>
</template>

<script setup lang="ts">
import { Provider } from "~/types";

const providers = ref<Provider[]>();

onMounted(async () => {
  const redirect = useAuthRedirectUrl();
  providers.value = await useAuthProviders(redirect);
});

const setProvider = (provider: Provider) =>
  localStorage.setItem("provider", JSON.stringify(provider.original));
</script>
