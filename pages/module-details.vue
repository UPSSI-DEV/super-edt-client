<template>
  <div>
    <header class="flex items-center gap-4 px-4 py-6">
      <nuxt-link to="/modules" class="grid place-items-center">
        <vue-feather type="arrow-left" />
      </nuxt-link>
      <h3>Gestion de projet</h3>
    </header>

    <main class="flex flex-col gap-4 p-4">
      <p>Prof(s)</p>
      <div class="block text-xs" v-for="i in new Array(2)">
        <!-- TEACHER -->
        <div class="mb-2 flex gap-2 opacity-50">
          <vue-feather type="user" size="16" />
          <p>Julien VANDERSTRATEN</p>
        </div>
        <p class="ml-6 text-primary-light">julien.pinquier@irit.fr</p>
      </div>

      <Detail :link="false" />
      <Detail :link="false" />
    </main>
  </div>
</template>

<script setup lang="ts">
import VueFeather from "vue-feather";
</script>
