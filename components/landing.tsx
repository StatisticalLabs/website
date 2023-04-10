import Image from "next/image";
import type React from "react";

const Landing: React.FC = () => {
  return (
    <div className="py-8 px-6">
      <div className="flex items-center gap-3 jsutify-between">
        <div>
          <h1 className="font-bold text-5xl">
            The <span className="font-normal italic underline">best</span>{" "}
            tracking bot on{" "}
            <span className="bg-gradient-to-b from-blue-600 to-indigo-400 inline-block text-transparent bg-clip-text">
              Discord
            </span>
            .
          </h1>
          <p className="mt-2">
            Track any{" "}
            <span className="bg-gradient-to-b from-red-400 to-red-600 inline-block text-transparent bg-clip-text font-medium">
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
