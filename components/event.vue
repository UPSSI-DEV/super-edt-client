<template>
  <nuxt-link v-if="event" to="/calendar-details" class="card flex-col gap-3">
    <div class="flex items-center gap-2">
      <div class="h-5 w-5 rounded-sm bg-black"></div>
      <p>{{ event.name }}</p>
    </div>

    <div class="info">
      <vue-feather type="clock" size="16" />
      <p>{{ formatted_time }}</p>
    </div>

    <div class="info">
      <vue-feather type="map-pin" size="16" />
      <p>{{ event.room }}</p>
    </div>
  </nuxt-link>

  <div v-else class="card flex-col gap-3">
    <div class="flex items-center gap-2">
      <div class="h-5 w-5 rounded-sm bg-white opacity-50"></div>
      <p class="skeleton-text w-48 text-sm opacity-50">h</p>
    </div>

    <p class="info skeleton-text w-40 opacity-50">h</p>
    <p class="info skeleton-text w-36 opacity-50">h</p>
  </div>
</template>

<script setup lang="ts">
import VueFeather from "vue-feather";
import { T_Event } from "@/types";
import dayjs from "dayjs";

// Props definition
type Props = {
  event?: T_Event;
};
const props = defineProps<Props>();

// Time slot formatting
dayjs.locale("fr");
const formatted_time = computed(() => {
  const st = dayjs(props.event.times.start).format("hh:mm");
  const ed = dayjs(props.event.times.end).format("hh:mm");
  return `${st} - ${ed}`;
});
</script>

<style scoped>
.info {
  @apply flex items-center gap-2 text-xs opacity-50;
}
</style>
