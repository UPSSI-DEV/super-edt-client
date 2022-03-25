import supabase from "./supabase";

// Exports

export { getCalendars, getClasses };

// Methods

async function getClasses() {
  const { data, error } = await supabase.from("Classes").select("name");
  return error ? [] : data.map((cls) => cls.name);
}

async function getCalendars(class_name: string): Promise<string[]> {
  const classes = await supabase
    .from("Classes")
    .select("links")
    .eq("name", class_name);

  if (classes.error || classes.data.length == 0) return [];

  const classLinks = classes.data[0].links;
  const { data, error } = await supabase
    .from("Calendars")
    .select("link")
    .containedBy("id", classLinks);

  return error ? [] : data.map((cal) => cal.link);
}
