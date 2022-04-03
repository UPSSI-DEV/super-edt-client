<template>
  <Setting icon="star" name="Classe" @click="modal.showModal()">
    <span class="font-bold">{{ selectedClass }}</span>
  </Setting>

  <Modal title="Choisissez votre classe" width="75%" ref="classModal">
    <p
      v-for="cls of classes.sort()"
      class="rounded-lg py-3 hover:bg-bg-secondary active:bg-bg-secondary"
      :class="{ 'bg-bg-secondary': isCurrent(cls) }"
      @click="setCurrent(cls)"
    >
      {{ cls }}
    </p>
  </Modal>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Setting from "./Setting.vue";
import Modal from "../Modal.vue";

import { getClasses } from "@/api";
import { currentClass } from "@/stores/app-state";

export default defineComponent({
  name: "Class",
  components: { Setting, Modal },

  data() {
    return {
      classes: [] as string[],
      selectedClass: currentClass,
    };
  },

  methods: {
    setCurrent(cls: string) {
      this.selectedClass = cls;
      this.modal.hideModal();
    },

    isCurrent(name: string): boolean {
      return this.selectedClass == name;
    },
  },

  computed: {
    modal() {
      return this.$refs["classModal"] as typeof Modal;
    },
  },

  async created() {
    this.classes = await getClasses();
  },
});
</script>
