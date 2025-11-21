import express from 'express';
import cors from 'cors';
const app=express();
const port=5000;
app.get('/',(req,res)=>{
    console.log("..");
})
app.listen(port,()=>{
    console.log("Server.started")
})