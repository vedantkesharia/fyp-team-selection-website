"use client";
import { useState } from "react";
import { useRouter } from "next/navigation"; 
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Login() {
  const [message, setMessage] =useState("");
  const router = useRouter();
  const handleClick = () => {
    setMessage("Incorrect Username or Password. Please try again.");
    //ADD IF ELSE HERE
    router.push("/team-members");
  }
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Card className="mx-auto max-w-sm">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold">Login</CardTitle>
          <CardDescription>Enter your email and password to login to your account</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="m@example.com" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" required />
            </div>
            <Button type="submit" className="w-full" onClick={handleClick}>
              Login
            </Button>
            <div className="flex flex-col items-center justify-center">
            <span className="mt-4">Don't have an account?</span>
            <a href="/signup" className="text-blue-500 underline">
              Signup
            </a>
          </div>
          </div>
        </CardContent>
      </Card>
      <div>{message && <p className="mt-4 text-center text-red-600">{message}</p>}</div>
    </div>
  )
}