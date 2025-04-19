"use client";

import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import Images from "@/public/images/home/Gallery/index";
import Button from "../reusable/Button";

const BusinessModelHero = () => {
  const slides = [Images[10], Images[11], Images[12]];

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
  };

  return (
    <div className="relative h-[70vh] lg:h-screen">
      {/* Background Image Carousel */}
      <Slider {...settings}>
        {slides.map((image, index) => (
          <div key={index} className="w-full h-[70vh] lg:h-screen relative">
            <Image
              src={image}
              alt={`ADAS Business Model Slide ${index + 1}`}
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>
        ))}
      </Slider>

      {/* Overlay Content */}
      <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-white text-center px-4 md:px-16 lg:px-32 py-20">
        <h1 className="text-2xl md:text-6xl font-bold mb-5">
          ADAS Business Models
        </h1>
        <p className=" md:text-3xl mt-4 py-10">
          Empowering smallholder farmers through strategic aggregation,
          structured production, and innovative credit guarantees.
        </p>
        <div className="mt-8">
          <Button text="Join Our Partnership Community" />
        </div>
      </div>
    </div>
  );
};

export default BusinessModelHero;
