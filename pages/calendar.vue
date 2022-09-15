<template>
  <nuxt-layout name="nav">
    <div v-for="day in days" class="flex flex-col gap-4">
      <h3>{{ day_date(day) }}</h3>

      <div v-for="i in new Array(rand())">
        <Event :event="event" />
      </div>
    </div>

    <!-- <template #fallback>
        <div v-for="i in new Array(5)" class="flex flex-col gap-4">
          <h3 class="skeleton-text w-32 opacity-50">h</h3>
          <Event v-for="i in new Array(rand())" />
        </div>
      </template> -->
  </nuxt-layout>
</template>

<script setup lang="ts">
import dayjs from "dayjs";
import { T_Event, T_EventType } from "~~/types";

const day_date = (day: Date) => {
  const diff = day.getDate() - new Date().getDate();
  if (diff == 0) return "Aujourd'hui";
  if (diff == 1) return "Demain";
  return dayjs(day).format("DD MMMM");
};

/* DUMMY DATA */

const rand = () => 2 + Math.floor(Math.random() * 2);

const days = new Array(5)
  .fill(dayjs())
  .map((v, i) => v.add(i, "days").toDate());

const event: T_Event = {
  lesson_type: T_EventType.TD,
  name: "Communication des systèmes",
  times: {
    start: new Date(),
    end: dayjs().add(2, "hours").toDate(),
  },
  room: "U3 salle 109",
};
</script>
