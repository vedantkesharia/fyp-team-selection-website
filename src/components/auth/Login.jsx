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

const Login = ({ setShow, setIsOpen }) => {
  const [credentials, setCredentials] = useState({
    sapId: null,
    password: null,
  });
  const [processing, setProcessing] = useState(false);

  const login = async () => {
    try {
      setProcessing(true);

      if (credentials.sapId === null || credentials.password === null) {
        toast.error("Please enter credentials appropriately");
        return;
      }

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_URL}/api/users/login`,
        {
          method: "POST",
          body: JSON.stringify({
            sapid: credentials.sapId,
            password: credentials.password,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const resData = await res.json();
      if (resData.status == 404 || resData.status == 500) {
        toast.error(resData.error);
        return;
      }

      if (resData.success) {
        toast.success("Login Successfull");
        localStorage.setItem("authToken", resData.authToken);
        setShow("signUp");
        setIsOpen(false);
      }
    } catch (error) {
      toast.error(error);
    } finally {
      setProcessing(false);
    }
  };

  return (
    <>
      <DialogHeader>
        <DialogTitle>Login</DialogTitle>
        <DialogDescription></DialogDescription>
      </DialogHeader>
      <div className="flex flex-col gap-3 py-5">
        <div className="flex items-center gap-2">
          <Label htmlFor="name" className="text-center w-[150px]">
            SapId
          </Label>
          <Input
            value={credentials.sapId}
            onChange={(e) =>
              setCredentials({ ...credentials, sapId: e.target.value })
            }
            className="flex-grow"
            placeholder="Enter SapId"
            autoComplete="off"
          />
        </div>
        <div className="flex items-center gap-2">
          <Label htmlFor="name" className="text-center w-[150px]">
            Password
          </Label>
          <Input
            value={credentials.password}
            onChange={(e) =>
              setCredentials({ ...credentials, password: e.target.value })
            }
            type="password"
            className="flex-grow"
            placeholder="Enter your password"
            autoComplete="off"
          />
        </div>
        <div className="flex justify-center items-center gap-1">
          <span>Don't have an account?</span>
          <span className="text-blue-500" onClick={() => setShow("signUp")}>
            SignUp
          </span>
        </div>
      </div>
      <DialogFooter>
        {processing === true ? (
          <>
            <Button type="submit">Processing...</Button>
          </>
        ) : (
          <>
            <Button type="submit" onClick={login}>
              Submit
            </Button>
          </>
        )}
      </DialogFooter>
    </>
  );
};

export default Login;
