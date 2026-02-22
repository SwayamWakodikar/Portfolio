import { supabaseClient } from "../config/supabaseClient.js";
import { Contact } from "../model/userModel.js";
import nodemailer from "nodemailer";
import dns from "dns";

dns.setDefaultResultOrder("ipv4first");

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

        // Setup Nodemailer transporter
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        // 1. Email to the Portfolio Owner (You)
        const ownerMailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            subject: `New Portfolio Contact from ${name}`,
            html: `
                <h3>New message from your portfolio website!</h3>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong></p>
                <p>${message}</p>
            `,
        };

        // 2. Email to the User (Auto-reply)
        const userMailOptions = {
            from: process.env.EMAIL_USER,
            to: email, // Address provided in the form
            subject: 'Thank you for reaching out!',
            html: `
                <h3>Hello ${name},</h3>
                <p>Thank you for reaching out! I have received your message and will get back to you as soon as possible.</p>
                <br>
                <p>Best Regards,</p>
                <p>Swayam Wakodikar</p>
            `,
        };

        // Send both emails
        await transporter.sendMail(ownerMailOptions);
        await transporter.sendMail(userMailOptions);
        console.log("Emails sent successfully!");

        res.status(201).json({ message: "Data received successfully!" });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};