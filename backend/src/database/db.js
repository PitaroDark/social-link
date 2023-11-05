`use strict`;
import mongoose from "mongoose";

export const connect = async () => {
  const urlMongo = `mongodb://localhost:4003/social-link`;
  try {
    await mongoose.connect(urlMongo);
    console.log("Database is connected...");
  } catch (error) {
    console.error("ERROR TO CONNECT DATABASE -> ", error);
  }
};
