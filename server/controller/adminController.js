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

export const getViews = async (req, res) => {
    try {
        const { data, error } = await supabaseClient
            .from('Views')
            .select('*')
            .single();
        
        if (error && error.code !== 'PGRST116') throw error;
        
        res.status(200).json(data || { count: 0 });
    } catch (error) {
        console.error("Supabase Error:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

export const incrementViews = async (req, res) => {
    try {
        const { data: current, error: getError } = await supabaseClient
            .from('Views')
            .select('count')
            .single();

        if (getError && getError.code !== 'PGRST116') throw getError;

        const newCount = (current?.count || 0) + 1;

        const { data, error } = await supabaseClient
            .from('Views')
            .upsert({ id: 1, count: newCount })
            .select();

        if (error) throw error;
        res.status(200).json(data);
    } catch (error) {
        console.error("Supabase Error:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}
