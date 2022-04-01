import supabase from "./supabase";
import config from "@/config";

/* Exports */
export { postFeedback };

/* Methods */
async function postFeedback(feedback: string): Promise<boolean> {
  const { error } = await supabase.from("Feedback").insert({
    date: new Date().toUTCString(),
    version: config.version,
    feedback: feedback,
  });

  return error == null;
}
