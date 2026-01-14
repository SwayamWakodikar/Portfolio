// server/config/supabaseClient.js
import { createClient } from "@supabase/supabase-js"; // Use standard import

const supabaseurl = process.env.SUPABASE_URL;
const supabasekey = process.env.SUPABASE_ANON_KEY;

// Optional: Add a check to help you debug in the future
if (!supabaseurl || !supabasekey) {
    console.error("Missing Supabase Env Variables!");
}

export const supabaseClient = createClient(supabaseurl, supabasekey);