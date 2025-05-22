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
      <h1 className="text-4xl font-bold text-center mb-6">Production Model</h1>
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

      <p className="text-xl mb-4">
        Complementing the aggregation strategy is the Out-Grower Business Model,
        which establishes direct linkages between farmers and key actors within
        the agricultural value chain. These actors include processors,
        off-takers, input suppliers, and various supporting institutions.
      </p>
      <p className="text-xl mb-4">
        Contract farming agreements form the basis of this model, ensuring a
        structured relationship and mutual benefits for all involved parties.
        Furthermore, to enhance farmer organization and market access, farmers
        are grouped into producer clusters. This clustering strengthens their
        collective voice in the market and improves their overall market
        integration.
      </p>
      <p className="text-xl mb-4">
        The program's sustainability is also addressed through the development
        of structured and formalized produce and livestock markets, which
        generate revenue to support ongoing operations and future investments
        within the agricultural sector.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
        <Link href="/forms/partnership">
          <button className="bg-[#0B6623] hover:bg-[#095421] text-white px-5 py-3 rounded-lg shadow-md transition-all duration-300">
            Join our Partnership Community
          </button>
        </Link>

        <a
          href="/businessModel"
          className="bg-[#0B6623] hover:bg-[#095421] text-white px-5 py-3.5 rounded-lg shadow-md transition-all duration-300"
        >
          Back to Business Model
        </a>
      </div>
    </div>
  );
};

export default BlogPost;
