import User from "../../../../models/user";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import connect from "@/utils/database";
import jwt from "jsonwebtoken";

export async function POST(request) {
  try {
    await connect();
    const { sapid, password } = await request.json();

    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(password, salt);

    const user = await User.findOneAndUpdate(
      { sapid },
      { password: secPass },
      { new: true }
    );

    if (!user) {
      return NextResponse.json(
        { success: false, error: "User not found" },
        { status: 404 }
      );
    }

    const data = {
      user: {
        sapid: user.sapid,
      },
    };

    const authToken = jwt.sign(data, process.env.NEXT_PUBLIC_JWT_SECRET);

    return NextResponse.json({ success: true, authToken });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
