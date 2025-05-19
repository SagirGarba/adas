"use client";

import React from "react";
import Image from "next/image";
import Images from "@/public/images/home/opportunity/index";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import Link from "next/link";
import { IoLogoFacebook } from "react-icons/io";
import { BsLinkedin } from "react-icons/bs";

const BlogPost = () => {
  return (
    <div className="wrapper pt-6">
      <h1 className="text-4xl font-bold text-center mb-6">
        Adamawa Soils and Soil Management
      </h1>
      <div className="w-full h-[20rem] md:h-[30rem] relative mb-6">
        <Image
          src={Images[3]}
          alt="ICT in Agriculture"
          layout="fill"
          className="rounded-lg"
        />
      </div>
      <div className="flex place-items-end gap-3 text-2xl my-5">
        <Link
          href="https://www.linkedin.com/company"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsLinkedin />
        </Link>
        <Link
          href="https://web.facebook.com/profile.php?id=61555734735593"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IoLogoFacebook />
        </Link>
        <Link
          href="https://www.instagram.com/adasprogramme_nigeria/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </Link>
        <Link
          href="https://x.com/adasprogrammeng"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter />
        </Link>
        <Link
          href="https://www.youtube.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaYoutube />
        </Link>
      </div>
      <p className=" mb-4">
        The soils of Adamawa State, like much of Northern Nigeria, are
        predominantly derived from the Basement Complex, with some areas formed
        from sandstone, shale, and alluvium. The key climatic factors
        influencing soil formation in the state are high temperature and
        rainfall, which accelerate the weathering process and contribute to the
        rich mineral content of the soils. These soils are largely classified as
        ferruginous tropical soils, known for their red or yellow iron oxide
        mottling and horizon differentiation.
      </p>
      <p className=" mb-4">
        The major soil types in Adamawa State include Luvisols, Regosols,
        Cambisols, Vertisols, and Lithosols, each with distinct characteristics,
        distributions, and agricultural potential:
      </p>
      <p className=" mb-4">
        I. Luvisols are common in Girei, Madagali, Gombi, and Hong areas. They
        are well-drained with high base saturation, moderate to high organic
        matter, and moderate acidity. Found on gentle slopes, they are suitable
        for a variety of crops due to their nutrient-holding capacity.
      </p>{" "}
      <p className=" mb-4">
        II. Regosols, the most widespread in the state, are immature, weakly
        developed soils found in hilly areas like Bajabure, Michika, and the
        Loko River floodplains. Despite low development, their montmorillonite
        clay content gives them good water and nutrient retention. They are
        cultivated with sorghum, maize, and millet.
      </p>
      <p className=" mb-4">
        III. Cambisols are found on mountainous terrains and areas like Gurin,
        Ngurore-Mayo-Belwa, and Fufore. These soils are moderately acidic, deep,
        and poorly drained with loamy to sandy textures. They show limited
        weathering and have minimal horizon development.
      </p>{" "}
      <p className=" mb-4">
        IV. Vertisols are heavy clay soils with high nutrient capacity but poor
        physical properties. Prone to cracking in dry seasons and waterlogging
        in wet ones, they are difficult to manage but productive under careful
        cultivation. Found in Malabu-Wurobokki, Guyuk, and Borrong-Shelleng,
        they support water-tolerant crops during the rainy season.
      </p>{" "}
      <p className=" mb-4">
        {" "}
        V. Lithosols are shallow, rocky soils with low productivity, found in
        mountainous regions and around Bajabure. These soils are acidic to
        neutral, have low organic matter, and are highly prone to erosion. They
        dry quickly and have limited root depth, making them suitable for hardy
        crops like sorghum and millet.
      </p>
      <p className=" mb-4">
        Despite variability in fertility and physical conditions, Adamawa’s
        soils support diverse agricultural activities. However, sustainable soil
        management—including erosion control, organic matter enhancement, and
        drainage improvement—is crucial for long-term productivity and
        resilience to climate impacts.
      </p>
      <div className="text-center">
        <a
          href="/agriOpportunity"
          className="bg-[#0B6623] text-white px-6 py-3 rounded-md hover:bg-[#3e704b] transition"
        >
          Back to Opportunities
        </a>
      </div>{" "}
    </div>
  );
};

export default BlogPost;
