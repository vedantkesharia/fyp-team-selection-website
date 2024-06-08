"use client";
import { useEffect, useState } from "react";
import bcryptjs from "bcryptjs";
const {
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} = require("../ui/dialog");
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Label } from "../ui/label";
import { toast } from "sonner";

const ForgotPassword = ({ setShow, data }) => {
  const [otp, setOtp] = useState(null);

  const forgotPassword = async () => {
    const hashedOtp = localStorage.getItem("hashedOtp");
    if (!hashedOtp) {
      throw new Error("Hashed OTP not found in local storage.");
    }
    const validOtp = await bcryptjs.compare(otp, hashedOtp);
    if (validOtp) {
      setShow("confirmPassword");
    } else {
      toast.error("Invalid OTP. Please try again.");
    }
  };
  useEffect(() => {
    if (otp && otp.length === 6) {
      forgotPassword();
    }
  }, [otp]);

  return (
    <>
      <DialogHeader>
        <DialogTitle>Forgot Password</DialogTitle>
        <DialogDescription>
          Enter the OTP sent to your email address -
          <span className="text-blue-500">{data.email}</span>.
        </DialogDescription>
      </DialogHeader>
      <div className="flex justify-center items-center py-5">
        <InputOTP maxLength={6} value={otp} onChange={(otp) => setOtp(otp)}>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
          </InputOTPGroup>
          <InputOTPSeparator />
          <InputOTPGroup>
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
      </div>
    </>
  );
};

export default ForgotPassword;
