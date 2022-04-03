import { reactive } from "vue";

const state = reactive({
  curEvent: null as string | null,
});

function isCurrentEvent(eventId: string) {
  return state.curEvent === eventId;
}

function setCurrentEvent(eventId: string) {
  state.curEvent = eventId;
}

function clearCurrentEvent() {
  state.curEvent = null;
}

export default { isCurrentEvent, setCurrentEvent, clearCurrentEvent };
