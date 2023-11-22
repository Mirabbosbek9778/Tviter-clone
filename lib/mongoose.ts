import mongoose, { ConnectOptions } from "mongoose";

let isConnected: boolean = false;

export const connectToDatabase = async () => {
  mongoose.set("strictQuery", true);

  if (!process.env.MONGO_URL) {
    return console.log("MONGO_URL not Defined");
  }
  if (isConnected) {
    return;
  }

  try {
    const options: ConnectOptions = {
      dbName: "twitter-clone",
      autoCreate: true,
    };

    await mongoose.connect(process.env.MONGO_URL, options);

    isConnected = true;

    console.log("connecting to database");
  } catch (e) {
    console.log("Error connecting to database");
  }
};
