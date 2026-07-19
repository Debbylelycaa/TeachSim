import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

console.log("URL:", supabaseUrl);
console.log("KEY:", supabaseAnonKey);

if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error("Supabase URL/Key belum diisi di file .env");
}

export const supabase = createClient(
    supabaseUrl,
    supabaseAnonKey
);

/**
 * Logout user
 */
export async function logout() {
    const { error } = await supabase.auth.signOut();

    if (error) {
        console.error("Logout gagal:", error);
        throw error;
    }

    window.location.href = "/login";
}

/**
 * get active session
 */
export async function getSession() {
    const {
        data: { session },
    } = await supabase.auth.getSession();

    return session;
}

/**
 * get current user
 */
export async function getCurrentUser() {
    const {
        data: { user },
    } = await supabase.auth.getUser();

    return user;
}

