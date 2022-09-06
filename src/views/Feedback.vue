<template>
  <div class="flex flex-col gap-3">
    <div
      v-for="fb in feedback"
      class="border-b-2 border-bg-secondary pb-3 text-justify last:border-0 last:pb-5"
    >
      <div>{{ fb.feedback }}</div>
      <div class="mt-3 text-right text-bg-secondary">
        {{ formatDate(fb.date) }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import dayjs from "dayjs";
import { ref } from "vue";
import { Feedback, getFeedback } from "@/api";

const feedback = ref([] as Feedback[]);
const load = async () => {
  feedback.value = await getFeedback();
  feedback.value.sort((a, b) => dayjs(b.date).diff(a.date));
};
load();

const formatDate = (date: Date) => dayjs(date).format("DD MMMM YYYY - HH:mm");
</script>
