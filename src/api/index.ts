import events from "./data/events.json";

export function getWeek(): Week[] {
  const formattedEvents: Week[] = Object.entries(events).map((x) => ({
    day: x[0],
    events: x[1].map((y) => ({
      name: y.name,
      type: y.type,
      time: {
        start: new Date(),
        end: new Date(),
      },
      room: "U3 salle 2",
      teacher: "Agnan de Bonneval",
    })),
  }));
  return formattedEvents;
}

export function getNextLesson(): CalEvent {
  const random = (x: any) => {
    const arr = Object.values(x);
    const index = Math.floor(Math.random() * arr.length);
    return arr[index];
  };
  return <CalEvent>random(random(events));
}

export interface Week {
  day: string;
  events: CalEvent[];
}

export interface CalEvent {
  name: string;
  type: string;
  time: {
    start: Date;
    end: Date;
  };
  room: string;
  teacher: string;
}
