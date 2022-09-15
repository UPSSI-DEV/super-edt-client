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

export { Module, Event, EventType, UpcomingExam };
