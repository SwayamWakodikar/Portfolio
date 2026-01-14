import express from "express";
import { saveContact } from "../controller/userInput.js";
//defined a router
const router=express.Router();
//since the contact is a post type request therefore defining a post 
router.post("/contact",saveContact);
//exporting router to import this in the app.js

export default router;