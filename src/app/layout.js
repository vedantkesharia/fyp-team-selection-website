"use client"
import { ThemeProvider } from "@/components/components/theme-provider"
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
      <ThemeProvider
            attribute="class"
            defaultTheme="system">
        <div className="bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]">
          <div>
            {
              (pathname === "/admin-dashboard" || pathname === "/password/") ? null :
              <Navbar />
            }
          </div>
          {children}
        </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
