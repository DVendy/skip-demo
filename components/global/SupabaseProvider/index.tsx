import { supabase } from "@/lib/supabaseClient";
import { createContext, useContext } from "react";

const SupabaseContext = createContext(supabase);

export const SupabaseProvider = ({ children }: { children: React.ReactNode }) => (
    <SupabaseContext.Provider value={supabase}>{children}</SupabaseContext.Provider>
);

export const useSupabase = () => {
    return useContext(SupabaseContext);
};