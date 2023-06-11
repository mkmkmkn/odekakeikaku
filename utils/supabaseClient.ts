import { createClient } from "@supabase/supabase-js";

export type Database = {
    id: string,
    task: string,
    created_at: string,
    order: number
};

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabaseClient = createClient<Database>(supabaseUrl, supabaseAnonKey);

export default supabaseClient;