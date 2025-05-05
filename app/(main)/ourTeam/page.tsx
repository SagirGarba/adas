"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { TeamMember, teamsData } from "@/app/utils/data";
import Hero from "@/app/components/team/Hero";

interface TeamCarouselProps {
  teamName: string;
  teamMembers: TeamMember[];
}

const TeamCarousel: React.FC<TeamCarouselProps> = ({ teamMembers }) => {
  const [offsetX, setOffsetX] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);
  const currentX = useRef(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const carouselRef = useRef<HTMLDivElement | null>(null);

  // Duplicate array for smooth infinite scroll
  const teamCarousel = [...teamMembers, ...teamMembers];

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

  useEffect(() => {
    intervalRef.current = setInterval(handleNext, 3000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
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
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;
    currentX.current = "touches" in e ? e.touches[0].clientX : e.clientX;
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    const swipeDistance = startX.current - currentX.current;
    const swipeThreshold = 50;
    if (swipeDistance > swipeThreshold) handleNext();
    else if (swipeDistance < -swipeThreshold) handlePrevious();
    intervalRef.current = setInterval(handleNext, 3000);
  };

  return (
    <div className="carousel-container relative bg-[#F4F4F4] wrapper py-7">
      <div
        className="relative overflow-hidden"
        onMouseDown={handleDragStart}
        onMouseMove={handleDragMove}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
        onTouchStart={handleDragStart}
        onTouchMove={handleDragMove}
        onTouchEnd={handleDragEnd}
      >
        <div
          className="flex gap-4"
          ref={carouselRef}
          style={{
            transform: `translateX(-${(offsetX * 100) / cardsPerView}%)`,
            transition: "transform 0.5s ease",
          }}
        >
          {teamCarousel.map((member, index) => (
            <div
              key={`${member.id}-${index}`}
              className="text-center"
              style={{ minWidth: `${70 / cardsPerView}%` }}
            >
              <Image
                src={member.image || "/images/paceholder.jpeg"}
                alt={member.name}
                className="w-80 h-80 md:w-[280px] md:h-[280px] mx-auto mb-2 rounded-2xl"
                width={280}
                height={280}
                placeholder="blur" // Enables blur effect if it's a local Next.js image
                blurDataURL="/images/paceholder.jpeg" // Optional: Helps with smooth loading
                unoptimized={!member.image} // Disable optimization for placeholders
              />

              <div className="text-[#03BBA] py-1 text-sm">{member.name}</div>
              <p className="text- text-[#0B6623] mt-2 ">{member.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const TeamSection: React.FC = () => {
  const [selectedTeam, setSelectedTeam] = useState(teamsData[0].category);

  return (
    <>
      <Hero />

      <div className="wrapper py-7">
        {/* Tab Navigation */}
        <div className="flex justify-center border-b-2 border-gray-300 mb-5">
          {teamsData.map((team) => (
            <button
              key={team.category}
              className={`md:px-6 py-2 md:text-lg font-semibold ${
                selectedTeam === team.category
                  ? "border-b-4 border-[#0B6623] text-[#0B6623]"
                  : "text-gray-500"
              }`}
              onClick={() => setSelectedTeam(team.category)}
            >
              {team.category}
            </button>
          ))}
        </div>

        {/* Render Selected Team */}
        {teamsData.map(
          (team) =>
            selectedTeam === team.category && (
              <div key={team.category}>
                <h3 className="text-center font-bold md:text-3xl mb-10 text-[#0B6623]">
                  {team.category}
                </h3>
                <TeamCarousel
                  teamName={team.category}
                  teamMembers={team.members}
                />
              </div>
            )
        )}
      </div>
    </>
  );
};

export default TeamSection;
