<template>
  <teleport to="#app">
    <div
      v-if="shouldShowModal"
      @click="shouldShowModal = false"
      class="absolute bottom-0 top-0 left-0 right-0 z-40 bg-black bg-opacity-70"
    >
      <teleport to="#router">
        <div
          class="pointer-events-none absolute top-0 left-0 right-0 bottom-0 z-50 grid place-items-center p-3"
        >
          <div
            class="pointer-events-auto rounded-lg bg-bg p-3 text-center"
            :style="widthStyle"
          >
            <h3
              class="mb-3 border-b-2 border-bg-secondary py-3 font-bold"
              v-if="title"
            >
              {{ title }}
            </h3>
            <slot></slot>
          </div>
        </div>
      </teleport>
    </div>
  </teleport>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Modal",

  props: {
    title: { type: String },
    width: { type: String, default: "auto" },
  },

  data() {
    return {
      shouldShowModal: false as boolean,
    };
  },

  methods: {
    showModal() {
      this.shouldShowModal = true;
    },

    hideModal() {
      this.shouldShowModal = false;
    },
  },

  computed: {
    widthStyle() {
      return `width: ${this.width};`;
    },
  },
});
</script>
