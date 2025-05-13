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
import { z } from "zod";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const signUpSchema = z.object({
  email: z.string().email({ message: "Plesse enter a valid email" }),
  password: z
    .string()
    .min(8, { message: "Please enter more than 8 characters" }),
});

export function SignUpEmailPass({ username }: { username: string }) {
  const form = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const handleSignUp = (values: z.infer<typeof signUpSchema>) => {
    console.log(values.email, values.password);
  };
  return (
    <Card className="w-1/2 shadow-none border-0">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSignUp)}>
          <CardHeader className="pb-6">
            <CardTitle className="text-2xl font-semibold leading-8">
              Welcome, {username}
            </CardTitle>
            <CardDescription className="text-sm font-normal leading-5 text-[#71717A]">
              Connect email and set a password
            </CardDescription>
          </CardHeader>
          <CardContent className="pb-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="gap-2 pb-3">
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your email here" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="gap-2">
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your password here"
                      type="password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter className="w-full">
            <Button className="w-full bg-black" type="submit">
              Continue
            </Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
}
