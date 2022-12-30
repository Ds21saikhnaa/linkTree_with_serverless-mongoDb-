import mongoose from "mongoose";
import { uri } from "../functions/handler";
export const connectDb = async() => {
  await mongoose.connect("mongodb+srv://dashmandalsaikhanbileg:amazon@testamazon.4lbhbua.mongodb.net/?retryWrites=true&w=majority", () => {
    console.log(`MongoDB холбогдлоо`);
  });
}