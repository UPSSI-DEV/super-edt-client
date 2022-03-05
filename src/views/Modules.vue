<template>
  <div class="flex flex-col gap-3 mb-5">
    <div
      v-for="[ue, moduleList] in Object.entries(modules)"
      :key="ue"
      class="flex flex-col gap-3"
    >
      <h2>UE {{ ue }}</h2>
      <Module v-for="mod in moduleList" :key="mod.name" :module="mod" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { getModules, ModuleReturn } from "@/api";
import Module from "@/components/Module.vue";

export default defineComponent({
  components: { Module },
  data() {
    return {
      modules: getModules() as ModuleReturn,
    };
  },
});
</script>
