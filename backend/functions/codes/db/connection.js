import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";
const uri = process.env.MONGODB_URI;
const connectdb = async () => {
  try {
    await mongoose.connect(uri);
    console.log("connected to database");
  } catch (error) {
    console.error(uri, ` failed to connect the database : ${error}`);
    process.exit(0);
  }
};

export default connectdb;
