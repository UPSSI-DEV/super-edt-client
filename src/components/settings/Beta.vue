<template>
  <div>
    <Setting
      name="Give some feedback"
      icon="message-circle"
      @click="showDialog = !showDialog"
    />
    <div v-if="showDialog" class="mt-3 px-3">
      <textarea
        @input="setFeedback($event)"
        placeholder="Write your comments here ..."
        class="w-full resize-none rounded-lg border-2 border-gray-300 placeholder:text-gray-400 focus:border-primary-light focus:ring-0"
      ></textarea>
      <button
        @click="sendFeedback()"
        class="float-right mt-3 w-1/3 rounded-lg bg-primary-dark py-2 px-3 text-center font-bold uppercase text-white outline-none hover:bg-primary-dark"
      >
        Send
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Setting from "@/components/settings/Setting.vue";

export default defineComponent({
  components: { Setting },

  data() {
    return {
      feedback: "" as string,
      showDialog: false as boolean,
    };
  },

  methods: {
    launchLink() {
      window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
    },

    setFeedback(event: any) {
      this.feedback = event.target.value;
    },

    sendFeedback() {
      this.showDialog = false;
      console.log("feedback:", this.feedback);
    },
  },
});
</script>

<style></style>
