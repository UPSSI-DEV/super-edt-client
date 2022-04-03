<template>
  <div>
    <div
      v-if="loading"
      class="absolute top-0 left-0 right-0 bottom-0 grid place-items-center bg-bg"
    >
      <span>Loading ...</span>
    </div>

    <div v-for="day in exams" :key="day.day" class="mb-5 flex flex-col gap-3">
      <h3 class="text-left capitalize">{{ formatDate(day.day) }}</h3>
      <Event v-for="ev in day.events" :key="ev.name" :event="ev" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Event from "@/components/events/Event.vue";
import { Day, getExams } from "@/api";

import { currentClass } from "@/stores/app-state";
import { getUserCalendars } from "@/stores/calendars";

import { formatDate } from "@/tools/functions";
import { arrayEquals } from "@/tools/array";

export default defineComponent({
  name: "Exams",
  components: { Event },

  data() {
    return {
      calendars: [] as string[],
      loading: false as boolean,
      exams: [] as Day[],
    };
  },

  async activated() {
    this.loading = true;
    const { calendars } = await getUserCalendars(currentClass.value);

    if (!arrayEquals(this.calendars, calendars)) {
      this.calendars = calendars;
      this.exams = await getExams(calendars);
    }

    this.loading = false;
  },

  methods: {
    formatDate,
  },
});
</script>
