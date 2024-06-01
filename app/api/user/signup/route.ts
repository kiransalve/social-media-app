import { connect } from "@/dbconfig/dbconfig";
import User from "@/models/userModels";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

connect();

export async function POST(request: NextRequest) {
  try {
    // get data send by front end and store in requestBody
    const requestBody = await request.json();
    // extract username, email, password
    const { email, password } = requestBody;
    // find in data base if that email exist?
    const user = await User.findOne({ email });
    // if exist then return as user already exists
    if (user) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }
    // generate salt
    const salt = await bcryptjs.genSalt(10);
    // hash password
    const hashedPassword = await bcryptjs.hash(password, salt);
    // save email and hashed password using save() method of mongodb
    const newUser = new User({
      email,
      password: hashedPassword,
    });
    const savedUser = await newUser.save();
    // send user created message to frontend
    return NextResponse.json({
      message: "User registered successfully",
      success: true,
      savedUser,
    });
  } catch (error) {
    // if any error
    return NextResponse.json(
      { error: `User registration rejected ${error}` },
      { status: 500 }
    );
  }
}
