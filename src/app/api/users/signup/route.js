import User from "@/models/user";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import sendMail from "@/utils/sendMail";
import connect from "@/utils/database";

export async function POST(request) {
  try {
    await connect();

    const { sapid } = await request.json();
    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    const user = await User.findOne({ sapid });
    if (!user) {
      return NextResponse.json(
        { success: false, message: "User not found" },
        { status: 404 }
      );
    }

    const hashedOtp = await bcrypt.hash(otp, 10);

    const res = await sendMail(user.email, otp);
    if (!res) {
      return NextResponse.json(
        { success: false, message: "Error sending OTP" },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { success: true, hashedOtp, email: user.email },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
