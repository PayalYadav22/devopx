import Image from "next/image";
import Header from "@/component/Header";
import Card from "@/component/card/Card";

import { testimonials } from "@/data/data";

const Testimonials = () => {
  return (
    <div className="lg:px-30">
      <Header
        eyebrow="Happy Clients"
        title="What Clients Say about Me"
        description="Dont't just take my word for it. See what my clients have to say about my work."
      ></Header>
      <div
        className="flex mt-16 px-3 overflow-x-clip"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 20%, black 90%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 20%, black 90%, transparent)",
        }}
      >
        <div className="flex gap-8 flex-none">
          {testimonials.map((testimonial, i) => (
            <Card key={i} className="max-w-xs md:max-w-md p-6 md:p-8">
              <div className="flex gap-4 items-center">
                <div className="size-14 bg-gray-700 inline-flex items-center justify-center rounded-full flex-shrink-0">
                  <Image
                    src={testimonial.avatar}
                    height={50}
                    width={50}
                    alt={testimonial.name}
                  />
                </div>
                <div className="flex flex-col font-poppins ">
                  <span className="font-semibold tracking-widest">
                    {testimonial.name}
                  </span>
                  <span className="text-white/50 text-sm">
                    {testimonial.position}
                  </span>
                </div>
              </div>
              <p className="font-poppins mt-4 md:mt-6 text-sm md:text-base lg:text-base mb-8">
                {testimonial.text}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
