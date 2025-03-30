"use client";

import HeroOrbit from "@/component/HeroOrbit";
import momojiImage from "@/assets/images/computer.png";
import ArrowDown from "@/component/svgs/arrow-down.svg";
import StarIcon from "@/component/svgs/star.svg";
import grainImage from "@/assets/images/grain.jpg";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="py-32 md:py-40 lg:py-60 relative overflow-clip">
      <div
        className="absolute inset-0 -z-30 opacity-5"
        style={{ backgroundImage: `url(${grainImage.src})` }}
      ></div>
      <div className="size-[700px] hero-ring"></div>
      <div className="size-[920px] hero-ring"></div>
      <div className="size-[1120px] hero-ring"></div>
      <div className="size-[1320px] hero-ring"></div>
      {/* small ring */}
      <HeroOrbit
        size={550}
        rotate={-14}
        shouldOrbit
        orbitDuration="20s"
        shouldSpin
        spinDuration="5s"
      >
        <Image
          src={StarIcon}
          className="size-[50px]"
          alt="Person peeking from behind a laptop"
        />
      </HeroOrbit>
      <HeroOrbit
        size={550}
        rotate={-14}
        shouldOrbit
        orbitDuration="80s"
        shouldSpin
        spinDuration="5s"
      >
        <Image
          src={StarIcon}
          className="size-[60px]"
          alt="Person peeking from behind a laptop"
        />
      </HeroOrbit>
      <HeroOrbit
        size={550}
        rotate={-14}
        shouldOrbit
        orbitDuration="15s"
        shouldSpin
        spinDuration="5s"
      >
        <Image
          src={StarIcon}
          className="size-[80px]"
          alt="Person peeking from behind a laptop"
        />
      </HeroOrbit>
      <HeroOrbit
        size={550}
        rotate={-14}
        shouldOrbit
        orbitDuration="60s"
        shouldSpin
        spinDuration="5s"
      >
        <Image
          src={StarIcon}
          className="size-[50px]"
          alt="Person peeking from behind a laptop"
        />
      </HeroOrbit>
      <HeroOrbit
        size={550}
        rotate={-14}
        shouldOrbit
        orbitDuration="40s"
        shouldSpin
        spinDuration="5s"
      >
        <Image
          src={StarIcon}
          className="size-[50px]"
          alt="Person peeking from behind a laptop"
        />
      </HeroOrbit>
      {/* small middle ring */}
      <HeroOrbit
        size={720}
        rotate={-14}
        shouldOrbit
        orbitDuration="20s"
        shouldSpin
        spinDuration="5s"
      >
        <Image
          src={StarIcon}
          className="size-[50px]"
          alt="Person peeking from behind a laptop"
        />
      </HeroOrbit>
      <HeroOrbit
        size={720}
        rotate={-14}
        shouldOrbit
        orbitDuration="80s"
        shouldSpin
        spinDuration="5s"
      >
        <Image
          src={StarIcon}
          className="size-[60px]"
          alt="Person peeking from behind a laptop"
        />
      </HeroOrbit>
      <HeroOrbit
        size={720}
        rotate={-14}
        shouldOrbit
        orbitDuration="15s"
        shouldSpin
        spinDuration="5s"
      >
        <Image
          src={StarIcon}
          className="size-[80px]"
          alt="Person peeking from behind a laptop"
        />
      </HeroOrbit>
      <HeroOrbit
        size={720}
        rotate={-14}
        shouldOrbit
        orbitDuration="60s"
        shouldSpin
        spinDuration="5s"
      >
        <Image
          src={StarIcon}
          className="size-[50px]"
          alt="Person peeking from behind a laptop"
        />
      </HeroOrbit>
      <HeroOrbit
        size={720}
        rotate={-14}
        shouldOrbit
        orbitDuration="40s"
        shouldSpin
        spinDuration="5s"
      >
        <Image
          src={StarIcon}
          className="size-[50px]"
          alt="Person peeking from behind a laptop"
        />
      </HeroOrbit>
      {/* small middle ring */}
      <HeroOrbit
        size={850}
        rotate={-14}
        shouldOrbit
        orbitDuration="20s"
        shouldSpin
        spinDuration="5s"
      >
        <Image
          src={StarIcon}
          className="size-[50px]"
          alt="Person peeking from behind a laptop"
        />
      </HeroOrbit>
      <HeroOrbit
        size={850}
        rotate={-14}
        shouldOrbit
        orbitDuration="80s"
        shouldSpin
        spinDuration="5s"
      >
        <Image
          src={StarIcon}
          className="size-[60px]"
          alt="Person peeking from behind a laptop"
        />
      </HeroOrbit>
      <HeroOrbit
        size={850}
        rotate={-14}
        shouldOrbit
        orbitDuration="15s"
        shouldSpin
        spinDuration="5s"
      >
        <Image
          src={StarIcon}
          className="size-[80px]"
          alt="Person peeking from behind a laptop"
        />
      </HeroOrbit>
      <HeroOrbit
        size={850}
        rotate={-14}
        shouldOrbit
        orbitDuration="60s"
        shouldSpin
        spinDuration="5s"
      >
        <Image
          src={StarIcon}
          className="size-[50px]"
          alt="Person peeking from behind a laptop"
        />
      </HeroOrbit>
      <HeroOrbit
        size={850}
        rotate={-14}
        shouldOrbit
        orbitDuration="40s"
        shouldSpin
        spinDuration="5s"
      >
        <Image
          src={StarIcon}
          className="size-[50px]"
          alt="Person peeking from behind a laptop"
        />
      </HeroOrbit>
      {/* small middle ring */}
      <HeroOrbit
        size={1000}
        rotate={-14}
        shouldOrbit
        orbitDuration="20s"
        shouldSpin
        spinDuration="5s"
      >
        <Image
          src={StarIcon}
          className="size-[50px]"
          alt="Person peeking from behind a laptop"
        />
      </HeroOrbit>
      <HeroOrbit
        size={1000}
        rotate={-14}
        shouldOrbit
        orbitDuration="80s"
        shouldSpin
        spinDuration="5s"
      >
        <Image
          src={StarIcon}
          className="size-[60px]"
          alt="Person peeking from behind a laptop"
        />
      </HeroOrbit>
      <HeroOrbit
        size={1000}
        rotate={-14}
        shouldOrbit
        orbitDuration="15s"
        shouldSpin
        spinDuration="5s"
      >
        <Image
          src={StarIcon}
          className="size-[80px]"
          alt="Person peeking from behind a laptop"
        />
      </HeroOrbit>
      <HeroOrbit
        size={1000}
        rotate={-14}
        shouldOrbit
        orbitDuration="60s"
        shouldSpin
        spinDuration="5s"
      >
        <Image
          src={StarIcon}
          className="size-[50px]"
          alt="Person peeking from behind a laptop"
        />
      </HeroOrbit>
      <HeroOrbit
        size={1000}
        rotate={-14}
        shouldOrbit
        orbitDuration="40s"
        shouldSpin
        spinDuration="5s"
      >
        <Image
          src={StarIcon}
          className="size-[50px]"
          alt="Person peeking from behind a laptop"
        />
      </HeroOrbit>
      <div className="flex flex-col items-center">
        <Image
          src={momojiImage}
          className="lg:h-46 lg:w-52 md:h-40 md:w-48 h-36 w-42"
          alt="Person peeking from behind a laptop"
        />
        <div className="bg-gray-950 border border-gray-800 px-5 py-2 inline-flex items-center gap-4 rounded-lg">
          <div className="bg-green-700 size-2.5 relative rounded-full">
            <div className="bg-green-500 absolute inset-0 rounded-full animate-ping"></div>
          </div>
          <div className="text-sm text-gray-400 font-poppins capitalize">
            Available for new projects
          </div>
        </div>
      </div>
      <div className="max-w-lg mx-auto">
        <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-white text-center mt-8">
          Building Exceptional User Experiences
        </h1>
        <p className="mt-4 text-center text-white/60 text-sm md:text-base lg:text-lg font-poppins">
          I specialize in creating seamless, engaging digital experiences that
          captivate users and drive results.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
        <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl">
          <span className="text-sm md:text-base lg:text-lg font-poppins font-medium">
            Explore My Work
          </span>
          <div className="animate-bounce">
            <Image
              src={ArrowDown}
              alt="Explore My Work"
              width={18}
              height={18}
            />
          </div>
        </button>
        <button className="inline-flex items-center gap-2 border-white bg-white text-gray-900 h-12 px-6 rounded-xl">
          <span>👋</span>
          <span className="text-sm md:text-base lg:text-lg font-poppins font-semibold">
            <p>Let&apos;s Connect</p>
          </span>
        </button>
      </div>
    </div>
  );
};

export default Banner;
