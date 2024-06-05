"use client";
import { useRouter } from "next/navigation"; 
import { useState } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Password() {
  const router = useRouter();
  const [message, setMessage] =useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const handleClick = () => {
    if (password != confirmPassword) {
      setMessage("Passwords do not match. Please try again.");
      return;
    }
    else{
      setMessage("Password set successfully. Redirecting to login page.");
    router.push("/login");
    }
  }
  return (
    <div className="flex flex-col items-center justify-center h-screen">
    <Card className="mx-auto max-w-sm">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold">Set Password</CardTitle>
        <CardDescription>Enter a password and confirm it below to secure your account.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" placeholder="Enter a new password" required value={password}
                onChange={(e) => setPassword(e.target.value)}/>
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirm-password">Confirm Password</Label>
            <Input id="confirm-password" type="password" placeholder="Confirm your new password" required value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}/>
          </div>
          <Button type="submit" className="w-full" onClick={handleClick}>
            Save Password
          </Button>
        </div>
      </CardContent>
    </Card>
    <div>{message && (<p className={`mt-4 text-center ${message.startsWith('Error') ? 'text-red-600' : 'text-green-600'}`}>
      {message}
    </p>)}</div>
    </div>
  )
}