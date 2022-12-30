import mongoose from "mongoose";
require('dotenv').config({ path: './a.env' });
export const connectDb = async (url) => {
  try {
    const conn = mongoose.connect(url, {
      serverSelectionTimeoutMS: 20000
    });
    console.log(`MongoDB холбогдлоо`);
  } catch (e) {
    console.log(e);
    
  }
}