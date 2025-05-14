"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { z } from "zod";

const profileSchema = z.object({
  username: z.string().min(4, {
    message: "Please enter name.",
  }),
});

export const createProfile = () => {
  return (
    <Card className="flex w-[510px] w-max-[672px] flex-col items-start gap-6">
      <CardHeader>
        <CardTitle className="text-2xl leading-8 font-semibold">
          Complete your profile page
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter className="w-full">
        <Button className="w-full bg-black" type="submit">
          Continue
        </Button>
      </CardFooter>
    </Card>
  );
};
