import Hero from "@/app/components/about/Hero";
import HistoricalBackground from "@/app/components/about/HistoricalBackground";
import Mission from "@/app/components/about/Mission";
import Gallery from "@/app/components/home/Gallery";

import React from "react";

const page = () => {
  return (
    <div>
      <Hero />
      <Mission />
      <HistoricalBackground />
      <div id="our-impact">
        <Gallery />
      </div>
    </div>
  );
};

export default page;
