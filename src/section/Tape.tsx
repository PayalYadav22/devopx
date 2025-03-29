import Image from "next/image";
import StarIcon from "@/assets/icons/star-icon.svg";
import { Fragment } from "react";

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
        <div
          className="flex space-x-4 items-center whitespace-nowrap"
          style={{
            transform: "translateX(-750px)",
          }}
        >
          {words.concat(words).map((word, index) => (
            <div key={index} className="inline-flex items-center">
              <span className="text-gray-900 font-extrabold text-sm">
                {word}
              </span>
              <Image src={StarIcon} alt={word} className="h-6 w-6 mx-5" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tape;
