<template>
  <div id="main">
    <table-element :event="event"></table-element>
    <p>{{ api_url }}</p>
  </div>
</template>

<style>

@import './static/theme/theme.css';

html, body {
  height: 100%;
}

body {
  display: grid;
  place-items: center;
}

</style>

<script>
import TableElement from './components/timetable/TableElement.vue';

export default {
  name: 'App',
  components: { TableElement },

  data() {
    return {
      api_url: this.$env('API_ROOT'),
      
      event: {
        name: "GRAPHES",
        type: "TD"
      }
    }
  },
};

</script>
