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
        IRRIGATED AGRICULTURE IN ADAMAWA STATE
      </h1>
      <div className="w-full h-[20rem] md:h-[30rem] relative mb-6">
        <Image
          src={Images[6]}
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
        Adamawa State offers one of Nigeria’s most promising environments for
        irrigated agriculture. Bordered by rivers Benue, Gongola, Yedzaram, and
        others, the state’s geography and climate—characterized by seasonal
        rainfall variability—have historically supported and continue to sustain
        a thriving irrigation system.
      </p>
      <p className=" mb-4">
        {" "}
        With an estimated 250,900 hectares of irrigable land identified across
        five major sub-basins by the Upper Benue River Basin Development
        Authority (UBRBDA), the State is well-positioned for year-round crop
        production. Major irrigation projects like Lake Gerio, Kiri Dam, Tallum,
        and Mayo Ine demonstrate significant investment potential, especially in
        rice, sugarcane, maize, and vegetable farming.
      </p>
      <p className=" mb-4">
        {" "}
        Government agencies such as UBRBDA, Adamawa State Agricultural
        Development Programme (ADADP), and the Adamawa State Fadama Coordination
        Office (ADSFCO) are actively supporting the sector through land
        development, extension services, improved inputs, and farmer
        cooperatives. Over 185,000 farmers are already engaged in irrigated
        agriculture, supported with infrastructure, water pumps, technical
        guidance, and cooperative networks.
      </p>
      <p className=" mb-4">Notable investment-ready opportunities include: </p>
      <ul className=" mb-4">
        <li>
          • Gerio Irrigation Project (120 ha developed, 1,200 participating
          farmers)
        </li>
        <li>
          {" "}
          • Kiri Dam Project (7,000 ha developed for commercial sugarcane){" "}
        </li>
        <li>• Tallum Irrigation (400 ha potential, underutilized) </li>
        <li>
          • Minor Schemes at Dasin Hausa and Ganye with high per-hectare
          productivity{" "}
        </li>
        <li>
          • Fadama Clusters in Fufore, Numan, Yola South, Mayo Belwa, and
          Lamurde supporting dual-season rice production
        </li>
      </ul>
      <p className=" mb-4">
        The State Government is also advancing large-scale projects such as
        proposed dams in Dasin Hausa (30,000 ha potential) and Guyuk (19,000
        ha)—ideal for public-private partnerships.
      </p>{" "}
      <p className=" mb-4">
        In addition to public projects, a growing number of private irrigators
        are successfully cultivating high-value crops, proving the commercial
        viability of irrigated agriculture across Adamawa.
      </p>
      <p className=" mb-4">Why Invest?</p>
      <ul className=" mb-4">
        <li>
          • Extensive, underutilized fertile land
          <ul className=" mb-4">
            <li>
              • Supportive state and federal policies (e.g., Anchor Borrowers
              Scheme)
            </li>
            <li> • Available water resources and infrastructure</li>
            <li> • High farmer participation and established cooperatives </li>
            <li>
              • Strong demand for irrigated crops locally and across the region
            </li>
          </ul>
        </li>
      </ul>{" "}
      <p className=" mb-4">
        Adamawa State is ripe for investment in irrigated agriculture. Partner
        with us to scale food production, unlock export potential, and transform
        rural economies.
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
