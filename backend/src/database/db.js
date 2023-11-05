`use strict`;
import mongoose from "mongoose";

export const connect = async () => {
  const urlMongo = process.env.MONGODB_CONNECTION_STRING;
  try {
    await mongoose.connect(urlMongo);
    console.log("Database is connected...");
  } catch (error) {
    console.error("ERROR TO CONNECT DATABASE -> ", error);
  }
};
