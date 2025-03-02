import mongoose from "mongoose";
import dotenv from "dotenv";

// Load environment variables
dotenv.config({ path: "./.env" });

export const dbConnection = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "Volunteering_Project",
    })
    .then(() => {
      console.log("Connected to database!");
    })
    .catch((error) => {
      console.log("Some Error Occurred While Connecting To Database: ", error);
    });
};