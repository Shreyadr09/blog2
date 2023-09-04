import express from "express";
import cors from "cors";
import morgan from "morgan";
import connectDB from "../backend/config/db";
import dotenv from "dotenv";

dotenv.config();

import userRoutes from "./routes/userRoutes";
import blogRoutes from "./routes/blogRoutes";

connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/api/v1/user", userRoutes);
app.use("/api/v1/blog", blogRoutes);


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(
    `Server Running on ${process.env.DEV_MODE} mode port no ${PORT}`);
});