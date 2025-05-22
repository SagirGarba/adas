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
      <h1 className="text-4xl font-bold text-center mb-6">Aggregation Model</h1>
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
        The ADAS Programme employs an Aggregation Model to streamline the supply
        of produce from smallholder farmers to meet the standards of modern
        markets. This model organizes farmers into cohesive groups, enabling
        them to engage in formal contractual arrangements. By consolidating
        their output, farmers gain increased bargaining power and improved
        access to markets.
      </p>
      <p className="text-xl mb-4">
        Supporting this model are strategically located warehouses that function
        as field storage centers, securing produce and facilitating access to
        financing and lending opportunities. The state plays a crucial role by
        providing essential infrastructure, including designated markets and
        warehouses, which underpins the functionality and success of these
        aggregation efforts.
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
