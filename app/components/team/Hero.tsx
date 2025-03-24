"use client";

import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import Images from "@/public/images/home/Gallery/index";
import Button from "../reusable/Button";

const Hero = () => {
  const slides = [Images[9], Images[13], Images[2]];

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };

  return (
    <div className="relative h-[70vh] lg:h-screen">
      {/* Image Slider */}
      <Slider {...settings}>
        {slides.map((image, index) => (
          <div key={index} className="w-full h-[70vh] lg:h-screen relative">
            <Image
              src={image}
              alt={`Slide ${index + 1}`}
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>
        ))}
      </Slider>

      {/* Static Text Overlay */}
      <div className="absolute inset-0 bg-black/70 flex flex-col md:items-center md:justify-center text-white md:text-center px-4 md:px-16 lg:px-32 py-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-5">
          Our Dedicated Team
        </h1>
        <p className="text-2xl md:text-3xl mt-4 py-10">
          With unwavering dedication, expertise, and a shared vision for agricultural
          transformation, we work tirelessly to empower communities, foster
          innovation, and create sustainable solutions that shape the future of
          agribusiness.
        </p>
        <Button />
      </div>
    </div>
  );
};

export default Hero;
