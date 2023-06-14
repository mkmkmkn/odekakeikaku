import { createClient } from "@supabase/supabase-js";

// export type Database = {
//     id: string,
//     title: string,
//     task: string,
//     time: string,
//     vehicle: string,
//     created_at: string,
//     order: number
// };

interface Database {
    graphql_public: {
      Tables: {
        [_ in never]: never
      }
      Views: {
        [_ in never]: never
      }
      Functions: {
        graphql: {
          Args: {
            operationName: string
            query: string
            variables: JSON
            extensions: JSON
          }
          Returns: JSON
        }
      }
      Enums: {
        [_ in never]: never
      }
    }
    public: {
        Tables: {
            todos: {
                Row: {
                    id: string,
                    title: string,
                    task: string,
                    time: string,
                    vehicle: string,
                    created_at: string,
                    order: number
                } // The data expected to be returned from a "select" statement.
                Insert: {
                    id: string,
                    title: string,
                    task: string,
                    time: string,
                    vehicle: string,
                    created_at: string,
                    order: number
                } // The data expected passed to an "insert" statement.
                Update: {
                    id: string,
                    title: string,
                    task: string,
                    time: string,
                    vehicle: string,
                    created_at: string,
                    order: number
                } // The data expected passed to an "update" statement.
            }
        }
    }
}

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabaseClient = createClient<Database>(supabaseUrl, supabaseAnonKey);

export default supabaseClient;