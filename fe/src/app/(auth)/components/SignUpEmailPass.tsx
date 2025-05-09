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

export function SignUpEmailPass() {
  return (
    <Card className="flex justify-center w-[407px] border-0 absolute">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold leading-8">
          Welcome, Pancakes1
        </CardTitle>
        <CardDescription className="text-sm font-normal leading-5 text-[#71717A]">
          Connect email and set a password
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="Enter email here" />
              <Label htmlFor="password">Password</Label>
              <Input id="password" placeholder="Enter password here" />
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
