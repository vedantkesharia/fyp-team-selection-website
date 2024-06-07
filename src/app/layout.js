"use client";
import { Inter } from "next/font/google";
import { usePathname } from "next/navigation";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import NavBar from "@/components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="bg-themebackground flex flex-col flex-1 h-screen items-center overflow-y-auto">
              <header className="sticky top-0 w-full !pl-[0.8rem] !pr-[0.8rem] md:!pl-[1.5rem] md:!pr-[1.5rem] z-10 flex justify-center">
                <NavBar />
              </header>
              <main className="flex-1 max-w-[1440px] w-full pl-[0.8rem] pr-[0.8rem] md:!pl-[1.5rem] md:pr-[1.5rem]">
                {children}
              </main>
            </div>
          </ThemeProvider>
        </>
      </body>
    </html>
  );
}
// hello