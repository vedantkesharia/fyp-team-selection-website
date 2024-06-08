"use client";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import React, { useEffect, useState } from "react";
import { User2 } from "lucide-react";
import SignUp from "./SignUp";
import Login from "./Login";
import ForgotPassword from "./ForgotPassword";
import ConfirmPassword from "./ConfirmPassword";

const AuthDialog = ({ setToken }) => {
  const [data, setData] = useState({
    sapid: null,
    email: null,
    password: null,
  });
  const [show, setShow] = useState("signUp");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setToken(localStorage.getItem("authToken"));
  }, [show]);

  return (
    <>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger>
          <div className="block rounded-full p-2 hover:bg-black hover:text-white cursor-pointer">
            <User2 />
          </div>
        </DialogTrigger>
        <DialogContent className="rounded-2xl bg-[#f5f5f9] p-5 md:max-w-[450px]">
          <div className="max-w-screen-sm">
            {show === "signUp" && (
              <SignUp setShow={setShow} data={data} setData={setData} />
            )}
            {show === "login" && (
              <Login setShow={setShow} setIsOpen={setIsOpen} />
            )}
            {show === "forgotPassword" && (
              <ForgotPassword setShow={setShow} data={data} />
            )}
            {show === "confirmPassword" && (
              <ConfirmPassword
                setIsOpen={setIsOpen}
                setShow={setShow}
                data={data}
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AuthDialog;
