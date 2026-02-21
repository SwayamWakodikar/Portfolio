import { supabaseClient } from "../config/supabaseClient.js";

export const getMessages = async (req, res) => {
    try {
        const { data, error } = await supabaseClient
            .from('Contact')
            .select('*')
            .order('created_at', { ascending: false });
        
        if (error) throw error;
        
        res.status(200).json(data);
    } catch (error) {
        console.error("Supabase Error:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}
