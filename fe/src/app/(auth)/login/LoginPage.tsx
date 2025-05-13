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

import { Dispatch, SetStateAction } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const loginSchema = z.object({
  email: z.string().email({ message: "Plesse enter a valid email" }),
  password: z
    .string()
    .min(8, { message: "Please enter more than 8 characters" }),
});

export const LoginPage = () => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  const handleLogin = (values: z.infer<typeof loginSchema>) => {
    console.log(values.email, values.password);
  };

  return (
    <Card className="w-1/2 shadow-none border-0">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleLogin)}
          className="flex flex-col gap-4"
        >
          <CardHeader>
            <CardTitle className="text-2xl font-semibold leading-8">
              Welcome back
            </CardTitle>
          </CardHeader>
          <CardContent className="">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="pb-3 gap-2">
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
                <FormItem className="pb-3">
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
            <Button className="w-full" type="submit">
              Continue
            </Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
};
