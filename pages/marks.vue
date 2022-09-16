<template>
  <nuxt-layout name="nav" class="flex flex-col">
    <!-- NAV BAR -->
    <div class="-m-4 mb-0 grid grid-cols-2">
      <h3
        class="nav-item"
        :class="{ active: isActive('marks') }"
        @click="setActive('marks')"
      >
        Notes
      </h3>
      <h3
        class="nav-item"
        :class="{ active: isActive('report') }"
        @click="setActive('report')"
      >
        Rapports
      </h3>
    </div>

    <!-- MARK CONTENT -->
    <div class="col" v-show="isActive('marks')">
      <div class="text-base font-semibold text-primary">Dernière notes</div>
      <Mark :mark="mark_list[0]" />
      <hr class="line" />
      <Mark v-for="mark in mark_list.slice(1)" :mark="mark" />
    </div>

    <!-- REPORT CONTENT -->
    <div class="col" v-show="isActive('report')">
      <section class="flex justify-between gap-4">
        <Select
          class="flex-grow"
          :options="select_options"
          v-model="selected_semester"
          @update:model-value="ping()"
        />

        <div
          class="grid aspect-square place-items-center rounded-lg bg-primary p-4 text-lg"
        >
          <vue-feather type="download"></vue-feather>
        </div>
      </section>

      <section class="card block">
        <p class="mb-4 text-center text-xl">Moyenne Générale</p>
        <div class="mb-4 text-center text-xl">
          <span class="font-semibold text-primary">15.25</span>
          <span>/20</span>
        </div>

        <div class="flex place-items-center justify-between">
          <p>0</p>
          <div class="mx-2 h-1 w-full rounded bg-white">
            <div class="relative left-10 h-1 w-2/3 bg-primary-light"></div>
            <!-- Circle -->
            <div
              class="relative -top-2.5 left-2/4 h-4 w-4 rounded-full bg-primary"
            >
              <div
                class="relative left-8 h-4 w-1 rounded-full bg-primary-light"
              ></div>
            </div>
          </div>
          <p>20</p>
        </div>
      </section>

      <section v-for="i in new Array(3)">
        <div class="flex flex-col gap-4">
          <h3>UE 61 - SHS, Langues 2</h3>
          <Mark v-for="mark in mark_list" :mark="mark" />
        </div>
      </section>
    </div>
  </nuxt-layout>
</template>

<script setup lang="ts">
import VueFeather from "vue-feather";
import { Mark as T_Mark } from "@/types";

type NavOptions = "marks" | "report";
const active = ref<NavOptions>("report");

const setActive = (item: NavOptions) => (active.value = item);
const isActive = (item: NavOptions) => active.value == item;

const selected_semester = ref("");
const select_options = {
  "Semestre 5": "5",
  "Semestre 6": "6",
};

const ping = () => console.log(selected_semester.value);

const mark_list: T_Mark[] = [
  {
    name: "Anglais - Présentation",
    mark: 13.5,
    min: 9.5,
    avg: 11,
    max: 18,
  },
  {
    name: "EPS",
    mark: 15,
    min: 12.0,
    avg: 15,
    max: 20,
  },
  {
    name: "SHS",
    mark: 14.25,
    min: 8.0,
    avg: 12,
    max: 18,
  },
  {
    name: "Modélisation",
    mark: 8.25,
    min: 8.0,
    avg: 10.75,
    max: 18,
  },
  {
    name: "Estimation",
    mark: 4,
    min: 4,
    avg: 7,
    max: 13,
  },
];
</script>

<style scoped>
.nav-item {
  @apply grid place-content-center p-4;
}

.active {
  @apply border-b-2 border-primary text-primary;
}

.col {
  @apply -m-4 flex flex-grow flex-col gap-4 overflow-y-scroll p-4;
}
</style>
