
import "./env.js"; 
import express from "express";
import cors from "cors";
import userRouter from "./routes/userRoute.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use("/api", userRouter);

app.listen(PORT, () => {
  console.log(`Server Running on port ${PORT}`);
});