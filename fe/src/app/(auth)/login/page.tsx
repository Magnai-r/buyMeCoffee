import React from "react";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { LoginPage } from "./LoginPage";

export default function Login() {
  return (
    <div className="flex items-center justify-center h-screen w-full relative">
      <Link href="/sign-up">
        <Button
          className="absolute top-8 right-20 bg-[#F4F4F5]"
          variant="secondary"
        >
          Sign up
        </Button>
      </Link>
      <LoginPage />
    </div>
  );
}
