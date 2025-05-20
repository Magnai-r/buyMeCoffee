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
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Camera } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";

const profileSchema = z.object({
  name: z.string().min(4, {
    message: "Please enter name.",
  }),
  image: z.string({ required_error: "Upload an image" }),

  about: z.string().min(30, {
    message: "Please enter info about yourself",
  }),
  socialMediaURL: z.string().url({ message: "Please enter a social link" }),
});

export const CreateProfile = () => {
  const [uploading, setUploading] = useState(false);
  const [imagePreview, setImagePreview] = useState("");

  const form = useForm<z.infer<typeof profileSchema>>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      name: "",
      about: "",
      socialMediaURL: "",
    },
  });
  const handleProfile = (values: z.infer<typeof profileSchema>) => {
    console.log(values.name, values.about, values.socialMediaURL);
  };

  return (
    <Card className="flex w-[510px] w-max-[672px] flex-col items-start shadow-none border-0 pt-[91px]">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleProfile)}
          className="flex flex-col w-full gap-6"
        >
          <CardHeader>
            <CardTitle className="text-2xl leading-8 font-semibold">
              Complete your profile page
            </CardTitle>
          </CardHeader>
          <CardContent>
            <FormField
              control={form.control}
              name="image"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Add photo</FormLabel>
                  <div className="flex relative">
                    <Camera
                      size="28"
                      className="absolute left-[66px] top-[66px]"
                    />
                    <FormControl>
                      <Input
                        type="file"
                        {...field}
                        className="flex size-40 justify-center items-center bg-white rounded-full border-dashed border-2 border-[#E4E4E7]"
                      />
                    </FormControl>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex gap-3 flex-col">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
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
              <FormField
                control={form.control}
                name="about"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>About</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Write about yourself here"
                        className="flex flex-col py-2 items-start px-3 min-h-20 w-full h-[131px] border-1 border-[#E4E4E7] rounded-md"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="socialMediaURL"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Social media URL</FormLabel>
                    <FormControl>
                      <Input placeholder="https://" type="text" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
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
