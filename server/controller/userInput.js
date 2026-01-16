import { supabaseClient } from "../config/supabaseClient.js";

export const saveContact = async (req, res) => {
    try {
        const { name, email, message } = req.body;
        console.log("Received data:", { name, email, message });

        const { data, error } = await supabaseClient
            .from('Contact')
            .insert([{ Name: name, email: email, Message: message }]);
        
        if (error) throw error;
        
        console.log("Data saved successfully:", { name, email, message });
        res.status(201).json({ message: "Data received successfully!" });
    } catch (error) {
        console.error("Supabase Error:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}