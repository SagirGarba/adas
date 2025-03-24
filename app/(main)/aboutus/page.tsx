import Hero from "@/app/components/about/Hero";
import Mission from "@/app/components/about/Mission";
import Gallery from "@/app/components/home/Gallery";

import React from "react";

const page = () => {
  return (
    <div>
      <Hero />
      <Mission />
      <Gallery />
    </div>
  );
};

export default page;
