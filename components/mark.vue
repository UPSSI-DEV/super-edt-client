<template>
  <div class="card" @click="hide">
    Anglais - Présentation
    <div class="mark">
      <div class="your_mark">15</div>
      /20
    </div>
    {{ isHidden }}
    <div v-if="isHidden"></div>
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

<style scoped>
.card {
  justify-content: space-between;
}

.mark {
  display: flex;
  justify-content: space-between;
}

.your_mark {
  color: var(--primary);
}
</style>
