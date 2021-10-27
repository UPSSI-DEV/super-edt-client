<template>
    <div class="time-table">
      <h3 class="title">{{ title }}</h3>
      <div class="elements">
        <template v-for="day of events">
          <table-element v-for="event of day" :key="event.name" :event="event" :style="getGridPosition(day, event)" />
        </template>
      </div>
    </div>
</template>

<script>
import TableElement from './TableElement.vue'
export default {
  components: { TableElement },
  props: [ 'week', 'events' ],
  
  methods: {
    getGridPosition(day, event) {
      const col = Object.values(this.events).indexOf(day) + 1
      
      const row = day.indexOf(event) + 1
      const rowNum = (row > 2) ? row + 1 : row;

      return `--col: ${col};--row: ${rowNum};`
    }
  },

  computed: {
    title() {
      return (this.week) ? `Semaine ${this.week}` : ''
    }
  }
}
</script>

<style scoped>

  .time-table {
    width: 100%;
    box-sizing: border-box;
    max-width: 1400px;
    margin: 0 auto;
  }

  .time-table .title {
    text-align: center;
    margin-bottom: var(--space-4);
    color: var(--word);
  }

  .time-table .elements {
    overflow-x: auto;
    display: grid;
    gap: var(--space-2);
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: 3fr 3fr 1fr 3fr 3fr;

  }

  @media only screen and (max-device-width: 480px) {

    .time-table {
      display: grid;
      grid-template-rows: auto 1fr;
    }

    .time-table .title {
      margin-top: var(--space-2);
    }

  }

</style>