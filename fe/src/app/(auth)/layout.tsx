import React from "react";
import { LayoutHalf } from "./components";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-white h-screen w-screen flex">
      <LayoutHalf />
      <div className="h-screen w-1/2">{children}</div>
    </div>
  );
}
