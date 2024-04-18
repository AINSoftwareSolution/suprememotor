import mongoose from "mongoose";

export const connectMongoDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://daveallen9871:MgiZcgHcPUPL0dBC@cluster0.1n8eneb.mongodb.net/');
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Error connecting to MongoDB: ", error);
  }
};
