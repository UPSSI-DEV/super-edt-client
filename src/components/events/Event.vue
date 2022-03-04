<template>
  <div
    class="p-3 w-full text-left text-white rounded-md"
    :class="background"
    @click="setCurrent()"
  >
    <h3>{{ event.name }}</h3>
    <Detail icon="clock" :desc="time" :class="{ 'mt-2': showDetails }" />
    <div v-if="showDetails">
      <Detail icon="map-pin" :desc="event.room" />
      <Detail icon="user" :desc="event.teacher" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { CalEvent } from "@/api";
import moment from "moment";
import Detail from "../Detail.vue";
import { v4 as unique_id } from "uuid";

type IHash = {
  [details: string]: string;
};

export default Vue.extend({
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
      const commitData =
        this.$store.getters.curEvent == this.id ? null : this.id;
      this.$store.commit("setCurrent", commitData);
    },
  },

  computed: {
    time(): string {
      const hm = (x: Date) => moment(x).format("HH:mm");
      return `${hm(this.event.time.start)} - ${hm(this.event.time.end)}`;
    },

    showDetails(): boolean {
      return this.$store.getters.curEvent == this.id;
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
