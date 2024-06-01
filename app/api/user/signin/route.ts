import { connect } from "@/dbconfig/dbconfig";
import User from "@/models/userModels";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

connect();

export async function POST(request: NextRequest) {
  try {
    const requestBody = await request.json();
    const { email, password } = requestBody;

    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json(
        { error: "User not exist, signup instead" },
        { status: 500 }
      );
    }
    const validPassword = await bcryptjs.compare(password, user.password);
    if (!validPassword) {
      return NextResponse.json(
        { error: "Password is wrong, try again" },
        { status: 400 }
      );
    }
    const tokenData = {
      id: user._id,
      email: user.email,
    };
    // with given ! mark, I garantee that token_secret is string
    const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET!, {
      expiresIn: "1d",
    });
    const response = NextResponse.json({
      message: "Logged in Success",
      success: true,
    });
    // to give httpOnly, the cookies can manipulate by only server, brownser only see it
    response.cookies.set("token", token, {
      httpOnly: true,
    });
    return response;
  } catch (error) {
    return NextResponse.json(
      { error: `User signin rejected - ${error}` },
      { status: 500 }
    );
  }
}
