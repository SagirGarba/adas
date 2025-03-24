"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { testimonials } from "@/app/utils/data";


const Testimonial = () => {
  return (
    <section className="wrapper py-16 bg-[#0B6623] text-white">
      <div className="text-center">
        <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-6">
          What Our Clients Say
        </h2>
        <p className="text-lg md:text-2xl mb-10">
          Discover how ADAS-P has impacted agribusiness owners like you.
        </p>
      </div>

      {/* Swiper Carousel */}
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        className="pb-8"
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className="bg-white p-6 rounded-lg shadow-md text-center flex flex-col justify-between h-[350px]">
              <div className="w-20 h-20 mx-auto mb-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={80}
                  height={80}
                  className="rounded-full"
                />
              </div>
              <p className="text-[#242424] italic flex-1">
                {testimonial.feedback}
              </p>
              <h3 className="text-lg font-semibold text-[#0B6623]">
                {testimonial.name}
              </h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonial;