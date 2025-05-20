import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conntion = await mongoose.connect(process.env.MONGO_URL);
    console.log(`MongoDB Connected : ${conntion.connection.host}`);
  } catch (error) {
    console.log("Error in connecting to MongoDb", error);
    process.exit(1); // 1 means failure
  }
};
