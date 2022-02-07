<template>
  <div>
    <!--Event v-if="nextEvent" :event="nextEvent" class="mb-6" /-->

    <div v-for="day in week" :key="day.day" class="flex flex-col gap-2 mb-5">
      <h3 class="text-left">{{ date(day.day) }}</h3>
      <Event v-for="ev in day.events" :key="ev.name" :event="ev" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Event from "@/components/events/Event.vue";
import { Week, CalEvent, getWeek, getNextLesson } from "@/api";

import moment from "moment";

export default Vue.extend({
  components: { Event },
  name: "Week",

  data() {
    return {
      week: [] as Week[],
      nextEvent: {} as CalEvent,
    };
  },

  methods: {
    date(datestring: string) {
      return moment(datestring, "DD-MM-YYYY").format("dd Do MMMM");
    },
  },

  async created() {
    this.week = await getWeek();
    this.nextEvent = await getNextLesson();
  },
});
</script>
