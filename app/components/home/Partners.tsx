"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Images from "@/public/images/home/Parners/index";

const logos = [
  Images[0],
  Images[1],
  Images[2],
  Images[3],
  Images[4],
  Images[5],
  Images[6],
  Images[7],
  Images[8],
  Images[9],
];

const Partners = () => {
  return (
    <div className="overflow-hidden wrapper py-12">
      <h2 className="text-xl md:text-3xl lg:text-4xl text-center font-bold text-black mb-20">
        Our Partners
      </h2>
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex w-max space-x-8"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          {[...logos, ...logos].map((logo, index) => (
            <div key={index} className=" flex items-center justify-center  ">
              <Image
                src={logo}
                alt="Brand Logo"
                width={128}
                height={64}
                className="object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Partners;
