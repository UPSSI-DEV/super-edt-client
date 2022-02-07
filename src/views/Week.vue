<template>
  <div>
    <Event v-if="nextEvent" :name="nextEvent.name" :type="nextEvent.type" class="mb-6" />

    <div v-for="day in week" :key="day.day" class="flex flex-col gap-2 mb-5">
      <h3 class="text-left">{{ date(day.day) }}</h3>
      <Event v-for="ev in day.events" :key="ev.name" :name="ev.name" :type="ev.type" />
    </div>
  </div>
</template>

<script>
import Event from '@/components/Event.vue'
import { getWeek, getNextLesson } from "@/api"

import moment from "moment"

export default {
  components: { Event },
  name: 'Week',

  data() {
    return {
      week: [],
      nextEvent: null
    }
  },

  methods: {
    date(datestring) {
      return moment(datestring, "DD-MM-YYYY").format("dd Do MMMM");
    }
  },

  async created() {
    this.week = await getWeek();
    this.nextEvent = await getNextLesson();
  }
}
</script>