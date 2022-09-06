import supabase from "./supabase";
import config from "@/config";

/* Exports */
export { postFeedback, getFeedback, Feedback };

/* Methods */
async function postFeedback(feedback: string): Promise<boolean> {
  const { error } = await supabase.from("Feedback").insert({
    date: new Date().toUTCString(),
    version: config.version,
    feedback: feedback,
  });

  return error == null;
}

async function getFeedback(): Promise<Feedback[]> {
  const { data, error } = await supabase.from<Feedback>("Feedback").select("*");
  return error ? [] : data;
}

interface Feedback {
  date: Date;
  version: string;
  feedback: string;
}
