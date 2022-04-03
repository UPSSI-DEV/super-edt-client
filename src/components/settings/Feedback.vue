<template>
  <div>
    <Setting
      name="Un commentaire à faire ?"
      icon="message-circle"
      @click="modal.showModal()"
    />
    <Modal title="Exprimez-vous" ref="feedbackModal">
      <textarea
        @input="setFeedback($event)"
        placeholder="Vos commentaires, remarques, bugs trouvés ..."
        rows="5"
        class="w-full resize-none rounded-lg border-2 border-bg-secondary bg-bg placeholder:text-gray-400 focus:border-primary-light focus:ring-0"
      ></textarea>
      <button
        @click="sendFeedback()"
        class="float-right mt-3 w-1/3 rounded-lg bg-primary-dark py-2 px-3 text-center font-bold uppercase text-white outline-none hover:bg-primary-dark"
      >
        Send
      </button>
    </Modal>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Setting from "@/components/settings/Setting.vue";
import Modal from "@/components/Modal.vue";

import { postFeedback } from "@/api";

export default defineComponent({
  components: { Setting, Modal },

  data() {
    return {
      feedback: "" as string,
    };
  },

  methods: {
    setFeedback(event: any) {
      this.feedback = event.target.value;
    },

    sendFeedback() {
      this.modal.hideModal();
      postFeedback(this.feedback);
    },
  },

  computed: {
    modal() {
      return this.$refs["feedbackModal"] as typeof Modal;
    },
  },
});
</script>

<style></style>
