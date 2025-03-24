import React from "react";
import Hero from "../components/home/Hero";
import OurImpact from "../components/home/OurImpact";
import Whatwedo from "../components/home/Whatwedo";
import HowWeHelp from "../components/home/Howwehelp";

import Partners from "../components/home/Partners";
import AboutUs from "../components/home/AboutUs";
import Testimonial from "../components/home/Testimonial";

const page = () => {
  return (
    <div>
      <Hero /> <OurImpact /> <AboutUs /> <Whatwedo /> <HowWeHelp />{" "}
      <Testimonial />
      <Partners />
    </div>
  );
};

export default page;
