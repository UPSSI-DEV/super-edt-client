<template>
  <nuxt-layout name="nav">
    <div v-for="i in new Array(3)">
      <h3 class="mb-4">UE 61 - SHS , Langues 2</h3>
      <div class="row">
        <div class="column pr-2">
          <nuxt-link to="/module-details">
            <Module v-for="i in new Array(2)" :name="name1" />
          </nuxt-link>
        </div>
        <div class="column pl-2">
          <nuxt-link to="/module-details">
            <Module v-for="i in new Array(2)" :name="name2" />
          </nuxt-link>
        </div>
      </div>
    </div>
  </nuxt-layout>
</template>

<script setup lang="ts">
var name1 = "Gestion de projet";
var name2 = "SHS";
</script>

<style scoped>
.column {
  float: left;
  width: 50%;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}
</style>
