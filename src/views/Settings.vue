<template>
  <div>
    <Theme />

    <hr class="h-bar" />

    <Class />
    <Xfree />

    <hr class="h-bar" />

    <Setting name="À propos de nous" icon="info" />
    <Feedback />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Theme from "@/components/settings/Theme.vue";
import Xfree from "@/components/settings/Xfree.vue";
import Setting from "@/components/settings/Setting.vue";
import Feedback from "@/components/settings/Feedback.vue";
import Class from "@/components/settings/Class.vue";

export default defineComponent({
  components: { Theme, Xfree, Setting, Feedback, Class },
  name: "Settings",
});
</script>

<style socped>
.h-bar {
  @apply my-3 w-full border-b border-gray-200;
}
</style>
