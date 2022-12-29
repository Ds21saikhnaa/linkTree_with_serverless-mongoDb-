import mongoose from "mongoose";
import { uri } from "../handler";
export const connectDb = async () => {
  const conn = await mongoose.connect(uri);
  console.log(`MongoDB холбогдлоо : ${conn.connection.host}`);
}