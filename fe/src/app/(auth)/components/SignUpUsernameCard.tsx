"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function SignUpUsername() {
  return (
    <Card className="flex justify-center w-[407px] border-0 absolute">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold leading-8">
          Create Your Account
        </CardTitle>
        <CardDescription className="text-sm font-normal leading-5 text-[#71717A]">
          Choose a username for your page
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Username</Label>
              <Input id="name" placeholder="Enter username here" />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="w-full">
        <Button className="w-full bg-black">Continue</Button>
      </CardFooter>
    </Card>
  );
}
