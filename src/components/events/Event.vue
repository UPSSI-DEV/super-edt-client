<template>
  <div
    class="w-full rounded-md p-3 text-left text-white"
    :class="background"
    @click="setCurrent()"
  >
    <h3>{{ event.name }}</h3>
    <Detail icon="clock" :desc="time" :class="{ 'mt-2': showDetails }" />
    <div v-show="showDetails">
      <Detail icon="hash" :desc="event.code ?? 'No code'" />
      <!--Detail icon="map-pin" :desc="event.room" />
      <Detail icon="user" :desc="event.teacher" /-->
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { CalEvent, EventType } from "@/api";
import Detail from "../Detail.vue";
import { v4 as unique_id } from "uuid";

import eventStore from "@/stores/event";
import { formatTime, Map } from "@/tools";

const backgrounds = new Map<EventType, string>();
backgrounds.set("cm", "bg-primary");
backgrounds.set("td", "bg-primary");
backgrounds.set("tp", "bg-primary-dark");
backgrounds.set("exam", "bg-primary-dark");
backgrounds.set("other", "bg-primary-light");

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
      return backgrounds.get(this.event.type);
    },
  },
});
</script>

<style></style>
