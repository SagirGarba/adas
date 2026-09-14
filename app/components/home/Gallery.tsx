"use client";

import React from "react";
import Image from "next/image";
import Images from "@/public/images/home/Gallery/index";
import Button from "../reusable/Button";

const Gallery = () => {
  const galleryImages = Images as Array<string | { src: string }>;

  const captions = [
    {
      text: "Inuaguration of Aquaculture Committee",
      location: "Jimeta-Yola, Adamawa",
    },
    {
      text: "Aquaculture Workshop Group Picture",
      location: "Jimeta-Yola, Adamawa",
    },
    {
      text: "Aquaculture Visitation Assessment MCRP",
      location: "Jimeta-Yola, Adamawa",
    },
    {
      text: "Engagement, Promoting Cooperative Federation",
      location: "Min, of Coop Dev. Adamawa",
    },
    {
      text: "MCRP Aquaculture Production Assessment",
      location: "MCRP Production Center, Adamawa",
    },
    { text: "Community Engagement", location: "Song LGA, Adamawa" },
    {
      text: "ADAS-P in attendance at Training on Sugar cane variety selection",
      location: "Ilorin, Kwara",
    },
    {
      text: "ADAS-P in attendance at Workshop organised by Action against Hunger",
      location: "Yola-North, Adamawa",
    },
    {
      text: "ADAS-P engagement meeting with National Sugar council and Dangote Savannah Rifenery",
      location: "Numan LGA, Adamawa",
    },
    {
      text: "ADAS-P engagement meeting with Technology Incubation Center",
      location: "Yola-North LGA, Adamawa",
    },
    {
      text: "ADAS-P engagement meeting with PAWECCA officials",
      location: "Yola-North LGA, Adamawa",
    },
    {
      text: "ADAS-P Engagement meeting with Adamawa Mortgage bank and Mubi cattle merchant on CGS.",
      location: "Mubi, Adamawa",
    },
    { text: "Community Engagement", location: "Numan LGA, Adamawa" },
    { text: "Community Engagement", location: "Demsa LGA, Adamawa" },
    { text: "Community Engagement", location: "Demsa LGA, Adamawa" },
    { text: "Community Engagement", location: "Demsa LGA, Adamawa" },
    { text: "Community Engagement", location: "Demsa LGA, Adamawa" },
    {
      text: "Inuaguration of Aquaculture Committee",
      location: "Jimeta-Yola, Adamawa",
    },
  ];

  return (
    <div className=" ">
      <div className="wrapper px-5">
        <div className="text-center p-6 pb-16">
          <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-black -mb-6">
            Our Impact
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-4 gallery my-3">
          {captions.map((caption, index) => {
            const image = galleryImages[index % galleryImages.length];
            const imageSrc = typeof image === "string" ? image : image.src;

            return (
              <div key={index} className="relative p-2">
                <Image
                  src={imageSrc}
                  alt={caption.text}
                  width={800}
                  height={600}
                  className="rounded-xl w-full h-auto object-cover transition-transform duration-300 hover:scale-110"
                />

                <div className="absolute bottom-0 w-full text-[#0B6623] bg-opacity-50 bg-white text-center py-2 rounded-b-xl">
                  <p className="text-sm font-semibold">{caption.text}</p>
                  <p className="text-xs">{caption.location}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col items-center justify-center p-5">
        <Button />
      </div>
    </div>
  );
};

export default Gallery;
