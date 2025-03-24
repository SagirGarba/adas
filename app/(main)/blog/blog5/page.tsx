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
        ADAS-P Flags Off Community Engagements On Cluster Formation, Farmer
        Database Devt
      </h1>
      <div className="w-full h-[20rem] md:h-[40rem] relative mb-6">
        <Image
          src={Images[12]}
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
        The Adamawa State Agribusiness Support Programme, ADAS- P has
        simultaneously flagged off community stakeholders’ engagements for
        identification of community irrigation sites, cluster formation,
        suitability analysis, farmers database establishment and formation of
        community development associations across the three senatorial districts
        of the state.
      </p>
      <p className="text-xl mb-4">
        Speaking during the official opening ceremony in Yola, the
        Administrative Secretary of ADAS-P Implementation Committee, Mrs Joy
        Tarfa, said the programme is aimed at providing enabling environment for
        investors and commercialized agriculture as well as to ensure that only
        genuine farmers are captured to benefit from all support.
      </p>
      <p className="text-xl mb-4">
        Speaking separately, the District Head of Yola who is also the Daula
        Adamawa, Alh. Zubairu A. Mustapha and the Executive Chairman Yola South
        Local Government Area Council, Salihu Malkohi represented by DPM
        Fadimatu Abdussalam, expressed their readiness to support ADAS-P for the
        betterment of the citizens.
      </p>{" "}
      <p className="text-xl mb-4">
        In his remarks, the Acting Head of Component Three ADAS-P, Mr. Praise
        Dauda, explained that the programme targets 2,000 heacters across 11
        selected potential irrigation sites that include Yola south, Fufore,
        Girei, Song and Demsa LGA’s.
      </p>
      <p className="text-xl mb-4">
        Others, he said are Numan, Shelleng, Michika, Mubi south and Lamurde
        local government areas respectively.
      </p>{" "}
      <p className="text-xl mb-4">
        In southern zone, the leader of the delegation who is the Head of
        Component One ADAS-P, Dr. Tasi’u Idi led the team to Demsa local
        government area where he said the aim of program is to improve food
        production in the state through dry season farming support.
      </p>
      <div className="w-[65%] h-[30rem] mx-auto relative mb-6">
        <Image
          src={Images[13]}
          alt="ICT in Agriculture"
          layout="fill"
          className="rounded-lg"
        />
      </div>
      <p className="text-xl mb-4">
        {" "}
        According to him, the project is geared towards realizing the
        implementation of Governor Ahmadu Umaru Fintiri’s policies to ensure
        food security in the state.
      </p>
      <div className="w-[65%] h-[30rem] mx-auto relative mb-6">
        <Image
          src={Images[14]}
          alt="ICT in Agriculture"
          layout="fill"
          className="rounded-lg"
        />
      </div>
      <p className="text-xl mb-4">
        While in the northern zone, a delegation led by Head of Component Two
        ADAS-P, Mr James Birdling called on farmers to embrace dry season
        farming considering the change in weather and climate, saying this is
        the solution to the food insecurity bedeviling the country.
      </p>
      <div className="w-[65%] h-[30rem] mx-auto relative mb-6">
        <Image
          src={Images[15]}
          alt="ICT in Agriculture"
          layout="fill"
          className="rounded-lg"
        />
      </div>
      <p className="text-xl mb-4">
        To ensure suitability, this ADAS-P’s initiative will be carried out in
        collaboration with the office of the state Surveyor General, NIRSAL MFB,
        District Scribes/Heads, Directors agric and natural resources among
        stakeholders.
      </p>
      <div className="w-[65%] h-[30rem] mx-auto relative mb-6">
        <Image
          src={Images[16]}
          alt="ICT in Agriculture"
          layout="fill"
          className="rounded-lg"
        />
      </div>
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
