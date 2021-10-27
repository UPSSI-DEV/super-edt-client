<template>
  <table-element :event="event" class="detailed-el" :class="isCurrent">
      <div class="extra">
        <p><feather size="16px" type="map-pin"></feather><span>{{ event.infos.room }}</span></p>
        <p><feather size="16px" type="clock"></feather><span>{{ times }}</span></p>
      </div>
     
      <div class="sidebar">
        <feather type="chevron-right" />
      </div>
  </table-element>
</template>

<script>
import TableElement from './TableElement.vue'

export default {
    name: 'DetailedTableElement',
    components: { TableElement },

    props: [ 'event' ],

    computed: {
      times: function() {
        const getTime = timestamp => {
          const date = new Date(timestamp)
          const addOs = num => (num < 10) ? '0' + num : num
          return `${addOs(date.getHours())}h${addOs(date.getMinutes())}`
        }
        return `${getTime(this.event.start)} - ${getTime(this.event.end)}`
      },

      isCurrent() {
        const now = new Date()
        const start = new Date(this.event.start)
        const end = new Date(this.event.end)

        if(now.toDateString() != end.toDateString()) return ''
        
        return ((end.getTime() - now.getTime() > 0) && (now.getTime() - start.getTime() > 0)) ? 'current' : ''
    }
    }
}
</script>

<style scoped>
  .extra > * {
    display: flex;
    align-items: center;
    gap: var(--space-1);
    margin-top: var(--space-1);
  }

  .detailed-el.current {
    position: relative;
    padding-left: calc(10% + var(--space-2));
    overflow: hidden;
  }

  .detailed-el.current .sidebar {
    display: grid;
  }
  
  .detailed-el .sidebar {
    position: absolute;
    left: 0; top: 0; bottom: 0;
    background-color: rgba(0, 0, 0, 0.2);

    width: 10%;

    display: none;
    place-items: center;
  }
</style>