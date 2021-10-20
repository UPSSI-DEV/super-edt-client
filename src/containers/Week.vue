<template>
  <time-table :events="events" :week="week"></time-table>
</template>

<script>
import TimeTable from '@/components/timetable/TimeTable.vue';

export default {
  name: 'Week',
  components: { TimeTable },
  props: [ 'data' ],

  data() {
    return {
      week: Object.keys(this.data)[0].slice(1),
      events: Object.values(this.data)[0]
    }
  }
  
};
</script>

<style>

</style>