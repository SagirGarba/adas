"use client";

import React from "react";
import Image from "next/image";
import Images from "@/public/images/blog/index";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import Link from "next/link";
import { IoLogoFacebook } from "react-icons/io";
import { BsLinkedin } from "react-icons/bs";

const BlogPost = () => {
  return (
    <div className="wrapper pt-6">
      <h1 className="text-4xl font-bold text-center mb-6">
        YOLA NORTH LGA CHAIR COMMENDS ADAS-P INNOVATIONS, EXPRESSES READINESS
        FOR PARTNERSHIP
      </h1>
      <div className="w-full h-[20rem] md:h-[40rem] relative mb-6">
        <Image
          src={Images[17]}
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
      <p className=" text-lg mb-4 italic">By Abdulaziz Abubakar Damare</p>
      <p className="text-xl mb-4">
        The Executive Chairman of Yola North Local Government Council, Hon.
        Barr. Jibril Ibrahim, has commended the Adamawa State Agribusiness
        Support Programme (ADAS-P) for its innovative initiatives aimed at
        improving the standard of living and boosting economic activities in
        Adamawa State.
      </p>
      <p className="text-xl mb-4">
        Hon. Jibril Ibrahim made this known during a meeting with the ADAS-P
        management team, who paid a courtesy visit to his office at the Local
        Government Secretariat to seek a partnership for enhancing and adding
        value to backyard farming across the local government area.
      </p>
      <p className="text-xl mb-4">
        The council chairman expressed his readiness to key into ADAS-P
        initiatives, particularly in empowering people through fish and poultry
        farming, vegetable and spice processing, market enterprise development,
        and market linkages, among other areas.
      </p>{" "}
      <p className="text-xl mb-4">
        He further noted that the programme aligns with his
        administration&apos;s policies to empower youth and women. He also
        appealed to ADAS-P to include capacity-building initiatives for
        residents of Yola North and assured the team that the local government
        would consider the appropriate timeline to commence the programme.
      </p>
      <p className="text-xl mb-4">
        Earlier in his remarks, Dr. Tasi&apos;u Yusuf Idi, the Head of Component
        One of the programme responsible for the promotion of value chain
        development and climate-smart agriculture disclosed that ADAS-P had
        identified some backyard farmers and 10 brooders for an upgrade. These
        farmers will be provided with improved species as part of the pilot
        phase of the programme.
      </p>{" "}
      <p className="text-xl mb-4">
        In response to ADAS-P request, the Yola North Local Government Council
        is expected to provide mature Noiler chickens and incubators for each
        cluster.
      </p>{" "}
      <p className="text-xl mb-4">
        {" "}
        Speaking separately, the Director of Agriculture and the Sectional Head
        of Agriculture for Yola North appreciated ADAS-P for selecting Noiler
        chickens for the programme, citing their resistance to diseases and ease
        of feeding.
      </p>
      <p className="text-xl mb-4">
        Also present at the meeting were relevant representatives of the Yola
        North Legislative Council.
      </p>
      <div className="text-center">
        <a
          href="/blog"
          className="bg-[#0B6623] text-white px-6 py-3 rounded-md hover:bg-[#3e704b] transition"
        >
          Back to Blog
        </a>
      </div>
    </div>
  );
};

export default BlogPost;
