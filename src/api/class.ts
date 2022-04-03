import supabase from "./supabase";

// Exports

export { getClasses, getCalendars };

// Methods

async function getClasses() {
  const { data, error } = await supabase.from("Classes").select("name");
  return error ? [] : data.map((cls) => cls.name);
}

async function getCalendars(class_name: string): Promise<string[]> {
  let calendars = [];
  const classes = await supabase
    .from("Classes")
    .select("links")
    .eq("name", class_name);

  if (!classes.error && classes.data.length != 0) {
    const classLinks: number[] = classes.data[0].links;
    const { data, error } = await supabase
      .from("Calendars")
      .select("link")
      .in("id", classLinks);
    if (!error) calendars = data.map((cal) => cal.link);
  }

  return calendars;
}
