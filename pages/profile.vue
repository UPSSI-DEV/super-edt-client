<template>
  <nuxt-layout name="details" title="Paramètres">
    <section class="flex items-center gap-4">
      <div class="grid h-24 w-24 place-items-center rounded-lg bg-gray p-2">
        <vue-feather type="user" size="64" />
      </div>
      <div>
        <h3>{{ user.name }}</h3>

        <div class="mt-2 flex items-center gap-2">
          <img :src="img(user.social.provider)" class="h-4" alt="" />
          <p>{{ user.social.tag }}</p>
        </div>
      </div>
    </section>

    <hr class="line" />

    <section class="list">
      <div class="flex items-center justify-between">
        <h3>Mes données personnelles</h3>
        <vue-feather type="edit-3" />
      </div>

      <p class="card gap-1">
        Numéro étudiant:
        <span class="font-semibold text-primary">{{ user.student_id }}</span>
      </p>

      <p class="card gap-1">
        Classe:
        <span class="font-semibold text-primary">{{ user.class }}</span>
      </p>
    </section>

    <hr class="line" />

    <section class="list">
      <div
        class="flex items-center justify-between"
        @click="show_danger = !show_danger"
      >
        <h3>Danger zone</h3>
        <vue-feather :type="show_img" />
      </div>

      <div v-show="show_danger" class="list">
        <div class="card">
          <vue-feather type="log-out" />
          <p>Se déconnecter</p>
        </div>

        <div class="card border-2 border-error">
          <vue-feather type="trash-2" />
          <p>Supprimer le compte</p>
        </div>
      </div>
    </section>
  </nuxt-layout>
</template>

<script setup lang="ts">
import VueFeather from "vue-feather";

const show_danger = ref(false);
const show_img = computed(() =>
  show_danger.value ? "chevron-up" : "chevron-down"
);

type Provider = "discord" | "google";

const img = (provider: Provider) =>
  `../assets/images/providers/${provider}.png`;

const user = {
  name: "Guillaume Roussin",
  social: {
    provider: "discord" as Provider,
    tag: "FrenchFry#1234",
  },
  student_id: "22108939",
  class: "SRI 1A",
};
</script>

<style scoped>
.list {
  @apply flex flex-col gap-4;
}
</style>
