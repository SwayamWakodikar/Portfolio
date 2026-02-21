import { supabaseClient } from "../config/supabaseClient.js";
import { Contact } from "../model/userModel.js";

export const saveContact = async (req, res) => {
    try {
        const { name, email, message } = req.body;
        console.log("Received data:", { name, email, message });

        // Save to MongoDB
        const contact = new Contact({ name, email, message });
        await contact.save();
        console.log("Data saved to MongoDB successfully:", { name, email, message });

        // Save to Supabase
        const { data, error } = await supabaseClient
            .from('Contact')
            .insert([{ Name: name, email: email, Message: message }]);

        if (error) {
            console.error("Supabase Error:", error);
            throw new Error("Failed to save data to Supabase");
        }

        console.log("Data saved to Supabase successfully:", { name, email, message });
        res.status(201).json({ message: "Data received successfully!" });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};