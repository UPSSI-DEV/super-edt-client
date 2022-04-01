<template>
  <div
    class="w-full rounded-md p-3 text-left text-white"
    :class="background"
    @click="setCurrent()"
  >
    <h3>{{ event.name }}</h3>
    <Detail icon="clock" :desc="time" /><!--:class="{ 'mt-2': showDetails }"-->
    <div v-show="false">
      <Detail icon="map-pin" :desc="event.room" />
      <Detail icon="user" :desc="event.teacher" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { CalEvent } from "@/api";
import Detail from "../Detail.vue";
import { v4 as unique_id } from "uuid";

import eventStore from "@/stores/event";
import { formatTime } from "@/tools/functions";

type IHash = {
  [details: string]: string;
};

export default defineComponent({
  components: { Detail },
  props: {
    event: {
      type: Object as () => CalEvent,
      required: true,
    },
  },

  data() {
    return {
      id: unique_id() as string,
    };
  },

  methods: {
    setCurrent() {
      if (eventStore.isCurrentEvent(this.id)) eventStore.clearCurrentEvent();
      else eventStore.setCurrentEvent(this.id);
    },
  },

  computed: {
    time(): string {
      const hm = (x: Date) => formatTime(x);
      return `${hm(this.event.time.start)} - ${hm(this.event.time.end)}`;
    },

    showDetails(): boolean {
      return eventStore.isCurrentEvent(this.id);
    },

    background(): string {
      const colorClasses: IHash = {
        other: "bg-primary-light",
        cm: "bg-primary",
        td: "bg-primary",
        tp: "bg-primary-dark",
      };
      const bgClass = colorClasses[this.event.type];

      return bgClass;
    },
  },
});
</script>

<style></style>
