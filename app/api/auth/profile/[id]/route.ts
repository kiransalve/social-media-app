import User from "@/model/User";
import mongoose from "mongoose";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export const GET = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  //check if the connection state is 1 (connected)
  if (mongoose.connection.readyState !== 1) {
    //If not, establish a new connection using await mongoose.connect
    await mongoose.connect(process.env.MONGO_URL as string);
  }
  const { id } = params;

  try {
    const user = await User.findById(id).select("-password");

    if (!user) {
      return new NextResponse(JSON.stringify({ message: "User not found" }), {
        status: 404,
      });
    }

    return new NextResponse(JSON.stringify(user), {
      status: 200,
    });
  } catch (error) {
    return new NextResponse(JSON.stringify({ message: "Not Authenticated" }), {
      status: 500,
    });
  }
};

export const PUT = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  if (mongoose.connection.readyState !== 1) {
    await mongoose.connect(process.env.MONGO_URL as string);
  }
  const { id } = params;
  try {
    const formData = req.body;

    const updatedUser = await User.findByIdAndUpdate(id, formData, {
      new: true,
      runValidators: true,
    });

    if (!updatedUser) {
      return new NextResponse(JSON.stringify({ message: "User not found" }), {
        status: 404,
      });
    }

    return new NextResponse(JSON.stringify(updatedUser), {
      status: 200,
    });
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ message: "Error updating user profile" }),
      {
        status: 500,
      }
    );
  }
};
