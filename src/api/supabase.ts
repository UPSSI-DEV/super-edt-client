import { createClient } from "@supabase/supabase-js";
import config from "@/config";

const supabase = createClient(config.api_host, config.api_key);
export default supabase;
