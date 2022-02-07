<template>
  <div
    class="p-3 w-full text-left text-white font-mono rounded-md"
    :class="background"
    @click="showDetails = !showDetails"
  >
    <h3>{{ event.name }}</h3>
    <EventDetail icon="clock" :desc="time" :class="{ 'mt-2': showDetails }" />
    <div v-if="showDetails">
      <EventDetail icon="map-pin" :desc="event.room" />
      <EventDetail icon="user" :desc="event.teacher" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { CalEvent } from "@/api";
import moment from "moment";
import EventDetail from "./EventDetail.vue";

type IHash = {
  [details: string]: string;
};

export default Vue.extend({
  components: { EventDetail },
  props: {
    event: {
      type: Object as () => CalEvent,
      required: true,
    },
  },

  data() {
    return {
      showDetails: false as boolean,
    };
  },
  computed: {
    time(): string {
      const hm = (x: Date) => moment(x).format("HH:mm");
      return `${hm(this.event.time.start)} - ${hm(this.event.time.end)}`;
    },

    background(): string {
      const colorClasses: IHash = {
        other: "bg-primary-light",
        cm: "bg-primary-base",
        td: "bg-primary-base",
        tp: "bg-primary-dark",
      };
      const bgClass = colorClasses[this.event.type];

      return bgClass;
    },
  },
});
</script>

<style></style>
