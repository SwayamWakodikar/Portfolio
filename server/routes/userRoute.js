import {express} from "express";

const app=new express();
app.get("/",(req,res)=>{
    res.send("Hello")
})
