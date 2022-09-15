<template>
  <div class="flex w-80 flex-col gap-4 overflow-hidden rounded-md bg-black p-4">
    <div class="-m-4 mb-0 bg-gray p-4">{{ t.name }}</div>
    <div
      class="flex items-center gap-4"
      v-for="[p_name, p_type] in Object.entries(t.params)"
    >
      <vue-feather :type="typeIcon(p_type)" size="20" />
      <p v-html="listReplace(p_name)"></p>
    </div>
  </div>
</template>

<script setup lang="ts">
import VueFeather from "vue-feather";
import { Type, ParamType } from "@/types/admin";

const props = defineProps<{ t: Type }>();

const icons = {
  number: "hash",
  string: "type",
  boolean: "toggle-left",
  date: "calendar",
  uid: "key",
  object: "box",
};

const typeIcon = (t: ParamType) => icons[t];
const listReplace = (name: string) =>
  name.replace("[]", '<span class="text-red-400">[]</span>');
</script>

<style scoped></style>
