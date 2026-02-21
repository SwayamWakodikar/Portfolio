import express from "express";
import { saveContact } from "../controller/userInput.js";
import { getMessages, getViews, incrementViews } from "../controller/adminController.js";

//defined a router
const router=express.Router();

//since the contact is a post type request therefore defining a post 
router.post("/contact",saveContact);

// Admin routes
router.get("/admin/messages", getMessages);

//exporting router to import this in the app.js
export default router;
