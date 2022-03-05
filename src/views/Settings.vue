<template>
  <div>
    <Theme />
    <Xfree />

    <hr class="my-3 w-full border-b border-gray-100" />

    <Setting name="About us" icon="info" />
    <Beta />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Theme from "@/components/settings/Theme.vue";
import Xfree from "@/components/settings/Xfree.vue";
import Setting from "@/components/settings/Setting.vue";
import Beta from "@/components/settings/Beta.vue";

export default defineComponent({
  components: { Theme, Xfree, Setting, Beta },
  name: "Settings",
});
</script>
