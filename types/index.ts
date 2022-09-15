type Event = {
  lesson_type: EventType;
  name: string;
  times: {
    start: Date;
    end: Date;
  };
  room: string;
};

type EventType = "cm" | "td" | "tp" | "exam" | "other";

type UpcomingExam = {
  subject: string;
  time: Date;
  room: string;
};

type Module = {
  name: string;
  total_progress: number;
};

type Mark = {
  name: string;
  mark: number;
  min: number;
  avg: number;
  max: number;
};

export { Mark, Module, Event, EventType, UpcomingExam };
