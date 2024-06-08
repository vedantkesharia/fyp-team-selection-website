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

const ConfirmPassword = ({ setIsOpen, setShow, data }) => {
  const [password, setPassword] = useState({
    pass: "",
    confirmPass: "",
  });

  const confirmPassword = async () => {
    if (!password.pass || !password.confirmPass) {
      toast.error("Enter Valid Password");
      return;
    }
    if (password.pass != password.confirmPass) {
      toast.error("Password must be same as Confirm Password");
      return;
    }
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/users/setpassword`,
      {
        method: "POST",
        body: JSON.stringify({ sapid: data.sapid, password: password.pass }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const resData = await res.json();
    if (resData.success) {
      localStorage.removeItem("hashedOtp");
      localStorage.setItem("authToken", resData.authToken);
      toast.success("Password Set Successfully");
      setShow("signUp");
      setIsOpen(false);
    } else {
      toast.error("Error setting Password");
      setShow("signUp");
      setIsOpen(false);
    }
  };

  return (
    <>
      <DialogHeader>
        <DialogTitle>Set Password</DialogTitle>
        <DialogDescription>
          Enter a password and confirm it below to secure your account.
        </DialogDescription>
      </DialogHeader>
      <div className="flex flex-col gap-3 py-5">
        <div className="flex items-center gap-2">
          <Label htmlFor="name" className="text-center w-[150px]">
            Password
          </Label>
          <Input
            value={password.pass}
            onChange={(e) => setPassword({ ...password, pass: e.target.value })}
            className="flex-grow"
            type="password"
            placeholder="Enter password"
            autoComplete="off"
          />
        </div>
        <div className="flex items-center gap-2">
          <Label htmlFor="name" className="text-center w-[150px]">
            Confirm Password
          </Label>
          <Input
            value={password.confirmPass}
            onChange={(e) =>
              setPassword({ ...password, confirmPass: e.target.value })
            }
            type="password"
            className="flex-grow"
            placeholder="Confirm Password"
            autoComplete="off"
          />
        </div>
      </div>
      <DialogFooter>
        <Button type="submit" onClick={confirmPassword}>
          Submit
        </Button>
      </DialogFooter>
    </>
  );
};

export default ConfirmPassword;
