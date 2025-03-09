import mongoose from "mongoose";
const uri =
  process.env.MONGODB_URI ||
  "mongodb+srv://jeetnakrani2002:onlineprescriptionplatform@cluster0.lbd7v.mongodb.net/OnlinePrescriptionPlatform?retryWrites=true&w=majority&appName=Cluster0";
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
