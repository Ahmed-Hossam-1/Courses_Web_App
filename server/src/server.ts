import express from "express";
import { connectDB } from "./config/dbConnection";
import mongoose from "mongoose";
import path from "path";
const app = express();
const PORT = process.env.PORT || 5000;
connectDB();
app.use(express.json());

mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
mongoose.connection.on("error", (err) => {
  console.log(err);
});
