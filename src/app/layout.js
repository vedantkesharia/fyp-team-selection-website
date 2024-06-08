"use client";

import { Inter } from "next/font/google";
import { usePathname } from "next/navigation";
import "./globals.css";
import NavBar from "@/components/NavBar";
import { Toaster } from "sonner";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const { pathname } = usePathname();

  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster />
        <div className="bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]">
          <div>
            {pathname === "/admin-dashboard" ||
            pathname === "/password/" ? null : (
              <NavBar />
            )}
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}
