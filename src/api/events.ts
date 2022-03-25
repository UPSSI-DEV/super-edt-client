import events from "./data/events.json";
import supabase from "./supabase";

// Exports

export { getWeek, getNextLesson };
export { Week, CalEvent };

// Functions

async function getWeek(): Promise<Week> {
  const [monday, saturday] = getWeekDates();
  console.log(monday, saturday);
  const { data, error } = await supabase
    .from<SupabaseEvent>("Events")
    .select("*")
    .gte("start_time", monday)
    .lt("end_time", saturday);
  // TODO: Add filter based on class

  return error ? [] : formatEvents(data);
}

function getWeekDates() {
  const now = new Date();
  const getWeekdayDate = (day_num: number) => {
    let diff = now.getDate() - now.getDay() + day_num;
    return new Date(now.setDate(diff)).toUTCString();
  };

  return [getWeekdayDate(1), getWeekdayDate(6)];
}

function formatEvents(events: SupabaseEvent[]): Week {
  // Convert to required format
  const formattedEvents: CalEvent[] = events.map((evt) => ({
    name: evt.summary,
    type: "td",
    time: {
      start: new Date(evt.start_time),
      end: new Date(evt.end_time),
    },
    room: "U3 salle 2",
    teacher: "Julian the GOAT",
  }));

  // Partition according to event day
  const week: DayHashMap = {};
  for (const evt of formattedEvents) {
    const date = evt.time.start.toLocaleDateString();
    if (week[date] == undefined) week[date] = { day: date, events: [] };
    week[date].events.push(evt);
  }

  return Object.values(week);
}

function getNextLesson(): CalEvent {
  const random = (x: any) => {
    const arr = Object.values(x);
    const index = Math.floor(Math.random() * arr.length);
    return arr[index];
  };
  return <CalEvent>random(random(events));
}

// Types

interface Day {
  day: string;
  events: CalEvent[];
}

interface DayHashMap {
  [index: string]: Day;
}

type Week = Day[];

interface CalEvent {
  name: string;
  type: string;
  time: {
    start: Date;
    end: Date;
  };
  room: string;
  teacher: string;
}

interface SupabaseEvent {
  summary: string;
  start_time: string;
  end_time: string;
  origin: string;
}
