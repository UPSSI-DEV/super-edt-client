import { computedEager } from "@vueuse/core";
import supabase from "./supabase";

// Exports

export { getWeek, getNextLesson, getExams };
export { Day, CalEvent, EventType };

// Functions

async function getWeek(calendars: string[]): Promise<Day[]> {
  const [monday, saturday] = getWeekDates();

  const { data, error } = await supabase
    .from<SupabaseEvent>("Events")
    .select("*")
    .in("origin", calendars)
    .gte("start_time", monday)
    .lt("end_time", saturday);

  return error ? [] : partition(formatEvents(data));
}

async function getNextLesson(calendars: string[]): Promise<CalEvent | null> {
  const now = new Date().toUTCString();
  const { data, error } = await supabase
    .from<SupabaseEvent>("Events")
    .select("*")
    .in("origin", calendars)
    .gte("end_time", now);

  return error || data.length == 0 ? null : formatEvents([data[0]])[0];
}

async function getExams(calendars: string[]): Promise<Day[]> {
  const { data, error } = await supabase
    .from<SupabaseEvent>("Events")
    .select("*")
    .eq("type", "exam")
    .in("origin", calendars)
    .gte("end_time", new Date().toUTCString())
    .neq("summary", "**EXAMEN** 1/3 TEMPS");
  return error ? [] : partition(formatEvents(data));
}

// Helper methods

function getWeekDates() {
  const now = new Date();
  now.setHours(0, 0, 0, 0);

  const getWeekdayDate = (day_num: number) => {
    let diff = now.getDate() - now.getDay() + day_num;
    return new Date(now.setDate(diff)).toUTCString();
  };

  return [getWeekdayDate(1), getWeekdayDate(6)];
}

function formatEvents(events: SupabaseEvent[]): CalEvent[] {
  return events
    .map((evt) => ({
      name: evt.summary,
      type: evt.type,
      time: {
        start: new Date(evt.start_time),
        end: new Date(evt.end_time),
      },
      code: evt.code,
      room: evt.room ?? "Hors salle",
      teacher: evt.teacher ?? "Julian le bébou",
    }))
    .filter((evt) => ![0, 6].includes(evt.time.start.getDay())); // Remove all events that occur on a week-end
}

// Partition according to event day
function partition(events: CalEvent[]): Day[] {
  const days: DayHashMap = {};
  for (const evt of events) {
    const date = evt.time.start.toLocaleDateString();
    if (days[date] == undefined) days[date] = { day: date, events: [] };
    days[date].events.push(evt);
  }

  return Object.values(days);
}

// Types

interface Day {
  day: string;
  events: CalEvent[];
}

interface DayHashMap {
  [index: string]: Day;
}

interface CalEvent {
  name: string;
  type: EventType;
  time: {
    start: Date;
    end: Date;
  };
  room: string;
  teacher: string;
  code: string | null;
}

interface SupabaseEvent {
  summary: string;
  start_time: string;
  end_time: string;
  origin: string;

  type: EventType;
  code: string | null;

  teacher: string | null;
  room: string | null;
}

type EventType = "cm" | "td" | "tp" | "exam" | "other";
