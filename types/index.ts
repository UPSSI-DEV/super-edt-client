type T_Event = {
  lesson_type: T_EventType;
  name: string;
  times: {
    start: Date;
    end: Date;
  };
  room: string;
};

enum T_EventType {
  CM,
  TD,
  TP,
  EXAMEN,
  AUTRE,
}

type T_UpcomingExam = {
  subject: string;
  time: Date;
  room: string;
};

export { T_Event, T_EventType, T_UpcomingExam };
