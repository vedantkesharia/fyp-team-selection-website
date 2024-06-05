"use client";
import { useState } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Signup() {
  const [message, setMessage] = useState("");

  const handleClick = () => {
    setMessage("A link has been sent to your email to set the password.");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
    <Card className="mx-auto max-w-sm">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold">Signup</CardTitle>
        <CardDescription>Enter your email to create your account</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="m@example.com" required />
          </div>
          <Button type="submit" className="w-full" onClick={handleClick}>
            Signup
          </Button>
          <div className="flex flex-col items-center justify-center">
            <span className="mt-4">Already have an account?</span>
            <a href="/login" className="text-blue-500 underline">
              Login
            </a>
          </div>
        </div>
      </CardContent>
    </Card>
    <div>{message && <p className="mt-4 text-center text-green-600">{message}</p>}</div>
    </div>
  )
}