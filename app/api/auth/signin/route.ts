import User from "@/model/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  //check if the connection state is 1 (connected)
  if (mongoose.connection.readyState !== 1) {
    //If not, establish a new connection using await mongoose.connect
    await mongoose.connect(process.env.MONGO_URL as string);
  }
  // get email and password from AuthContext signUp function
  const { email, password } = await req.json();

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return new NextResponse(
        JSON.stringify({ message: "Invalid email or password" }),
        { status: 401 }
      );
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return new NextResponse(
        JSON.stringify({ message: "Invalid email or password" }),
        { status: 401 }
      );
    }

    const token = jwt.sign({ userId: user._id }, process.env.NEXTAUTH_SECRET!, {
      expiresIn: "1h",
    });
    return new NextResponse(JSON.stringify({ token }), { status: 200 });
  } catch (error) {
    return new NextResponse(JSON.stringify({ message: error }), {
      status: 500,
    });
  }
};
