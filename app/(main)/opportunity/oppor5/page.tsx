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
        LIVESTOCK IN ADAMAWA STATE: A STRATEGIC INVESTMENT FRONTIER
      </h1>
      <div className="w-full h-[20rem] md:h-[30rem] relative mb-6">
        <Image
          src={Images[4]}
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
        Adamawa State is one of Nigeria’s top livestock hubs, offering a unique
        combination of vast grazing land, favorable ecological zones, and
        diverse animal species. With an estimated 7.5 to 8.3 million
        animals—comprising cattle, sheep, goats, pigs, and poultry—the state
        presents immense commercial opportunities in meat, dairy, and livestock
        value chain development. Four Ecological Zones, One Livestock Powerhouse
      </p>
      <p className=" mb-4">
        The state is structured into four major pastoral blocks based on
        ecological and climatic conditions, each offering targeted livestock
        opportunities:
      </p>
      <p className=" mb-4">
        Toungo Block (20.6% landmass): High rainfall, lush pasture, and abundant
        water—ideal for cattle rearing.{" "}
      </p>
      <ul className="mb-4">
        <li>
          • Jada-Mayo Belwa Block (18.6%): Open grasslands suited for seasonal
          grazing and livestock fattening.
        </li>
        <li>
          • Benue Trough Block (31.8%): Central grazing corridor with rivers,
          lakes, and high population of nomads.
        </li>
        <li>
          • Hong-Michika Block (29%): Functional grazing reserves (Sorau,
          Guyaku), with potential for ranching and dairy expansion. Animal
          Resources & Market Potential
        </li>
        <li>
          • Cattle (2.8–3.5 million): Includes Adamawa Gudali, Sokoto Gudali,
          White Fulani (Bunaji), and Red Bororo breeds—known for meat and milk
          quality. Strong demand in local and regional markets.
        </li>
        <li>
          • Sheep (2–2.5 million): Yankasa and Uda breeds dominate, supporting a
          growing mutton and ram market.
        </li>
        <li>
          {" "}
          • Goats (2.4 million): Local dwarfs adapted to both highland and
          lowland environments—ideal for small-scale investors.
        </li>
        <li>
          • Pigs (500,000): Concentrated in culturally-accepting
          LGAs—opportunities in pork processing and export.
        </li>
        <li>
          • Poultry (2.5–3 million): Widespread across the state, with low entry
          barrier for SME participation. Competitive Edge for Investors
        </li>
        <li>
          • Untapped Grazing Reserves: 37 gazetted, with only 2 currently
          operational—ripe for revitalization through PPPs.
        </li>
        <li>
          • Land Availability: Vast savannah grasslands ideal for ranching,
          feedlots, and dairy farms.
        </li>
        <li>
          • Fattening & Dairy Farms: Private operations like Sebore and Benue
          Valley Farms demonstrate profitability and scalability.
        </li>
        <li>
          • Mixed Farming Systems: Increasing integration of crops and livestock
          boosts productivity and sustainability.
        </li>
        <li>
          • Government Backing: Legacy of public ranches and veterinary
          infrastructure offers a foundation for private revival.
        </li>
      </ul>{" "}
      <p className=" mb-4">
        Risk & Resilience
        <br />
        Security challenges have shifted traditional pastoral routes but also
        opened new frontiers in less densely populated zones. With proper land
        use, improved grazing management, and investment in animal health,
        Adamawa’s fragile ecosystem can sustainably support large-scale
        livestock production.
      </p>
      <p className=" mb-4">
        The Opportunity
        <br />
        With its rich animal biodiversity, strategic location, available land,
        and growing domestic demand, Adamawa State is a prime destination for
        livestock investment. Opportunities exist in:{" "}
      </p>
      <ul className="mb-4">
        <li>• Ranching and fattening programs</li>
        <li>• Dairy production and processing</li>
        <li>• Animal feed manufacturing</li>
        <li>• Breeding and veterinary services</li>
        <li>• Cold chain and meat logistics</li>
      </ul>{" "}
      <p className=" mb-4">
        Partner with Adamawa to build Nigeria’s livestock future—naturally
        abundant, commercially viable, and socially transformative.
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
