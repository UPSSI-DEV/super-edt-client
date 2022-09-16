<template>
  <nuxt-layout name="details" title="Gestion de projet">
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
  </nuxt-layout>
</template>

<script setup lang="ts">
import VueFeather from "vue-feather";
</script>
