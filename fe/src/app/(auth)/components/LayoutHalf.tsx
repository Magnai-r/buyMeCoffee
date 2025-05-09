import Image from "next/image";

export const LayoutHalf = () => {
  return (
    <div className="bg-amber-400 w-1/2 relative flex justify-center items-center">
      <Image
        src="/Logo.png"
        alt="logo"
        width={147}
        height={20}
        className=" absolute top-8 left-20"
      />
      <div className="flex flex-col w-full gap-10 justify-center items-center">
        <Image src="/Icon.png" alt="Coffeecup" width={240} height={240} />
        <div className="w-full flex flex-col gap-3">
          <p className="text text-2xl text-center font-bold ">
            Fund your creative work
          </p>
          <p className="text-base leading-6 text-black text-center">
            Accept support. Start a membership. Setup a shop. It’s easier than
            you think.
          </p>
        </div>
      </div>
    </div>
  );
};
