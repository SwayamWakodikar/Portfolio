import express from "express";
import cors from "cors";
import userRouter from "./routes/userRoute.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(cors());
//using express.json() to render the json data received from the frontend
app.use(express.json());
//using the routes
app.use("/api", userRouter);
//shows that the server is running or not
app.listen(PORT, () => {
  console.log("Server Running");
});
