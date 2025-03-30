"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import StarIcon from "@/component/svgs/star-icon.svg";

const words = [
  "HTML",
  "CSS",
  "C++",
  "PYTHON",
  "JAVASCRIPT",
  "REACT JS",
  "REACT NATIVE",
  "NEXT JS",
  "BOOTSTRAP",
  "TAILWINDCSS",
  "SQL",
  "MONGODB",
  "MYSQL",
  "NODE JS",
  "EXPRESS",
];

const Tape = () => {
  return (
    <div className="py-16 lg:py-24 overflow-hidden">
      <div
        className="bg-gradient-to-r from-emerald-300 to-sky-400 py-6 -mx-1"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 20%, black 90%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 20%, black 90%, transparent)",
        }}
      >
        <Swiper
          spaceBetween={0}
          slidesPerView="auto"
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            reverseDirection: false,
          }}
          speed={500}
          modules={[Autoplay]}
        >
          {words.concat(words).map((word, index) => (
            <SwiperSlide key={index} className="!w-auto">
              <div className="inline-flex items-center px-4">
                <span className="text-gray-900 font-extrabold text-sm">
                  {word}
                </span>
                <Image src={StarIcon} alt={word} className="h-6 w-6 mx-5" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Tape;
