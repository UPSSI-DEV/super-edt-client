<script setup lang="ts">
import TypeVue from "@/components/type.vue";
import { Type } from "~~/types/admin";

const types: Type[] = [
  {
    name: "Event",
    params: {
      id: "uid",
      name: "string",
      teacher_id: "uid",
      module_id: "uid",
      start_date: "date",
      end_date: "date",
    },
  },
  {
    name: "Module",
    params: {
      id: "uid",
      name: "string",
      code: "string",
      module_group: "string",
      "teacher_ids[]": "uid",
      "resources[]": "object",
    },
  },
  {
    name: "Mark",
    params: {
      id: "uid",
      name: "string",
      mark: "number",
      min: "number",
      avg: "number",
      max: "number",
    },
  },
  {
    name: "User",
    params: {
      id: "uid",
      name: "string",
      social_token: "string",
      student_id: "string",
      class_id: "object",
    },
  },
  {
    name: "Class",
    params: {
      id: "uid",
      name: "string",
      "links[]": "string",
    },
  },
  {
    name: "Teacher",
    params: {
      id: "uid",
      name: "string",
      mail: "string",
      "aliases[]": "string",
    },
  },
  {
    name: "Resource",
    params: {
      id: "uid",
      name: "string",
      link: "string",
    },
  },
  {
    name: "Calendar",
    params: {
      id: "uid",
      name: "string",
      link: "string",
    },
  },
];
</script>

<template>
  <div class="main grid h-full place-items-center bg-neutral-900">
    <div class="grid grid-cols-4 gap-6">
      <TypeVue v-for="t in types" :t="t" />
    </div>
  </div>
</template>

<style scoped>
@font-face {
  font-family: "Jetbrains";
  src: url("@/assets/jetbrains-mono.woff2");
}

.main {
  font-family: "Jetbrains";
}
</style>
