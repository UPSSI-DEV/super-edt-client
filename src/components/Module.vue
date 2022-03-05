<template>
  <div
    class="p-3 w-full text-left text-white bg-primary-dark rounded-md"
    @click="clicked = !clicked"
  >
    <h3>{{ module.name }}</h3>
    <Detail :desc="module.prof" icon="user" />
    <Detail desc="Moodle" icon="bookmark" class="cursor-pointer" />
    <div v-if="clicked">
      <hr class="color-applier my-3 w-full border-b border-white" />

      <div
        class="flex items-center justify-start w-full h-3 bg-white rounded-full overflow-hidden"
      >
        <div
          v-for="prog in module.progress"
          :key="prog.name"
          class="progress-item relative h-full"
          :class="progColor(prog.name)"
          :style="progStyle(prog.percentage)"
        ></div>
      </div>

      <div class="flex items-center justify-between mt-3">
        <div
          v-for="prog in module.progress"
          :key="prog.name"
          class="flex gap-2 items-center justify-start"
        >
          <div class="w-3 h-3 rounded-full" :class="progColor(prog.name)"></div>
          <div>{{ progDesc(prog) }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { IModule, Progress } from "@/api";
import Detail from "./Detail.vue";

export default defineComponent({
  components: { Detail },

  data() {
    return {
      clicked: false as boolean,
    };
  },

  props: {
    module: {
      type: Object as () => IModule,
      required: true,
    },
  },

  methods: {
    progDesc(prog: Progress): string {
      return `${prog.name}: ${prog.percentage}%`;
    },

    progStyle(percent: number): string {
      const interpolated = (percent * 1) / 3;
      return `width: ${interpolated}%;`;
    },

    progColor(name: string): string {
      const colors: { [id: string]: string } = {
        CM: "yellow-200",
        TD: "yellow-300",
        TP: "yellow-500",
      };

      return `bg-${colors[name]}`;
    },

    launchMoodle() {
      window.open("https://moodle.univ-tlse3.fr/", "_blank");
    },
  },
});
</script>

<style>
.color-applier {
  @apply bg-yellow-200 bg-yellow-300 bg-yellow-500 bg-yellow-900;
}

.progress-item::after {
  content: "";
  @apply absolute right-0 top-0 h-full rounded-full;
  aspect-ratio: 1/1;
  transform: translateX(50%);
  z-index: 9999;
  background-color: inherit;
}
</style>
