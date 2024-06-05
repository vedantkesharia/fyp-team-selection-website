"use client";
import { AlignLeft } from "lucide-react";
import React from "react";
import AuthDialog from "./AuthDialog";
import { ModeToggle } from "./ModeToggle";
import { ThemeToggle } from "./ThemeToggle";

const NavBar = () => {
  return (
    <>
      <nav className="px-5 bg-themeforeground overflow-hidden shadow-lg flex items-center justify-between mt-3 mb-4 rounded-md h-[64px] w-full max-w-[calc(1440px-3rem)] ">
        <div className="flex items-center gap-x-1">
          <div className="block rounded-full p-2 hover:bg-themebackground">
            <AlignLeft className="cursor-pointer" onClick={() => {}} />
          </div>
        </div>
        <div className="flex items-center gap-x-1">
          <ThemeToggle />
          <ModeToggle />
          <AuthDialog />
        </div>
      </nav>
    </>
  );
};

export default NavBar;
