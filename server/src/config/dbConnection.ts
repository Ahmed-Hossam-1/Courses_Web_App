import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config(); // to read .env file

export const connectDB = async () => {
  const uri = process.env.DATABASE_URI || "";
  try {
    await mongoose.connect(uri);
  } catch (err) {
    console.log(err);
  }
};
