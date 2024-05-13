import mongoose from "mongoose";

export async function connect() {
  try {
    mongoose.connect(process.env.MONGO_URL!);
    // ! mark gives 100% garantee that MONGO_URL is come here and it has type string
    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("MongoDB connected");
    });
    connection.on("error", (error) => {
      console.log("MongoDB connection error", error);
      process.exit();
    });
  } catch (error) {
    console.log("Something went wrong while connecting db");
    console.log(error);
  }
}
