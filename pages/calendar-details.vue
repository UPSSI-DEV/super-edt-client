<template>
  <nuxt-layout name="details" title="Communication des systèmes">
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
  </nuxt-layout>
</template>

<script setup lang="ts">
import VueFeather from "vue-feather";
</script>
