"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "@/app/utils/data";

const Testimonial = () => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <section className="bg-[#0B6623] py-16 text-white md:py-20">
      <div className="wrapper">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-green-100">
            Client Voice
          </p>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            What Our Clients Say
          </h2>
          <p className="text-lg leading-8 text-green-50/90 md:text-xl">
            Discover how ADAS-P has impacted agribusiness owners like you.
          </p>
        </div>

        <div className="mt-8 flex items-center justify-end gap-3">
          <button
            ref={prevRef}
            type="button"
            aria-label="Previous testimonials"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white transition hover:bg-white/20"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            ref={nextRef}
            type="button"
            aria-label="Next testimonials"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white transition hover:bg-white/20"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true, dynamicBullets: true }}
          navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
          onBeforeInit={(swiper) => {
            if (typeof swiper.params.navigation !== "object") return;
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="!pb-12 pt-2"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="flex h-full min-h-[360px] flex-col rounded-[1.5rem] border border-white/20 bg-white/95 p-6 text-center shadow-[0_20px_50px_-20px_rgba(0,0,0,0.35)]">
                <div className="mb-5 flex justify-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full border border-[#0B6623]/15 bg-[#f4fff7] p-1 shadow-sm">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={80}
                      height={80}
                      className="h-20 w-20 rounded-full object-cover"
                    />
                  </div>
                </div>

                <div className="mb-4 flex justify-center text-[#0B6623]">
                  <Quote className="h-7 w-7" />
                </div>

                <p className="flex-1 text-base leading-8 text-[#242424]">
                  “{testimonial.feedback}”
                </p>

                <div className="mt-5">
                  <h3 className="text-lg font-semibold text-[#0B6623]">
                    {testimonial.name}
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;
