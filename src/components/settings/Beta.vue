<template>
  <div>
    <Setting
      name="Give some feedback"
      icon="message-circle"
      @click="launchLink()"
    />
    <div>
      <textarea :v-model="feedback"></textarea>
      <button>Send</button>
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
    };
  },

  methods: {
    launchLink() {
      window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
    },
  },
});
</script>

<style></style>
