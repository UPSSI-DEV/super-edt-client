<template>
  <div>
    <div v-if="nextEvent" class="mb-3 flex flex-col gap-3">
      <h3>{{ nextLessonBlurb }}</h3>
      <Event :event="nextEvent" />
      <hr class="my-1 border-b border-gray-200" />
    </div>

    <div v-for="day in week" :key="day.day" class="mb-5 flex flex-col gap-3">
      <h3 class="text-left">{{ date(day.day) }}</h3>
      <Event v-for="ev in events(day.events)" :key="ev.name" :event="ev" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Event from "@/components/events/Event.vue";
import { Day, CalEvent, getWeek, getNextLesson } from "@/api";

import { ignoreXFree } from "@/stores/app-state";
import moment from "moment";

export default defineComponent({
  components: { Event },
  name: "Week",

  data() {
    return {
      week: [] as Day[],
      nextEvent: null as CalEvent | null,
    };
  },

  methods: {
    date(datestring: string) {
      return moment(datestring, "DD-MM-YYYY").format("dd Do MMMM");
    },

    events(events: CalEvent[]) {
      return !ignoreXFree.value
        ? events
        : events.filter((evt) => !evt.name.includes("Xfree"));
    },
  },

  computed: {
    nextLessonBlurb(): string {
      const startTime = this.nextEvent?.time.start.getTime() ?? 0;
      return startTime < Date.now() ? "En cours" : "Prochain cours";
    },
  },

  async created() {
    this.week = await getWeek();
    this.nextEvent = await getNextLesson();
  },
});
</script>
