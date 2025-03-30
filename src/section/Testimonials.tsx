"use client";

import Image from "next/image";
import Header from "@/component/Header";
import Card from "@/component/card/Card";
import { testimonials } from "@/data/data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Testimonials = () => {
  return (
    <div className="lg:px-30 px-3">
      <Header
        eyebrow="Happy Clients"
        title="What Clients Say about Me"
        description="Don't just take my word for it. See what my clients have to say about my work."
      />
      <div className="mt-16 px-3">
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 1000, disableOnInteraction: true }}
          modules={[Autoplay]}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((testimonial, i) => (
            <SwiperSlide key={i}>
              <Card className="p-6 md:p-8 flex flex-col h-[300px]">
                <div className="flex gap-4 items-center">
                  <div className="size-14 bg-gray-700 inline-flex items-center justify-center rounded-full flex-shrink-0">
                    <Image
                      src={testimonial.avatar}
                      height={50}
                      width={50}
                      alt={testimonial.name}
                    />
                  </div>
                  <div className="flex flex-col font-poppins">
                    <span className="font-semibold tracking-widest">
                      {testimonial.name}
                    </span>
                    <span className="text-white/50 text-sm">
                      {testimonial.position}
                    </span>
                  </div>
                </div>
                <p className="font-poppins mt-4 md:mt-6 text-sm md:text-base lg:text-base mb-8 flex-1">
                  {testimonial.text}
                </p>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
