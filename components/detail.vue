<template>
  <div class="card block">
    <div v-show="link">
      <div class="flex place-items-center justify-between pb-4">
        <h3>Ressources</h3>
        <div class="flex place-items-center">
          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            ><span class="text-xs underline">Module</span></a
          >
          <vue-feather class="ml-1" type="external-link" size="16" />
        </div>
      </div>
    </div>
    <div class="flex place-items-center justify-between pb-4" v-show="!link">
      <h3>Ressources</h3>
    </div>

    <div class="flex flex-col">
      <div class="mb-4 flex place-items-center">
        <vue-feather type="external-link" class="mr-3 opacity-50" size="16" />
        <p class="text-xs text-primary-light">Moodle</p>
      </div>

      <div class="flex place-items-center">
        <vue-feather type="external-link" class="mr-3 opacity-50" size="16" />
        <p class="text-xs text-primary-light">Moodle</p>
      </div>
    </div>
  </div>
</template>
x
<script setup lang="ts">
import VueFeather from "vue-feather";

// Props definition
type Props = {
  link?: boolean;
};
const props = defineProps<Props>();
</script>

<style scoped></style>
