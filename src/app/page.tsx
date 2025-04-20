"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    
    // Basic email validation
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address");
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // In a real application, you would send this to your backend
      console.log("Email submitted:", email);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-background">
      <div className="w-full max-w-md mx-auto animate-in fade-in duration-500">
        <Card className="w-full">
          <CardHeader className="text-center">
            <div className="mb-4 flex justify-center">
              <div className="bg-primary/10 p-3 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <path d="m9 22 3-7 3 7" />
                  <path d="M12 13v6" />
                </svg>
              </div>
            </div>
            <CardTitle className="text-3xl font-bold tracking-tight">
              FixItEnzo
            </CardTitle>
            <CardDescription className="mt-2 text-center max-w-sm mx-auto">
              Your smart home repair assistant is coming soon. Be the first to know when we launch!
            </CardDescription>
          </CardHeader>
          <CardContent>
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={isSubmitting}
                    className={error ? "border-destructive" : ""}
                    aria-invalid={!!error}
                  />
                  {error && (
                    <p className="text-destructive text-sm">{error}</p>
                  )}
                </div>
                <Button
                  type="submit"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Saving..." : "Notify Me"}
                </Button>
              </form>
            ) : (
              <div className="text-center py-4 animate-in fade-in duration-300">
                <div className="bg-primary/10 mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">Thanks for signing up!</h3>
                <p className="text-muted-foreground mt-1">
                  We&apos;ll notify you as soon as FixItEnzo launches.
                </p>
              </div>
            )}
          </CardContent>
          <CardFooter className="flex justify-center text-sm text-muted-foreground">
            <p>© 2025 FixItEnzo. All rights reserved.</p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
