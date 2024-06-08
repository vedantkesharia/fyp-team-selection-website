import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export async function POST(req, res) {
  const { email, otp } = await req.json();

  if (!email) {
    return NextResponse.json(
      { success: false, error: "Missing `email` field." },
      { status: 422 }
    );
  }

  try {
    let data = await resend.emails.send({
      from: "DJSCE IT DEPT <onboarding@resend.dev>",
      to: email,
      subject: "Reset Password OTP",
      html: `<p>Dear User,</p><p>Your One-Time Password (OTP) to reset your password is: ${otp}</p><p>Please use this OTP to proceed with the password reset process.</p><p>Thank you.</p>`,
    });

    console.log(data);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
  return NextResponse.json({ success: true }, { status: 200 });
}
