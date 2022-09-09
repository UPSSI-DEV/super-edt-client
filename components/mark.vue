<template>
  <div class="card flex-col" @click="hide">
    <div class="flex justify-between">
      <p>Anglais - Présentation</p>
      <p class="flex justify-between" id="mark">
        <span class="font-semibold text-primary">15.25</span>
        <span>/20</span>
      </p>
    </div>
    <transition name="appear-down">
      <div v-show="showDetails">
        <div class="mb-4 w-full rounded border border-white opacity-50"></div>
        <div class="flex justify-between gap-3 text-xs opacity-50">
          <p>min : 8.25</p>
          <p>moy : 10.25</p>
          <p>max : 15.25</p>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
// reactive state
var showDetails = ref(false);

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
