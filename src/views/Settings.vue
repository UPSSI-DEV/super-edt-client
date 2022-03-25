<template>
  <div>
    <Theme />
    <Xfree />

    <hr class="my-3 w-full border-b border-gray-200" />

    <Setting name="About us" icon="info" />
    <Beta />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Theme from "@/components/settings/Theme.vue";
import Xfree from "@/components/settings/Xfree.vue";
import Setting from "@/components/settings/Setting.vue";
import Beta from "@/components/settings/Beta.vue";

import { getClasses } from "@/api";

export default defineComponent({
  components: { Theme, Xfree, Setting, Beta },
  name: "Settings",

  async created() {
    console.log(await getClasses());
  },
});
</script>
