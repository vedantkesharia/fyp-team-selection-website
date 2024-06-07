"use client"

import { Inter } from "next/font/google";
import { usePathname } from "next/navigation"; 
import "./globals.css";
import Navbar from "@/components/components/navbar";
const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {
  const { pathname } = usePathname();

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]">
          <div>
            {
              (pathname === "/admin-dashboard" || pathname === "/password/") ? null :
              <Navbar />
            }
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}
