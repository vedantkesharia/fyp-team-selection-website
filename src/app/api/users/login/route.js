import User from "../../../../models/user";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import connect from "../../../../utils/database";
import jwt from "jsonwebtoken";

export async function POST(request) {
  try {
    await connect();
    const { sapid, password } = await request.json();
    console.log(sapid);
    console.log(password);

    let user = await User.findOne({ sapid });
    if (!user) {
      return NextResponse.json(
        { status: 404 },
        { error: "Please try to login with correct credentials" }
      );
    }

    const passwordCompare = await bcrypt.compare(password, user.password);

    if (!passwordCompare) {
      return NextResponse.json(
        { status: 404 },
        { error: "Please try to login with correct credentials" }
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
