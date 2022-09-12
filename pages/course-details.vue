<template>
  <div>
    <header class="flex items-center gap-4 px-4 py-6">
      <nuxt-link to="/calendar" class="grid place-items-center">
        <vue-feather type="arrow-left" />
      </nuxt-link>
      <h3>Communication des systèmes</h3>
    </header>

    <main class="flex flex-col gap-4 p-4">
      <p>Détails</p>
      <div class="block opacity-50">
        <!-- TIME -->
        <div class="mb-4 flex gap-4">
          <vue-feather type="clock" size="16" />
          <p class="text-xs">13h30 - 15h30</p>
        </div>

        <!-- TEACHER -->
        <div class="mb-4 flex gap-4">
          <vue-feather type="user" size="16" />
          <p class="text-xs">Julien VANDERSTRATEN</p>
        </div>

        <!-- PLACE -->
        <div class="flex gap-4">
          <vue-feather type="map-pin" size="16" />
          <p class="text-xs">U3 Salle 108</p>
        </div>
      </div>

      <Detail :link="true" />
    </main>
  </div>
</template>

<script setup lang="ts">
import VueFeather from "vue-feather";
</script>
