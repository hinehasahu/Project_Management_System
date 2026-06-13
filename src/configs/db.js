import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export const ConnectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to MongoDB.");
  } catch (error) {
    // console.log("Failed to connect MongoDB.")
    console.log(error.message);
  }
};
