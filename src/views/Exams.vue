<template>
  <div>
    <h1
      class="mb-3 border-b-2 border-x-gray-200 text-lg font-bold"
      v-show="false"
    >
      Semestre 6
    </h1>
    <div v-for="day in exams" :key="day.day" class="mb-5 flex flex-col gap-3">
      <h3 class="text-left">{{ date(day.day) }}</h3>
      <Event v-for="ev in day.events" :key="ev.name" :event="ev" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Event from "@/components/events/Event.vue";
import { Day, getExams } from "@/api";

import moment from "moment";

import { currentClass } from "@/stores/app-state";
import { getUserCalendars } from "@/stores/calendars";

export default defineComponent({
  name: "Exams",
  components: { Event },

  data() {
    return {
      exams: [] as Day[],
    };
  },

  async activated() {
    const { calendars, change } = await getUserCalendars(currentClass.value);
    if (change || this.exams == []) {
      this.exams = await getExams(calendars);
    }
  },

  methods: {
    date(datestring: string) {
      return moment(datestring, "DD-MM-YYYY").format("dd Do MMMM");
    },
  },
});
</script>
