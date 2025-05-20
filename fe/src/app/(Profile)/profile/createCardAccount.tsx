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
import { Input } from "@/components/ui/input";
import { Form } from "@/components/ui/form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import axios from "axios";

const cardAccountSchema = z.object({
  country: z.string().min(4, {
    message: "Select country to continue.",
  }),
  firstName: z.string().min(5, {
    message: "First name must match",
  }),

  lastName: z.string().min(5, {
    message: "Last name must match",
  }),
  cardNumber: z.string({ message: "invalid card number" }),
  month: z.string({
    message: "Invalid month",
  }),
  year: z.string({
    message: "Invalid year",
  }),
  cvc: z.string().max(3, {
    message: "Invalid ",
  }),
});

type countries = {
  name: string;
};

const months = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
];

const years = [
  "2020",
  "2021",
  "2022",
  "2023",
  "2024",
  "2025",
  "2026",
  "2027",
  "2028",
  "2029",
  "2030",
];
export const CreateCardAccount = () => {
  const form = useForm<z.infer<typeof cardAccountSchema>>({
    resolver: zodResolver(cardAccountSchema),
    defaultValues: {
      country: "",
      firstName: "",
      lastName: "",
      cardNumber: "",
      month: "",
      year: "",
      cvc: "",
    },
  });
  const handleCardAccount = (values: z.infer<typeof cardAccountSchema>) => {};
  const [allCountries, setAllCountries] = useState<countries[]>([]);

  const fetchData = async () => {
    const { data } = await axios.get(
      `https://restcountries.com/v3.1/all?fields=name`
    );
    const countries = data.map((item: any) => ({
      name: item.name.common,
    }));
    setAllCountries(countries);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Card className="flex w-[510px] w-max-[672px] flex-col items-start shadow-none border-0 pt-[91px]">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleCardAccount)}
          className="flex flex-col w-full gap-6"
        >
          <CardHeader>
            <CardTitle className="text-2xl leading-8 font-semibold">
              How would you like to be paid?
            </CardTitle>
            <CardDescription>
              Enter location and payment details
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-6">
            <FormField
              control={form.control}
              name="country"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Select country</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl className="w-full">
                      <SelectTrigger>
                        <SelectValue placeholder="Select " />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {allCountries.map((country) => (
                        <SelectItem
                          key={country.name}
                          value={country.name}
                          className="flex flex-col w-full"
                        >
                          {country.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex gap-3 w-full justify-between">
              <div className="w-full">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>First name</FormLabel>
                      <FormControl className="w-full self-stretch">
                        <Input
                          placeholder="Enter your name here"
                          type="text"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="w-full">
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Last name</FormLabel>
                      <FormControl className="w-full">
                        <Input
                          placeholder="Enter your name here"
                          type="text"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <FormField
              control={form.control}
              name="cardNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Enter card number</FormLabel>
                  <FormControl className="w-full self-stretch">
                    <Input
                      placeholder="xxxx-xxxx-xxxx-xxxx"
                      type="text"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex items-start self-stretch w-full justify-between gap-4">
              <div className="w-full">
                <FormField
                  control={form.control}
                  name="month"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Expires</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl className="w-full">
                          <SelectTrigger>
                            <SelectValue placeholder="Select " />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {months.map((month, index) => (
                            <SelectItem key={index} value={month}>
                              {month}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="w-full">
                <FormField
                  control={form.control}
                  name="year"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Year</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl className="w-full">
                          <SelectTrigger>
                            <SelectValue placeholder="Select " />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {years.map((years, index) => (
                            <SelectItem key={index} value={years}>
                              {years}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="w-full">
                <FormField
                  control={form.control}
                  name="cvc"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>CVC</FormLabel>
                      <FormControl className="w-full self-stretch">
                        <Input placeholder="CVC" type="text" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
          </CardContent>
          <CardFooter className="w-full flex justify-end items-start">
            <Button className="w-[246px] bg-black" type="submit">
              Continue
            </Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
};
