import bcrypt from "bcryptjs";
import mongoose from "mongoose";
import User from "@/model/User";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    //check if the connection state is 1 (connected)
    if (mongoose.connection.readyState !== 1) {
      //If not, establish a new connection using await mongoose.connect
      await mongoose.connect(process.env.MONGO_URL as string);
    }
    // get email and password from AuthContext signUp function
    const { email, password } = await req.json();
    // check if user is already in database
    const existingUser = await User.findOne({ email });
    // if user is already registered then send message
    if (existingUser) {
      return new NextResponse(
        JSON.stringify({ message: "User already exists" }),
        { status: 400 }
      );
    }
    // code password
    const hashedPassword = await bcrypt.hash(password, 12);
    // create user using User schema
    const user = new User({ email, password: hashedPassword });
    // save to mongodb
    await user.save();
    // send message to frontend as user created in database
    return new NextResponse(
      JSON.stringify({ message: "User created successfully" }),
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating user:", error);
    return new NextResponse(
      JSON.stringify({ message: "Error creating user", error }),
      { status: 500 }
    );
  } finally {
    // close mongodb connection after operation
    await mongoose.connection.close();
  }
};
