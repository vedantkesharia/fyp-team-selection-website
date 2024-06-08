"use client";
import { useState } from "react";
import { toast } from "sonner";
const { Button } = require("../ui/button");
const {
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} = require("../ui/dialog");
const { Input } = require("../ui/input");
const { Label } = require("../ui/label");

const SignUp = ({ setShow, data, setData }) => {
  const [processing, setProcessing] = useState(false);

  const signUp = async () => {
    try {
      setProcessing(true);
      if (!data.sapid) {
        toast.error("Enter Valid SapId");
        return;
      }
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_URL}/api/users/signup`,
        {
          method: "POST",
          body: JSON.stringify({ sapid: data.sapid }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const resData = await res.json();
      if (resData.success) {
        localStorage.setItem("hashedOtp", resData.hashedOtp);
        setData({ ...data, email: resData.email });
        setShow("forgotPassword");
      } else {
        toast.error(
          resData.message || "Error during sign up. Please try again."
        );
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred. Please try again.");
    } finally {
      setProcessing(false);
    }
  };

  return (
    <>
      <DialogHeader>
        <DialogTitle>Sign Up</DialogTitle>
        <DialogDescription>
          Enter your SapId to create your account
        </DialogDescription>
      </DialogHeader>
      <div className="flex flex-col gap-3 py-5">
        <div className="flex items-center gap-2">
          <Label htmlFor="sapid" className="text-center w-[150px]">
            SapId
          </Label>
          <Input
            value={data.sapid}
            onChange={(e) => setData({ ...data, sapid: e.target.value })}
            className="flex-grow"
            placeholder="Enter SapId"
            autoComplete="off"
          />
        </div>
        <div className="flex justify-center items-center gap-1">
          <span>Already have an account?</span>
          <span
            className="text-blue-500 cursor-pointer"
            onClick={() => setShow("login")}
          >
            Login
          </span>
        </div>
      </div>
      <DialogFooter>
        {processing ? (
          <Button type="button" disabled>
            Sending Otp...
          </Button>
        ) : (
          <Button type="button" onClick={signUp}>
            Submit
          </Button>
        )}
      </DialogFooter>
    </>
  );
};

export default SignUp;
