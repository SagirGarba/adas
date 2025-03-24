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
        2024 Seed Connect Africa: Adamawa’s ADAS-P to Partner with 6
        Organizations to Promote Value Chain
      </h1>
      <div className="w-full h-[20rem] md:h-[40rem] relative mb-6">
        <Image
          src={Images[9]}
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
        The Adamawa State Agribusiness Support Programme (ADAS-P) has expressed
        its readiness to collaborate with six organizations that have shown
        interest in partnering with the program. This development follows a
        successful exhibition of verified seeds by Adamawa Community-Based Seed
        Entrepreneurs trained by IITA and registered, while ADAS-P provided
        technological innovations, foundation seeds, linkages, fertilizers, and
        sponsorship to Seed Connect.
      </p>
      <h2 className="text-xl font-semibold mb-3">
        The six organizations that have expressed their readiness to partner
        with ADAS-P are:
      </h2>
      <ol className="list-disc pl-6  mb-4 text-xl">
        <li>
          Foundation for Sustainable Small Holder Solutions (Seed Foundation
          Initiative) in collaboration with the Federal University of
          Agriculture, Makurdi.
        </li>
        <li>Interra Network, a digitalized private extension agency.</li>
        <li>Eco-Basic Seeds, a certified foundation seed company.</li>
        <li>East West Seed.</li>
        <li>Prossiva Network.</li>
        <li>Olam Group.</li>
      </ol>
      <p className="text-xl mb-6">
        This year’s Seed Connect Africa Conference focuses on leveraging seed
        technologies to scale agricultural productivity for sustained food and
        nutrition security, despite growing challenges such as insecurity,
        pandemics, and climate change.
      </p>
      <p className=" text-xl mb-6">
        The conference provides an opportunity for ADAS-P to showcase its
        innovations and support, as well as discuss and exchange ideas with
        global stakeholders on propelling Nigeria’s seed sector towards food
        security and net exportation of agricultural produce.
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
