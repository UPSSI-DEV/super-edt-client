<template>
  <nuxt-layout name="nav">
    <!-- NAV BAR -->
    <div class="flex">
      <h3
        class="flex w-2/4 place-content-center pb-4"
        id="nav1"
        @click="markAction"
      >
        Notes
      </h3>
      <h3
        class="flex w-2/4 place-content-center border-b-2 border-primary pb-4 text-primary"
        id="nav2"
        @click="reportAction"
      >
        Rapports
      </h3>
    </div>

    <!-- MARK CONTENT -->
    <div class="flex flex-col gap-4" v-show="showContent == Content.Mark">
      <div class="text-base font-semibold text-primary">Dernière notes</div>
      <Mark />
      <hr class="line" />
      <Mark v-for="i in new Array(9)" />
    </div>

    <!-- REPORT CONTENT -->
    <div class="flex flex-col gap-4" v-show="showContent == Content.Report">
      <section class="flex justify-between">
        <div class="grow pr-4">
          <div class="input flex items-center justify-between">
            <p>Semestre 5</p>
            <vue-feather type="chevron-down"></vue-feather>
          </div>
        </div>

        <div class="rounded bg-primary p-4">
          <vue-feather type="download"></vue-feather>
        </div>
      </section>

      <section class="card block">
        <p class="mb-4 text-xl">Moyenne Générale</p>
        <div class="mb-4 text-xl">
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

enum Content {
  Mark,
  Report,
}
// reactive state
var showContent = ref(Content.Report);

// functions that mutate state and trigger updates
function markAction() {
  showContent.value = Content.Mark;
}

function reportAction() {
  showContent.value = Content.Report;
}
</script>

<style scoped></style>
