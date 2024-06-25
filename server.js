import "express-async-errors";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import cloudinary from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

// .env file config
import * as dotenv from "dotenv";
dotenv.config();

// express
import express from "express";
const app = express();
app.use(express.json());
app.use(cookieParser());

// Morgan - Logging
import morgan from "morgan";
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
//middleware
import errorHandlerMiddleware from "./middleware/errorHandlerMiddleware.js";
import { authenticateUser } from "./middleware/authMiddleware.js";

import { dirname } from "path";
import { fileURLToPath } from "url";
import path from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(express.static(path.resolve(__dirname, "./public"))); //Static files

// Routers
import jobRouter from "./routes/jobRouter.js";
import authRouter from "./routes/authRouter.js";
import userRouter from "./routes/userRouter.js";
app.use("/api/v1/jobs", authenticateUser, jobRouter);
app.use("/api/v1/users", authenticateUser, userRouter);
app.use("/api/v1/auth", authRouter);

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./public", "index.html"));
});

app.use("*", (req, res) => {
  res.status(404).json({ msg: "not found" });
});

app.use(errorHandlerMiddleware);

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({ msg: "internal server error" });
});

const port = process.env.PORT || 5100;

try {
  await mongoose.connect(process.env.MONGO_URL);
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
} catch (error) {
  console.log(error);
  process.exit(1);
}
