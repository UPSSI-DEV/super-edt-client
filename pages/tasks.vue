<template>
  <nuxt-layout name="nav">
    <div v-for="day in days" class="flex flex-col gap-4">
      <h3>{{ day_date(day) }}</h3>
      <upcoming-exam v-for="exam in exam_list" :exam="exam"></upcoming-exam>
    </div>
  </nuxt-layout>
</template>

<script setup lang="ts">
import dayjs from "dayjs";
import { UpcomingExam as T_UpcomingExam } from "~~/types";

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

const exam_list: T_UpcomingExam = [
  {
    subject: "Gestion de projet",
    time: new Date(),
    room: "Amphi Daurat",
  },
  {
    subject: "Estimation",
    time: new Date(),
    room: "U3 Salle 109",
  },
  {
    subject: "Modélisation",
    time: new Date(),
    room: "U3 Salle 109",
  },
];
</script>
