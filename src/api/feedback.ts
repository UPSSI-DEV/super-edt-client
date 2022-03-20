import config from "@/config";

/* Exports */
export { postFeedback };

/* Methods */
async function postFeedback(feedback: string): Promise<boolean> {
  const url = `${config.api_root}/feedback?feedback=${feedback}`;
  console.log("root api:", config.api_root, "url:", url);
  const result = await fetch(url, {
    method: "POST",
  }).then((res) => res.json());

  return result.success;
}
