import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function page() {
  return (
    <div className="flex flex-col w-full h-full justify-center items-center bg-[#FFF]">
      <div className="flex w-full justify-between items-center py-2 px-4">
        <div className="flex w-full justify-between items-center py-2 px-10">
          <div>
            <Image
              src="/Logo.png"
              alt="logo"
              width={151}
              height={24}
              priority //
              className="h-auto w-[151px]"
            />
          </div>
          <Link href="/login">
            <Button className="bg-[#F4F4F5] text-black">Log out</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
