<template>
  <div>
    <div
      v-if="loading"
      class="absolute top-0 left-0 right-0 bottom-0 grid place-items-center bg-bg"
    >
      <span>Loading ...</span>
    </div>

    <div v-if="nextEvent" class="mb-3 flex flex-col gap-3">
      <h3>{{ nextLessonBlurb }}</h3>
      <Event :event="nextEvent" />
      <hr class="my-1 border-b border-bg-secondary" />
    </div>

    <div v-for="day in week" :key="day.day" class="mb-5 flex flex-col gap-3">
      <h3 class="text-left capitalize">{{ formatDate(day.day) }}</h3>
      <Event v-for="ev in events(day.events)" :key="ev.name" :event="ev" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Event from "@/components/events/Event.vue";
import { Day, CalEvent, getWeek, getNextLesson } from "@/api";

import { ignoreXFree, currentClass } from "@/stores/app-state";
import { getUserCalendars } from "@/stores/calendars";

import { formatDate } from "@/tools/functions";
import { arrayEquals } from "@/tools/array";

export default defineComponent({
  components: { Event },
  name: "Week",

  data() {
    return {
      calendars: [] as string[],
      loading: false as boolean,
      week: [] as Day[],
      nextEvent: null as CalEvent | null,
    };
  },

  methods: {
    formatDate,

    events(events: CalEvent[]) {
      return events.filter((evt) => {
        let shouldKeep = true;

        if (ignoreXFree.value && evt.name.includes("Xfree")) shouldKeep = false;
        if (evt.name.includes("**EXAMEN** 1/3 TEMPS")) shouldKeep = false;

        return shouldKeep;
      });
    },
  },

  computed: {
    nextLessonBlurb(): string {
      const startTime = this.nextEvent?.time.start.getTime() ?? 0;
      return startTime < Date.now() ? "En cours" : "Prochain cours";
    },
  },

  async activated() {
    this.loading = true;
    const { calendars } = await getUserCalendars(currentClass.value);

    if (!arrayEquals(this.calendars, calendars)) {
      this.calendars = calendars;
      this.nextEvent = await getNextLesson(calendars);
      this.week = await getWeek(calendars);
    }

    this.loading = false;
  },
});
</script>
