<template>
  <div class="grid items-center text-center">
    <div class="flex flex-col gap-3">
      <h1 class="text-2xl font-bold">Bienvenue à SuperEDT</h1>
      <p>Choisissez votre classe pour commencer</p>

      <hr class="border-2 border-bg-secondary" />

      <p
        v-for="cls of classes.sort()"
        class="rounded-lg bg-bg-secondary bg-opacity-60 py-3 active:bg-bg-secondary active:bg-opacity-100"
        @click="setCurrent(cls)"
      >
        {{ cls }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

import { getClasses } from "@/api";
import { currentClass } from "@/stores/app-state";

// Class loading

let classes = ref([] as string[]);
async function loadClasses() {
  console.log("ping");
  classes.value = await getClasses();
}

loadClasses();

// Router

const router = useRouter();
function setCurrent(cls: string) {
  currentClass.value = cls;
  router.push({ path: "/week" });
}
</script>
