"use client";

import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import Images from "@/public/images/home/Gallery/index"
import Button from "../reusable/Button";
const Hero = () => {
 
   const slides = [Images[6], Images[7], Images[8]];
 
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
       <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center text-white text-center px-4 md:px-16 lg:px-32 py-20">
         <h1 className="text-4xl md:text-6xl font-bold mb-5">Our Work</h1>
         <p className="text-2xl md:text-3xl mt-4 py-10">
           Transforming Agriculture Through Innovation & Community Development
         </p>
         <Button />
       </div>
     </div>
   );
};

export default Hero;
