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
        ADAMAWA STATE CLIMATE
      </h1>
      <div className="w-full h-[20rem] md:h-[30rem] relative mb-6">
        <Image
          src={Images[1]}
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
        Adamawa State experiences a tropical savannah climate, characterized by
        distinct wet and dry seasons, with significant seasonal and spatial
        variations in key climatic elements such as sunshine, temperature,
        rainfall, evaporation, and humidity.
      </p>
      <p className=" mb-4">
        Sunshine in the state varies throughout the year. Between January and
        April, the state records an average of 7.5 hours of sunshine per day,
        which decreases to about 6.3 hours during the rainy season (June to
        September) due to cloud cover. Sunshine increases again from October to
        December, reaching about 8.8 hours daily.
      </p>
      <p className=" mb-4">
        Temperatures are high year-round due to consistent solar radiation. The
        hottest period is from March to April, with maximum temperatures
        reaching 40°C. After the onset of rains, temperatures drop slightly due
        to increased cloudiness. The coolest period is during the harmattan
        season (December to January), with minimum temperatures dropping to
        around 18°C. Mean monthly temperatures range from 26°C in the southern
        highlands to 29°C in central areas, influenced by elevation. Long-term
        climate data indicate a gradual rise in both maximum and minimum
        temperatures over the past 40 years, suggesting a warming trend linked
        to climate change.
      </p>{" "}
      <p className=" mb-4">
        Evaporation rates are generally high due to strong solar radiation,
        peaking between February and April and declining during the rainy season
        when cloud cover reduces radiation levels. Relative humidity follows an
        inverse pattern: it is lowest between January and March (20–30%), begins
        to rise in April, and peaks in August at about 83%, coinciding with the
        rainy season.
      </p>
      <p className=" mb-4">
        Rainfall is the most variable climatic element. Controlled by the
        movement of the Inter-Tropical Discontinuity (ITD), rainfall begins in
        March and increases steadily, peaking in August when the ITD reaches its
        northernmost position. By October, rainfall declines sharply. Mean
        annual rainfall varies with elevation and is highest in areas like Sugu.
        Yola receives an average of 200.8 mm in August, while Mubi and Gyawana
        record similar peak values. The rainy season lasts an average of 152 to
        161 days, with onset typically in early to mid-May and cessation by
        early October.
      </p>{" "}
      <p className=" mb-4">
        Despite some reduction in annual rainfall in recent decades, climatic
        conditions in Adamawa generally support agricultural activities, as
        temperature, sunshine, and humidity remain within ranges conducive for
        crop growth.
      </p>{" "}
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
