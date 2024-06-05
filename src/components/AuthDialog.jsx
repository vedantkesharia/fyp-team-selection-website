"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const AuthDialog = () => {
  const [show, setShow] = useState("signUp");
  const [isOpen, setIsOpen] = useState(false);

  React.useEffect(() => {
    if (isOpen === false) setShow("signUp");
  }, [isOpen]);

  return (
    <>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger>
          <Avatar>
            <AvatarImage src="/user.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </DialogTrigger>
        <DialogContent className="rounded-2xl bg-themeforeground p-5 md:max-w-[450px]">
          <div className="max-w-screen-sm">
            {show === "signUp" && (
              <SignUp setShow={setShow} setIsOpen={setIsOpen} />
            )}
            {show === "login" && (
              <Login setShow={setShow} setIsOpen={setIsOpen} />
            )}
            {show === "forgotPassword" && (
              <ForgotPassword setIsOpen={setIsOpen} />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AuthDialog;

const SignUp = ({ setShow, setIsOpen }) => {
  const [email, setEmail] = useState("");

  const signUp = () => {
    console.log(email);
    setIsOpen(false);
  };

  return (
    <>
      <DialogHeader>
        <DialogTitle>Sign Up</DialogTitle>
        <DialogDescription>
          Enter your email to create your account
        </DialogDescription>
      </DialogHeader>
      <div className="flex flex-col gap-3 py-5">
        <div className="flex items-center gap-2">
          <Label htmlFor="name" className="text-center w-[150px]">
            Email
          </Label>
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-grow"
            placeholder="Enter list name"
            autoComplete="off"
          />
        </div>
        <div className="flex justify-center items-center gap-1">
          <span>Already have an account?</span>
          <span className="text-blue-500" onClick={() => setShow("login")}>
            Login
          </span>
        </div>
      </div>
      <DialogFooter>
        <Button type="submit" onClick={signUp}>
          Submit
        </Button>
      </DialogFooter>
    </>
  );
};

const Login = ({ setShow, setIsOpen }) => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const login = () => {
    console.log(credentials);
    setShow("forgotPassword");
  };

  return (
    <>
      <DialogHeader>
        <DialogTitle>Login</DialogTitle>
        <DialogDescription>
          Enter your email to create your account
        </DialogDescription>
      </DialogHeader>
      <div className="flex flex-col gap-3 py-5">
        <div className="flex items-center gap-2">
          <Label htmlFor="name" className="text-center w-[150px]">
            Email
          </Label>
          <Input
            value={credentials.email}
            onChange={(e) =>
              setCredentials({ ...credentials, email: e.target.value })
            }
            className="flex-grow"
            placeholder="Enter list name"
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
            className="flex-grow"
            placeholder="Enter list name"
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
        <Button type="submit" onClick={login}>
          Submit
        </Button>
      </DialogFooter>
    </>
  );
};

const ForgotPassword = ({ setIsOpen }) => {
  const [password, setPassword] = useState({
    pass: "",
    confirmPass: "",
  });

  const forgotPassword = () => {
    setIsOpen(false);
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
            className="flex-grow"
            placeholder="Confirm Password"
            autoComplete="off"
          />
        </div>
      </div>
      <DialogFooter>
        <Button type="submit" onClick={forgotPassword}>
          Submit
        </Button>
      </DialogFooter>
    </>
  );
};
