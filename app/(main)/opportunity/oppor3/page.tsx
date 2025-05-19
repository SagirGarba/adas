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
        ADAMAWA STATE HYDROLOGY AND WATER RESOURES
      </h1>
      <div className="w-full h-[20rem] md:h-[30rem] relative mb-6">
        <Image
          src={Images[2]}
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
        Adamawa State is characterized by three main drainage systems: the
        Benue, Yadzeram, and Taraba. The Benue River, the most prominent,
        originates from the Cameroonian highlands and flows southward to join
        the Niger River at Lokoja. Its major tributaries include the Gongola,
        Belwa, Inne, Kilange, Loko, and Faro Rivers. These rivers typically
        flood during the rainy season but become dry with sandy beds in the dry
        season.
      </p>
      <p className=" mb-4">
        The Yadzeram River begins in the Hudu Hills east of Mubi and flows
        northward into Lake Chad. Its key tributaries are the Moda, Dilesimi,
        Wandu, and Bani Rivers. Meanwhile, the Taraba River rises from the Jombi
        Mountains in the extreme south and flows westward to merge with the
        Benue River in neighboring Taraba State. Its tributaries include Yim,
        Butale, Njuman, and Kam.
      </p>
      <p className=" mb-4">
        While Adamawa has considerable surface water resources, they are
        unevenly distributed across regions and seasons. Many rivers and ponds
        dry up during the dry season, with only deeper water bodies like Lakes
        Njuwa and Gerio retaining water. Additionally, groundwater levels drop
        sharply in the dry season due to seepage and high evapotranspiration
        rates.
      </p>{" "}
      <p className=" mb-4">
        Groundwater remains a crucial water source in the state, especially
        through wells and boreholes. Most urban centers outside Yola rely
        heavily on groundwater. The state’s geological structure influences
        groundwater availability, with about half of it underlain by
        pre-Cambrian basement complex rocks and the other half by sedimentary
        formations. Groundwater from basement rocks is less predictable and
        often has low yields, whereas sedimentary areas typically offer better
        yields, especially in classic formations that provide reliable aquifers.
        However, limestone formations should be avoided due to the hardness they
        impart to water.
      </p>
      <p className=" text-lg mb-4 italic">
        Extracted from Adamawa State in Maps (An article by A.A. Adebayo and A.
        S. Umar, 1999)
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
