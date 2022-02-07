<template>
  <div class="w-full rounded-md text-white text-left p-3 font-mono" :class="background">
      <h3>{{ $props.event.name }}</h3>
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import { CalEvent } from "@/api"

type IHash = {
    [details: string]: string
}

export default Vue.extend({
    props: {
        event: {
            type: Object as () => CalEvent,
            required: true
        }
    },
    computed: {
        background(): string {
            const colorClasses: IHash = {
                "other": "bg-primary-light",
                "cm": "bg-primary-base",
                "td": "bg-primary-base",
                "tp": "bg-primary-dark"
            }
            const bgClass = colorClasses[this.event.type];

            return bgClass;
        }
    }
})
</script>

<style>

</style>