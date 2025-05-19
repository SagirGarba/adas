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
        VEGETATION AND FOREST RESOURCES IN ADAMAWA STATE
      </h1>
      <div className="w-full h-[20rem] md:h-[30rem] relative mb-6">
        <Image
          src={Images[5]}
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
      <p className=" text-lg mb-4 italic">
        Unlocking Green Wealth for Sustainable Investment
      </p>
     
      <p className=" mb-4">
        Adamawa State is endowed with diverse vegetation zones—Southern Guinea
        Savannah, Northern Guinea Savannah, and Sudan Savannah—each offering
        immense untapped potential for sustainable forestry, eco-tourism,
        non-timber products, and agroforestry investments. Despite environmental
        challenges, these landscapes continue to host a wide variety of
        indigenous and economic plant species, valuable wood resources, and
        high-potential non-wood forest products.
      </p>
      <p className=" mb-4">
        High-Value Vegetation Zones <br /> Each vegetation belt in the state
        presents unique opportunities for green enterprise development:
      </p>
      <ul className=" mb-4">
        <li>
          • Southern Guinea Savannah (Toungo LGA): Receives 1100–1600 mm annual
          rainfall over 6–7 months. Rich in high-value timber and medicinal
          trees like Daniellia oliveri, Parkia biglobosa, and Vitex doniana, as
          well as fodder grasses such as Andropogon and Hyparrhenia. Ideal for
          eco-forestry, tree crop production, and forest-based pharmaceuticals.
        </li>
        <li>
          {" "}
          • Northern Guinea Savannah (Ganye, Jada, Mayo Belwa, Yola, Girei,
          Song, Fufore LGAs): Annual rainfall of 900–1100 mm with 4–5 months of
          rains. Features high-yielding hardwoods (Vitellaria paradoxa, Afzelia
          africana, Khaya senegalensis) and economic fruits (Tamarindus indica,
          Annona senegalensis). Excellent for shea butter processing, timber
          industries, and carbon sequestration projects.
        </li>
        <li>
          {" "}
          • Sudan Savannah (Mubi, Michika, Hong, Shelleng, Numan, etc.):
          Receives 700–900 mm of rain. Dominated by drought-resilient species
          like Acacia spp, Adansonia digitata, and Ziziphus spina-christi. This
          belt supports dryland agroforestry, gum Arabic plantations, and
          livestock-feed development.
        </li>
      </ul>
      <p className=" mb-4">
        Untapped Economic Forest Resources
        <br /> Non-Wood Forest Products (NWFPs)
      </p>
       <ul className="mb-4">
        <li>
          {" "}
          • Gum Arabic: With 7 out of Nigeria’s 19 Acacia species found in
          Adamawa, commercial gum Arabic production has strong export potential.
        </li>
        <li>
          {" "}
          • Edible Fruits & Seeds: Native trees like Vitellaria paradoxa (shea
          butter), Parkia biglobosa (local spice “Dadawa”), and Tamarindus
          indica are in high demand across food, cosmetics, and nutraceutical
          industries.
        </li>
        <li>
          {" "}
          • Medicinal Plants & Extracts: Wild plants like Khaya senegalensis and
          Gardenia imperialis provide raw materials for herbal medicine and
          essential oil production.
        </li>
        <li>
          {" "}
          • Fibre & Bio-products: Plants such as Piliostigma spp and Hibiscus
          spp offer scalable inputs for biodegradable packaging and textiles.
        </li>
      </ul>
      <p className=" mb-4">Commercial Wood Species</p>{" "}
       <ul className="mb-4">
        <li>
          • Species like Anogeissus leocarpus and Afzelia africana provide
          superior-quality timber and charcoal, ideal for sustainable wood-based
          industries, artisanal products, and export markets.
        </li>
      </ul>{" "}
      <p className=" mb-4">
        Wildlife Resources & Eco-Tourism Potential
        <br /> Adamawa’s forests host rare and majestic species including
        elephants, ostriches, lions, hyenas, and antelopes. Over 10% of the land
        is already under conservation—anchored by the globally significant
        Gashaka Gumti National Park.
        <br /> Investment opportunities include:
      </p>
       <ul className="mb-4">
        <li>• Game reserves and safari tourism</li>
        <li>• Wildlife ranching and breeding centers</li>
        <li>• Conservation-linked community enterprises</li>
      </ul>{" "}
      <p className=" mb-4">
        {" "}
        Current Challenges—Opportunities for Green Investors
        <br /> Adamawa’s forests face pressure from deforestation, outdated
        legislation (Forest Law of 1963), weak enforcement, and limited public
        awareness. However, these gaps present major entry points for
        public-private partnerships and climate-smart investments:
      </p>
       <ul className="mb-4">
        <li>
          • Energy alternatives to firewood use (e.g., biomass briquettes)
        </li>
        <li> • Forest restoration through tree planting and reforestation </li>
        <li>
          • Sustainable land use models integrating livestock, trees, and crops
        </li>
        <li>
          • Modern eco-governance frameworks to update forest laws and enforce
          sustainable use Proposed Green Investment Action Plan
        </li>
      </ul>
      <p className=" mb-4">For Plant and Timber Resources</p>
       <ul className="mb-4">
        <li>
          • Comprehensive vegetation and biodiversity inventory to support green
          certification and carbon credit schemes.
        </li>
        <li>
          {" "}
          • Establishment of community-managed forest reserves and tree farms
          with co-investment from local and international partners.
        </li>
        <li>
          {" "}
          • Promotion of agroforestry and fodder corridors along traditional
          grazing routes to reduce conflict and restore tree cover.
        </li>
        <li>
          {" "}
          • Development of woodlots and fuel alternatives to combat
          deforestation and reduce rural energy poverty.
        </li>
        <li>
          {" "}
          • Public-private partnerships for value addition in plant-based
          products such as oils, extracts, spices, and herbal treatments.
        </li>
      </ul>
      <p className=" mb-4">For Wildlife & Eco-Tourism</p>
       <ul className="mb-4">
        <li>
          • Identification and upgrading of high-value biodiversity hotspots and
          eco-tourism zones.
        </li>
        <li>
          {" "}
          • Conversion of some game reserves into sustainable hunting reserves
          for controlled tourism and revenue generation.
        </li>
        <li>
          {" "}
          • Establishment of wildlife domestication and ranching centers for
          meat, hides, and live exports.
        </li>
        <li>
          {" "}
          • Implementation of statewide awareness campaigns and inclusion of
          conservation in formal education curricula.
        </li>
      </ul>
      <p className=" mb-4">Why Invest in Adamawa’s Forest Economy?</p>
       <ul className="mb-4">
        <li>• Abundant biodiversity and natural capital</li>
        <li>
          {" "}
          • Untapped value chains in timber, non-wood products, and eco-tourism
        </li>
        <li>
          {" "}
          • Strategic location along trans-border trade corridors with Cameroon
        </li>
        <li>
          {" "}
          • Strong potential for climate-smart, socially inclusive green growth
        </li>
        <li>
          • Growing demand for natural-based solutions and sustainable supply
          chains Adamawa State’s Forest wealth is ready to be unlocked.
        </li>
      </ul>
      <p className=" mb-4">
        With the right partnerships, this sector can fuel a green investment
        revolution, generate jobs, protect biodiversity, and uplift rural
        livelihoods.
      </p>{" "}
      <p className=" mb-4">
        Join us in transforming nature’s abundance into sustainable prosperity.
      </p>
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
