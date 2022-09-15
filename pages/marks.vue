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
      <Mark />
      <hr class="line" />
      <Mark v-for="i in new Array(9)" />
    </div>

    <!-- REPORT CONTENT -->
    <div class="col" v-show="isActive('report')">
      <section class="flex justify-between">
        <div class="grow pr-4">
          <div class="input flex items-center justify-between">
            <p>Semestre 5</p>
            <vue-feather type="chevron-down"></vue-feather>
          </div>
        </div>

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
          <Mark v-for="i in new Array(3)" />
        </div>
      </section>
    </div>
  </nuxt-layout>
</template>

<script setup lang="ts">
import VueFeather from "vue-feather";

type NavOptions = "marks" | "report";
const active = ref<NavOptions>("marks");

const setActive = (item: NavOptions) => (active.value = item);
const isActive = (item: NavOptions) => active.value == item;
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
