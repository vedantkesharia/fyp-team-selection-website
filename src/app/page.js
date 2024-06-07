"use client";
import React from 'react';
import { useRouter } from "next/navigation"; 
import { TypewriterEffectSmooth } from "../components/components/typewriter-effect";
import { Button } from '@/components/ui/button';

export default function Main() {
  const router = useRouter();

  const handleLogin = () => {
    router.push("/login");
  };

  const words = [
    { text: "Build" },
    { text: "projects" },
    { text: "with" },
    { text: "your" },
    { text: "Team.", className: "text-blue-500 dark:text-blue-500" },
  ];

  return (
    <div className="flex flex-col items-center justify-start h-screen pt-44 md:pt-20 px-4 sm:px-8 md:px-12 lg:px-20 ">
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-8 md:mt-6">
        <div className='flex flex-col items-center '>
          <p className="text-lg md:text-xl lg:text-2xl text-black dark:text-white text-center ">
            Final Year Project Team Selection. Meow Meow... I'm a cat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat nostrum minus dolorem deserunt, dignissimos fuga.
          </p>
          <Button className="mt-10 md:mt-8 w-full md:w-auto h-12 md:h-14 rounded-lg bg-black border dark:border-white border-transparent text-white text-md md:text-lg" onClick={handleLogin}>
            Get started
          </Button>
        </div>
      </div>
    </div>
  );
}




// "use client"
// import React from 'react'
// import { useRouter } from "next/navigation"; 
// import { TypewriterEffectSmooth } from "../components/components/typewriter-effect";
// import { Button } from '@/components/ui/button';
// export default function Main() {
//     const router = useRouter();
//     const handleLogin = () => {
//         router.push("/login");
//     };
//   const words = [
//     {
//       text: "Build",
//     },
//     {
//       text: "projects",
//     },
//     {
//         text: "with",
//     },
//     {
//       text: "your",
//     },
//     {
//       text: "Team.",
//       className: "text-blue-500 dark:text-blue-500",
//     },
//   ];
//   return (
//         <div className="flex flex-col items-center justify-start h-[40rem] pt-20">
//           <TypewriterEffectSmooth words={words} />
//           <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
//             <div className='flex-col flex items-center'>
//               <p className="text-2xl text-black-600 dark:text-neutral-200 pl-28 pr-28 pb-14"> 
//                 Final Year Project Team Selection. Meow Meow... I'm a cat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat nostrum minus dolorem deserunt, dignissimos fuga.
//               </p>
//               <Button className="flex justify-center w-50 h-15 rounded-xl bg-black border dark:border-white border-transparent text-white text-md" onClick={handleLogin}>
//                 Get started
//               </Button>
//             </div>
//           </div>
//         </div>
//   );
// }
// fdfj