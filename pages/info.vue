<template>
  <div class="flex h-full flex-col gap-8 p-4">
    <div>
      <h1 class="mb-4 text-center text-xl font-bold">Bienvenue {{ name }}</h1>
      <p>
        Il nous faut quelques informations en plus afin de compléter ton compte.
      </p>
    </div>

    <div class="flex grow flex-col gap-4">
      <h3>Informations pour l'EDT</h3>

      <div class="input flex items-center justify-between">
        <p class="opacity-50">Classe</p>
        <vue-feather type="chevron-down"></vue-feather>
      </div>

      <h3>Informations pour le suivi des notes</h3>

      <input
        type="number"
        v-model="user_data.student_id"
        placeholder="Numéro étudiant (ex: 22136597)"
      />

      <input
        type="text"
        v-model="user_data.name"
        placeholder="Prénom Nom (pour le bulletin)"
      />
    </div>

    <nuxt-link to="/calendar" class="button">
      <p class="font-semibold">Valider les informations</p>
    </nuxt-link>
  </div>
</template>

<script setup lang="ts">
import VueFeather from "vue-feather";

const name = "FrenchFry";

const user_data = reactive({
  class: "",
  student_id: "",
  name: "",
});
</script>

<style scoped></style>
