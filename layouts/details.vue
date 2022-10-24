<template>
  <div>
    <header class="flex items-center gap-4 px-4 py-6">
      <button @click="goBack()" class="grid place-items-center">
        <vue-feather type="chevron-down" />
      </button>
      <h3>{{ title }}</h3>
    </header>

    <main class="flex flex-col gap-4 p-4">
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
import VueFeather from "vue-feather";
const props = defineProps<{ title: string }>();

definePageMeta({
  pageTransition: {
    name: "slide-up",
    duration: 2000,
  },
});

const goBack = () => useRouter().back();
</script>

<style scoped>
.slide-up-enter-active,
.slide-up-leave-active {
  @apply absolute inset-x-0;
}

.slide-up-enter-active {
  animation: slide-up 200ms ease-out;
}

.slide-up-leave-active {
  animation: slide-up 300ms ease-out reverse;
}

/* .page-enter-active,
.page-leave-active {
  @apply absolute inset-x-0;
}

.page-enter-active {
  animation: var(--anim-slide-up);
}

.page-leave-active {
  animation: var(--anim-slide-down);
} */
</style>
