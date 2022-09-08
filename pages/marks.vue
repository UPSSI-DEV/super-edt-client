<template>
  <nuxt-layout name="nav">
    <div class="text-base font-semibold text-primary">Dernière notes</div>
    <Mark />
    <hr class="line" />
    <Mark v-for="i in new Array(9)" />
  </nuxt-layout>
</template>

<script setup lang="ts"></script>

<style scoped></style>
