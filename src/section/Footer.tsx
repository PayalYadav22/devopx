"use client";

import Image from "next/image";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";

import { footerLinks } from "@/data/data";

const Footer = () => {
  return (
    <footer className="relative -z-10 overflow-x-clip lg:px-30">
      <div
        className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 -z-10"
        style={{
          maskImage:
            "radial-gradient(50% 50% at bottom center, black, transparent)",
          WebkitMaskImage:
            "radial-gradient(50% 50% at bottom center, black, transparent)",
        }}
      ></div>
      <div className="font-poppins">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8">
          <div className="text-white/40">
            &copy; {new Date().getFullYear()} All Rights Reserved By{" "}
            <span className="text-white tracking-wide">Payal Yadav</span>.
          </div>
          <nav className="flex flex-col md:flex-row items-center gap-8">
            {footerLinks.map((footer, i) => (
              <a
                href={footer.href}
                className="inline-flex items-center text-sm gap-1.5"
                key={i}
              >
                <span className="font-medium"> {footer.title}</span>
                <Image
                  src={ArrowUpRightIcon.src}
                  alt={footer.title}
                  width={15}
                  height={15}
                />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
