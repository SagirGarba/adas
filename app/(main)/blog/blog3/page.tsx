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
        ADAS-P Organises One Day Workshop for Strategy Formulation & Stakeholder
        Engagement on Aquaculture
      </h1>
      <div className="w-full h-[20rem] md:h-[40rem] relative mb-6">
        <Image
          src={Images[10]}
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
        The Adamawa State Agribusiness Support Programme ADAS-P has has
        organised a one day workshop on developing aquaculture sub sector in
        Adamawa state and also inaugurated a &quot;Technical Committee for the
        Development of Aquaculture Business Strategy in the state&quot;
      </p>
      <p className="text-xl mb-4">
        The theme of the workshop is developing aquaculture sub sector: strategy
        formulation & stakeholder engagement.
      </p>
      <p className="text-xl mb-4">
        Declaring the workshop open, the Hon. Commissioner Ministry for
        Livestock and Aquaculture Alh. Tijjani Atiku Maksha who commended
        Governor Ahmadu Umaru Fintiri for introducing first Agriculture bond
        programme in Nigeria, challenged all stakeholders to play their part in
        ensuring the success of the programme.
      </p>
      <p className="text-xl mb-4">
        Maksha hails ADAS-P for organising the workshop and engaging
        stakeholders to improve aquaculture in Adamawa which can help to boost
        the economy of the state.
      </p>
      <p className="text-xl mb-4">
        In his presentation, the lead Consultant Afrique HUB Network Mr.
        Olalekan Adeleke, said Adamawa is endowed with Fisheries Potential which
        if properly harnessed can improve the economy of the state and Adamawa
        can supply fish not for only the state but many states of country.
      </p>
      <p className="text-xl mb-4">
        The Consultant outlined limited structure & access to finance,
        inadequate technical expertise, climate change impact, reliance on
        importation as well as water quality and availability as some of the
        major challenges bedeviling the sector in the state.
      </p>
      <p className="text-xl mb-4">
        Olalekan explained that implementation of aquaculture business
        development strategies, promotion of commercially viable fish species,
        integration of small holder producers to supply chain and esterblishment
        of productive business linkages as solutions to the problems.
      </p>
      <p className="text-xl mb-4">
        In an overview of the Adamawa state aquaculture market strategies, a
        Rtd. University Don who specializes on aquaculture Dr. Aminu Raji who
        commended ADAS Programme for organising the workshop and wonderful jobs
        in improving the sector, appealed for the state government to revisit
        and update laws governing aquaculture for proper upgrade in the state.
      </p>
      <p className="text-xl mb-4">
        Earlier in a keynote address, the Lead Consultant and Chief Operating
        Officer of ADAS Programme Alh. Yunusa Ibrahim Gafai hails Governor
        Ahmadu Umaru Fintiri&apos;s foresight in introducing ADAS-P in Adamawa
        and restated their commitment to justify the confidence reposed in them.
      </p>
      <p className="text-xl mb-4">
        Gafai said ADAS-P has 8 major intervention pillars that includes
        improving access to market, finance and internally generated revenue
        IGR, inter-coordinnation, Clustering farmers and promotion of rural
        institutions and community development associations among others.
      </p>
      <p className="text-xl mb-4">
        The lead Consultant said ADAS Programme is not directly dealing with
        beneficiaries but rather through collaboration and facilitation (3rd
        party).
      </p>
      <p className="text-xl mb-4">
        Some of the inaugurated committee members includes Raynold Nuhu
        (Director Fisheries, Ministry of Livestock and Aquaculture Development)
        as Chairman while Emmanuel Bitrus serves as the Secretary.
      </p>
      <p className="text-xl mb-4">
        Others are Dr. Markus Danbaki, Linus Baka, Dr. Aminu Raji, Dr. Musa
        Mohammed among others.
      </p>
      <p className="text-xl mb-4">
        ADAS Programme is a public private partnership Programme initiative by
        the Adamawa State Government under the Ahmadu Umaru Fintiris led
        administration to build a competitive, profitable and sustainable
        agriculture in Adamawa state that empowers all actors within the
        agriculture eco-system to prosper.
      </p>
      <p className="text-xl mb-4">
        The mission of the programme is to promote smallholder commercialisation
        by fostering productive business linkages between smallholder farmers
        and selected agribusiness firms, access to markets, infrastructure,
        market structure and information asymmetry.
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
