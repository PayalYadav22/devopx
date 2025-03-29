"use client";

import grainImage from "@/assets/images/grain.jpg";
import Image from "next/image";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";

const Contact = () => {
  return (
    <div className="py-16 pt-12 lg:py-24 lg:pt-20 lg:px-30 px-3">
      <div className="">
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-10 px-10 rounded-3xl text-center  md:text-left relative overflow-hidden z-0">
          <div
            className="absolute inset-0 opacity-5 -z-10"
            style={{
              backgroundImage: `url(${grainImage.src})`,
            }}
          ></div>
          <div className="flex flex-col gap-10 md:gap-0 lg:gap-0 md:flex-row justify-between items-center">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl">
                Let&apos;s create something amazing together
              </h2>
              <p className="text-sm md:text-base mt-2">
                Ready to bring your next project to life? Let&apos;s connect and
                discuss how I can help you achieve your goal.
              </p>
            </div>
            <div>
              <button className="text-white bg-gray-900 inline-flex items-center h-12 px-6 rounded-xl gap-2 w-max border border-gray-900 ">
                <span className="font-semibold ">Contact Me</span>
                <Image
                  src={ArrowUpRightIcon}
                  width={20}
                  height={20}
                  alt="Arrow Up"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
