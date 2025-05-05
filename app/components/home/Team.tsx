"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

import { expertsData } from "@/app/utils/data";

const Team = () => {
  const [offsetX, setOffsetX] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);
  const currentX = useRef(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const carouselRef = useRef<HTMLDivElement>(null);
  const teamCarousel = [...expertsData, ...expertsData];

  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth >= 1024) {
        setCardsPerView(3);
      } else if (window.innerWidth >= 640) {
        setCardsPerView(2);
      } else {
        setCardsPerView(1);
      }
    };

    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);

    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  // Auto sliding
  useEffect(() => {
    intervalRef.current = setInterval(handleNext, 3000); // Change every 3 seconds

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current); // Clean up on component unmount
      }
    };
  });

  const handleNext = () => {
    setOffsetX((prev) => (prev >= teamCarousel.length / 2 - 1 ? 0 : prev + 1));
  };

  const handlePrevious = () => {
    setOffsetX((prev) => (prev <= 0 ? teamCarousel.length / 2 - 1 : prev - 1));
  };

  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    startX.current = "touches" in e ? e.touches[0].clientX : e.clientX;

    // Clear auto sliding on interaction
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;

    currentX.current = "touches" in e ? e.touches[0].clientX : e.clientX;
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);

    const swipeDistance = startX.current - currentX.current;
    const swipeThreshold = 50; // Adjust as needed

    if (swipeDistance > swipeThreshold) {
      handleNext(); // Swipe left
    } else if (swipeDistance < -swipeThreshold) {
      handlePrevious(); // Swipe right
    }

    // Restart auto sliding after interaction ends
    intervalRef.current = setInterval(handleNext, 3000);
  };

  return (
    <div
      className="carousel-container relative  bg-[#F4F4F4] wrapper py-28"
      onMouseDown={handleDragStart}
      onMouseMove={handleDragMove}
      onMouseUp={handleDragEnd}
      onMouseLeave={handleDragEnd}
      onTouchStart={handleDragStart}
      onTouchMove={handleDragMove}
      onTouchEnd={handleDragEnd}
    >
      {/* Main Content */}
      <div className="text-center">
        <button className="bg-white text-[#0B6623] px-6 py-1 rounded-full flex items-center mx-auto mb-6 sm:mb-12 text-sm sm:text-base">
          Meet Our Visionaries
        </button>
        <h2 className="sm:text-3xl md:text-[36px]  sm:mb-8  text-xl md:text-3xl lg:text-4xl font-bold text-black mb-6">
          Led by Expertise, Driven by{" "}
          <span className="text-[#0B6623]">Purpose</span>
        </h2>
        <p className="text-lg md:text-2xl sm:text-lg md:text-[20px] leading-[28px] sm:leading-[32px] md:mb-14 mb-10">
          Our founders and advisors are pioneers in agriculture, sustainability,
          and agritech innovation. They honor farming traditions while embracing
          modern solutions for a more sustainable future.
        </p>
      </div>

      {/* Experts Images Section */}
      <div className="relative overflow-hidden">
        <div
          className="flex gap-2 md:gap-4 relative"
          ref={carouselRef}
          style={{
            transform: `translateX(-${(offsetX * 100) / cardsPerView}%)`,
            transition: "transform 0.5s ease",
          }}
        >
          {teamCarousel.map((expert, index) => (
            <div
              key={`${expert.id}-${index}`}
              className="text-center"
              style={{ minWidth: `${70 / cardsPerView}%` }}
            >
              <Image
                src={expert.image}
                alt={expert.name}
                className="w-40 h-40 md:w-[280px] md:h-[280px] mx-auto mb-2 rounded-2xl"
              />
              <div className="text-[#03BBA] py-1 rounded-full text-center text-xl">
                {expert.name}
              </div>
              <p className="text-sm text-[#0B6623] mt-2 text-[18px] ">
                {expert.title}
              </p>
            </div>
          ))}
        </div>
        {/* You can enable buttons for manual control */}
        {/* <button
          className="swiper-button-prev absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-40"
          onClick={handlePrevious}
        >
          <Image src={Left} alt="Left" className="w-12 md:w-16 h-12 md:h-16" />
        </button>
        <button
          className="swiper-button-next absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-20"
          onClick={handleNext}
        >
          <Image
            src={Right}
            alt="Right"
            className="w-12 md:w-16 h-12 md:h-16"
          />
        </button> */}
      </div>
    </div>
  );
};

export default Team;
