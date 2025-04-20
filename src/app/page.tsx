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
      console.log("Email submitted:", email);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black">
      <div className="w-full max-w-md mx-auto animate-in fade-in duration-500">
        <Card className="w-full bg-gray-900 shadow-xl rounded-lg border border-gray-800 p-8">
          <CardHeader className="text-center font-anton">
            <div className="mb-8">
              <div className="bg-gray-800 p-5 rounded-full mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-gray-400"
                >
                  <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <path d="m9 22 3-7 3 7" />
                  <path d="M12 13v6" />
                </svg>
              </div>
            </div>
            <CardTitle className="text-4xl text-gray-100 font-anton">
              Fix It Enzo
            </CardTitle>
            <CardDescription className="mt-4 text-gray-400 font-geist-sans">
              The Next Generation repair tool for professionals and DIY-ers.
              Build anything and fix everything.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-3">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={isSubmitting}
                    className={`bg-gray-800 text-gray-100 placeholder-gray-500 focus:ring-2 focus:ring-primary focus:outline-none ${
                      error ? "border-red-500" : "border-gray-700"
                    }`}
                    aria-invalid={!!error}
                  />
                  {error && (
                    <p className="text-red-500 text-sm">{error}</p>
                  )}
                </div>
                <Button
                  type="submit"
                  className="w-full bg-primary text-gray-900 hover:bg-primary/90 disabled:opacity-50"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Saving..." : "Notify Me"}
                </Button>
              </form>
            ) : (
              <div className="text-center py-8">
                <div className="bg-gray-800 mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-gray-400"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-100">
                  Thanks for signing up!
                </h3>
                <p className="text-gray-400 mt-2">
                  We&apos;ll notify you as soon as FixItEnzo launches.
                </p>
              </div>
            )}
          </CardContent>
          <CardFooter className="flex justify-center text-sm text-gray-500 mt-6">
            <p>© 2025 FixItEnzo. All rights reserved.</p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
