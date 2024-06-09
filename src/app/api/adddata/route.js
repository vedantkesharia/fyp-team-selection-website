import User from "../../../models/user";
import  connect  from "../../../utils/database";
import { NextResponse } from "next/server";

connect();

export async function POST(request) {
  try {
    const { data } = await request.json();
    console.log(data);

    const insertedUsers = await User.insertMany(data);

    return NextResponse.json({
      message: "Data added",
      insertedCount: insertedUsers.length,
    });
  } catch (error) {
    console.error("Error inserting data:", error);
    return NextResponse.json(
      { message: "Error adding data", error: error.message },
      { status: 500 }
    );
  }
}
