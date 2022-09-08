<template>
  <div
    v-if="exam"
    class="card flex-col gap-2"
    @click="showDetails = !showDetails"
  >
    <div class="flex items-center gap-2">
      <span class="font-semibold">{{ time }}</span>
      <span>{{ exam.subject }}</span>
    </div>

    <div v-show="showDetails">
      <div class="info mb-2 opacity-50">
        <vue-feather type="map-pin" size="16" />
        <p>{{ exam.room }}</p>
      </div>

      <div class="info">
        <vue-feather type="external-link" size="16" class="opacity-50" />
        <p class="text-primary-light">Voir module</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { T_UpcomingExam } from "@/types";
import dayjs from "dayjs";

import VueFeather from "vue-feather";

const props = defineProps<{ exam?: T_UpcomingExam }>();

const showDetails = ref(false);
const time = computed(() => dayjs(props.exam?.time).format("hh:mm"));
</script>

<style scoped>
.info {
  @apply flex items-center gap-2 text-xs;
}
</style>
