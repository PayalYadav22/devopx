"use client";

import grainImage from "@/assets/images/grain.jpg";
import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

const Card = ({
  className,
  children,
}: PropsWithChildren<{ className?: string }>) => {
  return (
    <div
      className={twMerge(
        `bg-gray-800 rounded-3xl relative z-0 overflow-hidden after:z-10 after:contet-[''] after:absolute after:inset-0 after:outline- after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 pb-0 after:pointer-events-none`,
        className
      )}
    >
      <div
        className="absolute inset-0 -z-10 opacity-5"
        style={{
          backgroundImage: `url(${grainImage})`,
          backgroundSize: "cover",
        }}
      ></div>
      {children}
    </div>
  );
};

export default Card;
