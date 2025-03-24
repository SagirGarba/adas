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
        ADAS-Programme Ltd. Making Adamawa An Icon At The 2024 Northeast
        Domestic Trade Fair.
      </h1>
      <div className="w-full h-[20rem] md:h-[40rem] relative mb-6">
        <Image
          src={Images[11]}
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
        The Adamawa State Agribusiness Support Programme Ltd. ADAS-P is making
        spectacular presentations and market linkages at the 15th Edition of the
        Nigeria Northeast Domestic Trade Fair holding at Ibrahim Babangida
        Square Bauchi state.
      </p>
      <p className="text-xl mb-4">
        This follows strong partnership with Adamawa Women Agro-processors &
        supporting several producers of different foods such as spices, Kunun
        Aya powder, Garin Kunu, Garin Danwake, Diabetes flour/corn food,
        community based seed producers among many others.
      </p>
      <p className="text-xl mb-4">
        After supporting the processors, ADAS-P Ltd. also shouldered the
        responsibility of taking them to the trade fair in Bauchi state.
      </p>{" "}
      <p className="text-xl mb-4">
        Meanwhile ADAS Programme Ltd. is linking different categories of
        producers to marketers/offtakers and as well identified and discussed
        with entrepreneurs blessed with wonderful skills and creativities with
        the aim of supporting them to expand their business.
      </p>
      <p className="text-xl mb-4">
        The Chief Operating Officer of ADAS Programme Ltd. Mal. Yunusa Ibrahim
        Gafai who is extremely delighted with the achievement recorded before
        and during the ongoing trade fair, promise to support them.
      </p>{" "}
      <p className="text-xl mb-4">
        The Administrative Secretary of ADAS Programme Implementation Committee
        Mrs. Joy Tarfa urged women to unveil themselves to enable them benefit
        from the programme.
      </p>{" "}
      <p className="text-xl mb-4">
        {" "}
        ADAS-P pavilion received organizations and high ranking personalities
        that includes Commissioners, Permanent Secretaries, Members of the state
        Assembly among others.
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
