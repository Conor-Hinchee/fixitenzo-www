"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function HeyEnzo() {
  const [inputText, setInputText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("hey from enzo!");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black">
      <div className="w-full max-w-md mx-auto animate-in fade-in duration-500">
        <Card className="w-full bg-gray-900 shadow-xl rounded-lg border border-gray-800 p-8">
          <CardHeader className="text-center">
            <CardTitle className="text-4xl text-gray-100 font-anton">
              hey enzo
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-3">
                <Input
                  type="text"
                  placeholder="Enter text here"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  className="bg-gray-800 text-gray-100 placeholder-gray-500 focus:ring-2 focus:ring-primary focus:outline-none border-gray-700"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-primary text-gray-900 hover:bg-primary/90"
              >
                Submit
              </Button>
            </form>
          </CardContent>
          <CardFooter className="flex justify-center text-sm text-gray-500 mt-6">
            <p>© 2025 FixItEnzo. All rights reserved.</p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

