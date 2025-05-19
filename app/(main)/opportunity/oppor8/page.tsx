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
        Food and Cash Crops in Adamawa State: Unlocking Agribusiness Potential
      </h1>
      <div className="w-full h-[20rem] md:h-[30rem] relative mb-6">
        <Image
          src={Images[7]}
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
        Adamawa State boasts diverse agro-climatic and edaphic (soil-related)
        conditions, making it one of the most agriculturally endowed regions in
        Nigeria. Its varied topography, soil types, and rainfall patterns
        support the cultivation of a wide range of high-value food and cash
        crops. Additionally, strong cultural farming traditions and evolving
        market dynamics further shape the agricultural landscape, offering
        investors a compelling opportunity for commercial engagement.
      </p>
      <p className=" mb-4">Diverse Crop Portfolio</p>
      <p className=" mb-4">
        Food Crops
        <br /> The State’s major food crops include: <br />{" "}
      </p>
      <ul className="mb-4">
        <li>• Cereals: Maize, sorghum, rice, millet</li>
        <li>• Legumes: Groundnut, cowpea, bambara groundnut, soybean</li>
        <li>• Oil Seeds: Sesame, cotton, groundnut</li>
        <li>
          {" "}
          • Roots and Tubers: Yam, cassava, sweet potatoes, Irish potatoes,
          cocoyam
        </li>
      </ul>{" "}
      <p className=" mb-4">
        Cash Crops <br /> The leading cash crops with strong market and
        industrial value include:{" "}
      </p>
      <ul className="mb-4">
        <li>• Cotton</li> <li>• Groundnut</li> <li>• Cowpea</li>
        <li>• Sugar cane</li>
      </ul>
      <p className=" mb-4">
        These crops are not only crucial for food security but also present
        significant opportunities for agro-processing, value addition, and
        export. <br />
        Agro-Ecological Zones and Crop Distribution
        <br /> Based on a combination of climate, soil, and vegetation, Adamawa
        State is divided into four Agricultural Zones, each with unique
        production strengths: <br />
        Zone I (Gombi, Hong, Maiha, Mubi North, Mubi South, Michika, Madagali)
      </p>{" "}
      <ul className=" mb-4">
        <li>• Average annual rainfall: ~1000mm </li>
        <li>• High altitudes with acidic soils </li>
        <li>• Key crops: Rice, maize, sorghum, groundnut, cowpea, sesame </li>
        <li>
          • Notably, bambara groundnut is gaining momentum as a commercial crop
          due to increasing local demand and favorable pricing.
        </li>
      </ul>
      <p className=" mb-4">
        Zone II (Yola North, Yola South, Girei, Fufore, Song){" "}
      </p>
      <ul className="mb-4">
        <li>• Average annual rainfall: ~900mm </li>
        <li>• Features extensive floodplains and fadama lands </li>
        <li>• Crops thrive both in uplands and irrigated lowlands </li>
        <li>
          • Key crops: Rice, maize (in floodplains); bambara groundnut, cowpea,
          sorghum, sesame (in uplands){" "}
        </li>
        <li>
          • Strategic infrastructure: Lake Geriyo irrigation scheme boosts
          year-round rice and vegetable production.
        </li>
      </ul>{" "}
      <p className=" mb-4"> Zone III (Ganye, Toungo, Jada, Mayo-Belwa) </p>
      <ul className="mb-4">
        <li>• Highest rainfall zone (up to 1400mm) </li>
        <li>
          • Ideal for root and tuber crops: Yam, cassava, Irish and sweet
          potatoes{" "}
        </li>
        <li>• Also produces maize, rice, sugar cane, and groundnut </li>
        <li>
          • Consistent rain-fed yields position this zone as a vital food basket
          for the State.
        </li>
      </ul>
      <p className=" mb-4"> Zone IV (Numan, Demsa, Lamurde, Guyuk, Shelleng)</p>
      <ul className="mb-4">
        <li>• Low-lying floodplains with fertile vertisol soils </li>
        <li>• Key crops: Sorghum, sugar cane, maize, rice, vegetables </li>
        <li>
          {" "}
          • This is the principal sugar cane and cotton belt of the State, with
          significant commercial potential.{" "}
        </li>
      </ul>
      <p className=" mb-4">
        {" "}
        Investment Opportunities
        <br /> in Cash Crops Cotton (Zones I & IV)
      </p>
      <ul className="mb-4">
        <li>
          • Vertisol-rich soils in Zone IV support large-scale cotton
          cultivation.{" "}
        </li>
        <li>
          • Afcott Plc, a major cotton processing firm, has catalyzed local
          cotton production through improved seeds, input financing, and assured
          offtake.
        </li>
        <li>
          • Cotton farming presents opportunities in ginning, textile
          manufacturing, and oil extraction.{" "}
        </li>
      </ul>
      <p className=" mb-4"> Sugar Cane (Zones III & IV)</p>
      <ul className="mb-4">
        <li>
          • High rainfall and floodplains support sugar cane in Ganye, Toungo,
          and Numan.{" "}
        </li>
        <li>
          • The Savannah Sugar Company in Numan has created an industrial
          backbone for sugar production with high-yield varieties ideal for
          processing.{" "}
        </li>
        <li>
          {" "}
          • Mechanized and irrigated sugar farming is feasible and scalable,
          particularly in Zone IV’s Gongola river plains.{" "}
        </li>
      </ul>
      <p className=" mb-4"> Groundnut (Zone I)</p>
      <ul className="mb-4">
        <li>
          • Light sandy loam soils and reliable rainfall promote large-scale
          groundnut farming.{" "}
        </li>
        <li>
          • Strong market demand for groundnut oil, paste, and industrial
          products.{" "}
        </li>
        <li>
          {" "}
          • Processing and export potential is high due to established
          infrastructure and market networks.{" "}
        </li>
      </ul>
      <p className=" mb-4"> Cowpea & Bambara Groundnut</p>
      <ul className="mb-4">
        <li>
          • Cowpea now cultivated as a sole crop with high-yielding varieties.{" "}
        </li>
        <li>
          • Bambara groundnut is evolving from a subsistence crop to a niche
          cash crop, offering nutritional benefits and high market value,
          especially in Hong, Gombi, Maiha, and Michika.{" "}
        </li>
      </ul>
      <p className=" mb-4"> Enabling Infrastructure and Market Drivers</p>
      <ul className="mb-4">
        <li>
          • The presence of agro-processing firms (Afcott Plc, Savannah Sugar)
          has spurred increased cultivation and market integration.{" "}
        </li>
        <li>
          • Government and donor-supported irrigation schemes like Lake Geriyo
          and the proposed Chochi Project are enhancing year-round crop
          production.{" "}
        </li>
        <li>
          • Growing consumer demand and evolving diets support local processing,
          packaging, and distribution ventures.
        </li>
      </ul>
      <p className=" mb-4">
        Why Invest in Adamawa’s Crop Sector?
        <br /> Rich Natural Endowments: Suitable soils and varied rainfall for
        multiple crop types Expanding Agribusiness Infrastructure: Processing,
        input supply, and market access supported by public-private partnerships
        Proven Local Capacity: Skilled farmers and growing cooperatives across
        zones High Market Demand: For raw and processed food products, both
        locally and internationally Government Support: Favorable policies,
        extension services, and access to land and financing mechanisms
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
