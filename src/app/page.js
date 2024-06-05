"use client"
import React from 'react'
import { useRouter } from "next/navigation"; 
import { TypewriterEffectSmooth } from "../components/components/typewriter-effect";
import { Button } from '@/components/ui/button';
export default function Main() {
    const router = useRouter();
    const handleLogin = () => {
        router.push("/login");
    };
  const words = [
    {
      text: "Build",
    },
    {
      text: "projects",
    },
    {
        text: "with",
    },
    {
      text: "your",
    },
    {
      text: "Team.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
        <div className="flex flex-col items-center justify-center h-[40rem]  ">
          <TypewriterEffectSmooth words={words} />
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
            <div className='flex-col flex items-center'>
              <p className="text-2xl text-black-600 dark:text-neutral-200 pl-28 pr-28 pb-14"> 
                Final Year Project Team Selection. Meow Meow... I'm a cat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat nostrum minus dolorem deserunt, dignissimos fuga.
              </p>
              <Button className="flex justify-center w-50 h-15 rounded-xl bg-black border dark:border-white border-transparent text-white text-md" onClick={handleLogin}>
                Get started
              </Button>
            </div>
          </div>
        </div>
  );
}
