import { supabaseClient } from "../config/supabaseClient.js";
import { Contact, Views } from "../model/userModel.js";

export const getMessages = async (req, res) => {
    try {
        const messages = await Contact.find().sort({ createdAt: -1 });
        res.status(200).json(messages);
    } catch (error) {
        console.error("MongoDB Error:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

export const getViews = async (req, res) => {
    try {
        let viewDoc = await Views.findOne();
        
        if (!viewDoc) {
             viewDoc = new Views({ count: 0 });
             await viewDoc.save();
        }
        
        res.status(200).json({ count: viewDoc.count });
    } catch (error) {
        console.error("MongoDB Error:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

export const incrementViews = async (req, res) => {
    try {
        let viewDoc = await Views.findOne();

        if (!viewDoc) {
             viewDoc = new Views({ count: 1 });
        } else {
             viewDoc.count += 1;
        }

        await viewDoc.save();
        res.status(200).json({ count: viewDoc.count });
    } catch (error) {
        console.error("MongoDB Error:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}
