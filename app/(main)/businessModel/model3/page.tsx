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
        ADAS Credit Guarantee Scheme
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

      <p className="text-xl mb-4">
        ADAS Credit Guarantee Scheme. The ADAS Credit Guarantee Scheme
        (ADAS-CGS) is a key initiative designed to improve access to credit for
        agricultural stakeholders in Adamawa State, particularly those lacking
        traditional collateral.
      </p>
      <p className="text-xl mb-4">
        This scheme facilitates warehouse financing for commodities like grains
        and livestock by providing guarantees to financial institutions, thereby
        securing loans for eligible agribusinesses. Participating banks disburse
        loans specifically for procuring and delivering commodities to
        designated warehouses managed by appointed Collateral Managers.
      </p>
      <p className="text-xl mb-4">
        The scheme operates with a dual financing track, offering both
        interest-based financing through conventional banks and
        non-interest/Shariah-compliant financing based on Islamic finance
        principles like Murabaha and Salam. This dual approach caters to a wider
        range of participants, including faith-based enterprises.
      </p>
      <p className="text-xl mb-4">
        Collateral coverage ranges from 130% to 150%, with commodities backing
        100% and the Guarantee Scheme providing an additional 30% to 50%.
        Managed by ADAS Programme Limited and implemented through a network of
        agents, the ADAS-CGS aims to improve collateral-free credit access,
        reduce lending risks, stimulate value chain offtake, facilitate private
        investment, and integrate smallholder farmers into broader markets,
        covering a range of crops, livestock, and aquaculture.
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
