import mongoose from "mongoose";

export const connectToDatabase = async (database_URI: string) => {
  try {
    await mongoose.connect(database_URI);
    console.log("Connected to MongoDb");
  } catch (error) {
    console.error(error);
  }
};
