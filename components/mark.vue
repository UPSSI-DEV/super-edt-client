<template>
  <div v-if="mark" class="card flex-col" @click="hide">
    <div class="flex justify-between">
      <p>{{ mark.name }}</p>
      <p class="flex justify-between" id="mark">
        <span class="font-semibold text-primary">{{ mark.mark }}</span>
        <span>/20</span>
      </p>
    </div>
    <transition name="appear-down">
      <div v-show="showDetails">
        <div class="mb-4 w-full rounded border border-white opacity-50"></div>
        <div class="flex justify-between gap-3 text-xs opacity-50">
          <p>min : {{ mark.min }}</p>
          <p>moy : {{ mark.avg }}</p>
          <p>max : {{ mark.max }}</p>
        </div>
      </div>
    </transition>
  </div>

  <!-- SKELETON VIEW -->
  <div v-else class="card flex-col gap-3">
    <div class="flex justify-between">
      <p class="info skeleton-text w-40 opacity-50">h</p>
      <p class="info skeleton-text w-10 opacity-50">h</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Mark as T_Mark } from "@/types";

// reactive state
var showDetails = ref(false);

// Props definition
type Props = {
  mark?: T_Mark;
};
const props = defineProps<Props>();

// functions that mutate state and trigger updates
function hide() {
  showDetails.value = !showDetails.value;
}
</script>

<style scoped>
.appear-down-enter-active {
  animation: appear-down 300ms ease-out;
}

.appear-down-leave-active {
  animation: appear-down 200ms ease-out reverse;
}
</style>
