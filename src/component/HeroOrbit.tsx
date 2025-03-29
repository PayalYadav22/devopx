"use client";

import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

const HeroOrbit = ({
  children,
  size,
  rotate,
  orbitDuration,
  shouldSpin = false,
  shouldOrbit = false,
  spinDuration,
}: PropsWithChildren<{
  size: number;
  rotate: number;
  orbitDuration?: string;
  shouldSpin?: boolean;
  spinDuration?: string;
  shouldOrbit?: boolean;
}>) => {
  return (
    <div
      className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2`}
    >
      <div
        className={twMerge(shouldOrbit === true && `animate-spin`)}
        style={{
          animationDuration: orbitDuration,
        }}
      >
        <div
          className="flex items-start justify-start animate-pulse"
          style={{
            transform: `rotate(${rotate}deg)`,
            height: `${size}px`,
            width: `${size}px`,
          }}
        >
          <div
            className={twMerge(shouldSpin == true && "animate-spin")}
            style={{
              animationDuration: spinDuration,
            }}
          >
            <div
              className="inline-flex"
              style={{ transform: `rotate(${rotate * -1}deg)` }}
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroOrbit;
