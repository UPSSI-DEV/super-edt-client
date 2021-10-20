<template>
  <div id="main">
    <super-nav-bar></super-nav-bar>
    <div class="main-content">
      <router-view :data="events" :key="rerender"></router-view>
    </div>
  </div>
</template>

<script>
import SuperNavBar from '@/components/SuperNavBar.vue'

export default {
  name: 'App',
  components: { SuperNavBar },

  data() {
    return {
      api_url: this.$env('API_ROOT'),
      rerender: false,
      events: {}//require('./static/events.json')
    }
  },

  created() {
    // Very trashy item filtering to remove dayLong events. MUST BE CHANGED !!!
    fetch(this.api_url + '/events/week').then(x => x.json()).then(res => {
      const resIndexes = Object.keys(res)
      for(const i of resIndexes) {
        const subKeys = Object.keys(res[i])
        for(const j of subKeys) {
          res[i][j] = res[i][j].filter(x => {
            const ts = t => new Date(t).toDateString()
            return !ts(x.start).localeCompare(ts(x.end))
          })
        }
      }
      
      console.log("hi")
      this.events = res
      this.rerender = true
    })
  }
}

</script>

<style>

@import './static/theme/theme.css';

html {
  height: 100%;
}

body {
  margin: 0;
  width: 100vw;
  min-height: 100%;
  overflow-x: hidden;

  /*display: grid;
  place-items: center;*/
}

#main {
  max-width: 100vw;
  min-height: 100vh;
  
  display: grid;
  grid-template-rows: auto 1fr;
}

.main-content {
  padding: var(--space-2);
  box-sizing: border-box;

  width: 100vw;
  height: 100%;
  
  display: grid;
  place-items: center;
}

</style>
