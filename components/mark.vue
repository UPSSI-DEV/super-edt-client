<template>
  <div class="card flex-col" @click="hide">
    <div class="flex justify-between">
      Anglais - Présentation
      <div class="flex justify-between" id="mark">
        <div class="text-primary">15.25</div>
        /20
      </div>
    </div>
    <div v-if="isHidden">
      <div class="mb-4 w-full rounded border border-white opacity-50"></div>
      <div class="flex justify-between gap-3 opacity-50">
        <div class="text-xs">min : 8.25</div>
        <div class="text-xs">moy : 10.25</div>
        <div class="text-xs">max : 15.25</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// reactive state
var isHidden = ref(false);

// functions that mutate state and trigger updates
function hide() {
  isHidden.value = !isHidden.value;
  console.log("yo");
}
</script>

<style scoped></style>
