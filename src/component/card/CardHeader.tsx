"use client";

import Image from "next/image";
import StarIcon from "@/assets/icons/star.svg";
import { twMerge } from "tailwind-merge";

const CardHeader = ({
  title,
  description,
  className,
}: {
  title: string;
  description: string;
  className?: string;
}) => {
  return (
    <div
      className={twMerge(
        "flex flex-col p-6 md:py-8 md:px-10 lg:pt-6 lg:pb-6 lg:px-10",
        className
      )}
    >
      <div className="inline-flex items-center gap-2">
        <Image src={StarIcon.src} alt="About Me" width={40} height={40} />
        <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl tracking-wide">
          {title}
        </h3>
      </div>
      <p className="font-poppins text-white/60 text-sm w-full lg:text-base lg:max-w-xl sm:max-w-xs mt-2">
        {description}
      </p>
    </div>
  );
};

export default CardHeader;
