import supabase from "./supabase";

/* Exports */
export { postFeedback };

/* Methods */
async function postFeedback(feedback: string): Promise<boolean> {
  const { error } = await supabase.from("Feedback").insert({
    date: new Date().toUTCString(),
    version: "1.1.0",
    feedback: feedback,
  });

  return error == null;
}
