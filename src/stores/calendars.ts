import { reactive } from "vue";
import { getCalendars } from "@/api";

// Exports

export { getUserCalendars };

// Methods

const state = reactive({
  class: "" as string,
  calendars: [] as string[],
});

async function getUserCalendars(class_name: string) {
  let changeOccured = false;

  if (class_name != state.class) {
    state.calendars = await getCalendars(class_name);
    state.class = class_name;
    changeOccured = true;
  }

  return { calendars: state.calendars, change: changeOccured };
}
