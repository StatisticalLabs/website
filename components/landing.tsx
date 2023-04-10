import Image from "next/image";
import type React from "react";

const Landing: React.FC = () => {
  return (
    <div className="py-8 px-6">
      <div className="flex flex-col lg:flex-row items-center gap-3 justify-between">
        <div className="text-center lg:text-left">
          <h1 className="font-bold text-5xl">
            The <span className="font-normal italic underline">best</span>{" "}
            tracking bot on{" "}
            <span className="bg-gradient-to-b from-blue-800 to-indigo-600 dark:from-blue-600 dark:to-indigo-400 inline-block text-transparent bg-clip-text">
              Discord
            </span>
            .
          </h1>
          <p className="mt-4">
            Track any{" "}
            <span className="bg-gradient-to-b from-red-600 to-red-800 dark:from-red-400 dark:to-red-600 inline-block text-transparent bg-clip-text font-medium">
              YouTube channel
            </span>{" "}
            and immediately find out when they have a subscriber update.
          </p>
        </div>
        <div className="py-1.5 bg-[#323339] rounded-lg overflow-hidden">
          <Image
            src="/sub_update.png"
            alt="Subscriber Update"
            width={627}
            height={470}
          />
        </div>
      </div>
    </div>
  );
};

export default Landing;
