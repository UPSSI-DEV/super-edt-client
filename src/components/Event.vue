<template>
  <div class="w-full rounded-md text-white text-left p-3" :class="background">
      <h3>{{ name }}</h3>
  </div>
</template>

<script>
export default {
    props: [ 'name', 'type' ],
    computed: {
        background() {
            const colorClasses = {
                other: "bg-primary-light",
                cm: "bg-primary-base",
                td: "bg-primary-base",
                tp: "bg-primary-dark"
            }
            return colorClasses[this.type] ?? colorClasses[0];
        }
    }
}
</script>

<style>

</style>