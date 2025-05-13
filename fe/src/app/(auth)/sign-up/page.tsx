import React from "react";
import SignUpPage from "./SignUpPage";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function SignUp() {
  return (
    <div className="flex items-center justify-center h-screen w-full relative">
      <Link href="/login">
        <Button
          className="absolute top-8 right-20 bg-[#F4F4F5]"
          variant="secondary"
        >
          Log in
        </Button>
      </Link>
      <SignUpPage />
    </div>
  );
}
