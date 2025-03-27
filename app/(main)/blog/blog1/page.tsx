"use client";

import React from "react";
import Image from "next/image";
import Images from "@/public/images/blog/index";
import { data } from "@/app/utils/data";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import Link from "next/link";
import { IoLogoFacebook } from "react-icons/io";
import { BsLinkedin } from "react-icons/bs";

const BlogPost = () => {
  return (
    <div className="wrapper pt-6">
      <h1 className="text-4xl font-bold text-center mb-6">
        THE ADAS-P JOURNEY SO FAR: TRANSFORMING AGRICULTURE IN ADAMAWA STATE
      </h1>
      <div className="w-full h-[20rem] md:h-[40rem] relative mb-6">
        <Image
          src={Images[0]}
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
      <p className=" text-lg mb-4 italic">By Dr. Tasiu Idi</p>
      <p className=" text-lg mb-4">
        The Adamawa Agribusiness Support Programme (ADAS-P) has been at the
        forefront of agribusiness transformation, empowering farmers,
        strengthening market linkages, and fostering financial inclusion across
        Adamawa state since year 2022. By aligning initiatives with core
        strategic objectives, enhancing productivity through promoting
        climate-smart practices, strengthening market access, enhancing
        financial inclusion, and empowering rural institutions, ADAS-P is
        creating a sustainable and prosperous agribusiness ecosystem. Let&apos;s
        take a closer look at the remarkable progress made so far across
        different agricultural sectors.
      </p>
      <p className=" text-lg mb-4">
        The Programme core mandate is to Transform the state subsistence farming
        into commercial agriculture by revolutionizing agribusiness, across the
        four subsectors of Crops, Livestock, Aquaculture and Forestry. Through
        innovative business models and financing strategies, ADAS-P is
        addressing critical challenges in agriculture and paving the way for
        sustainable development thereby building a competitive, profitable and
        sustainable Agribusiness sector in Adamawa State.
      </p>
      <p className=" text-lg mb-4">
        The ADAS Programme Operational Framework centers on two business models
        that bolster value chains, fortify farmer organization, and enhance
        connections to markets. Specifically, these business models include the
        Aggregation Model, which facilitates smallholder farmers&apos; supply of
        produce under formal contracts meeting modern market standards, and the
        Out-Grower Business Model, which connects farmers with processors,
        off-takers, input suppliers, and agribusiness institutions through
        contract farming agreements. To further enhance farmer organization and
        market linkages, farmers are grouped into producer clusters to increase
        their bargaining power and market access, while warehouses serve as
        field storage centers to secure produce for financing and lending. The
        state provides essential infrastructure, such as identified markets and
        warehouses, to support these models. Additionally, a ₦5 billion Credit
        Guarantee Fund has been established to mitigate lending risks and
        encourage financial institutions to support aggregation and contract
        farming. Through this framework, ADAS-P is driving transformative
        changes in Adamawa State&apos;s agricultural sector. A detailed overview
        of the progress across key agricultural sectors follows.
      </p>{" "}
      <h2 className="text-2xl font-semibold mb-3">
        <strong>Crops and Vegetables:</strong> Sowing the Seeds of Prosperity
      </h2>
      <p className=" text-lg mb-4">
        Farming communities in Adamawa State are experiencing a transformation
        as a result of targeted interventions aimed at enhancing productivity
        and market access, all in pursuit of the program&apos;s four strategic
        objectives: enhancing productivity and promoting climate-smart
        practices, strengthening market access and promoting linkages with
        market partners, promoting financial inclusion and sustainable access to
        capital for private enterprises, and empowering rural institutions and
        fostering sustainable development. Specifically, ADAS-P, in
        collaboration with the International Institute of Tropical Agriculture
        (IITA), has strengthened 43 Community-Based Seed Enterprises (CBSEs),
        involving 800 members across seven Local Government Areas, connecting
        these farmers to input financing and reliable markets to ensure higher
        productivity and profitability.
      </p>
      <div className="w-full h-[20rem] md:w-[65%] md:h-[30rem] mx-auto relative mb-6">
        <Image
          src={Images[1]}
          alt="ICT in Agriculture"
          layout="fill"
          className="rounded-lg"
        />
      </div>
      <p className=" text-lg mb-4">
        ADAS 2024 intervention through input financing for certified climate
        smart seeds promised an economic impact of ₦8B (Eight Billion Naira).
        The projected impact of certified seeds produced by CBSEs under this
        intervention are majorly in three key crops: maize, rice, and soya
        beans. A total of 80,958 kg of certified seeds were produced, covering
        3,480 hectares of farmland. Maize accounts for the largest share, with
        62,038kg of certified seeds covering 3,102 hectares, yielding an
        expected output of 10,857 MT of grains and generating an economic impact
        of ₦7,056,822,500. Rice follows with 16,740kg of certified seeds
        covering 335 hectares, expected to produce 1,507 MT of paddy and
        contributing ₦903,960,000 to the economy. Soya beans have the smallest
        share, with 2,180kg of certified seeds produced covering 44 hectares,
        leading to a projected 109 MT of output and an economic impact of
        ₦98,100,000. The overall economic impact of these certified seeds is
        projected at ₦8,058,882,500, emphasizing the significant role of
        certified seeds in boosting agricultural productivity and economic
        growth.
      </p>
      <p className=" text-lg mb-4">
        Furthermore, a 200-hectare wet-season soybean production project was
        launched in Demsa LGA in partnership with ALUVIA Agric and
        FINCON-Konsulting, creating improved opportunities for farmer growth.
        Additionally, farmer profiling and crop production have expanded through
        collaboration with agribusiness firms, fostering more inclusive
        participation in the agribusiness sector. To further promote irrigation
        farming, ADAS-P, along with the Office of the Surveyor General,
        community leaders, and producer organizations, conducted mapping and
        mobilization to aggregate for contract farming 2,000 Hectares of
        community irrigation farm clusters.
      </p>
      <div className="w-full h-[20rem] md:w-[65%] md:h-[30rem] mx-auto relative mb-6">
        <Image
          src={Images[2]}
          alt="ICT in Agriculture"
          layout="fill"
          className="rounded-lg"
        />
      </div>
      <h2 className="text-2xl font-semibold mb-3">
        Livestock: Empowering Farmers, Expanding Opportunities
      </h2>{" "}
      <p className=" text-lg mb-4">
        The livestock subsector is experiencing significant growth through
        ADAS-P&apos;s facilitation of innovative initiatives that empower
        smallholder farmers and reinforce value chains. Notably, thirty master
        trainers have been trained to equip 300 women in Yola South with skills
        in brooding and caring for Noiler poultry breeds, promoting cluster
        farming and improving access to input financing. Furthermore,
        small-scale poultry farmers have been clustered and profiled for support
        under an off-taker model, in collaboration with the Poultry Association
        of Nigeria (PAN) and the Centre for Micro-enterprise Development (CMD).
        Additionally, homestead goat herders are now clustered ready for
        integration into an out-grower breeding program, connecting them to farm
        hubs and a large off-taker (SNSC) aiming to establish a processing and
        export plant in Yola, with the goal of supplying 100,000 goats per
        month, a transformative development for livestock farming in the state.
      </p>
      <div className="w-full h-[20rem] md:w-[65%] md:h-[30rem] mx-auto relative mb-6">
        <Image
          src={Images[3]}
          alt="ICT in Agriculture"
          layout="fill"
          className="rounded-lg"
        />
      </div>
      <h2 className="text-2xl font-semibold mb-3">
        Aquaculture: Harnessing the Potential of Fisheries
      </h2>{" "}
      <p className=" text-lg mb-4">
        ADAS-P is increasingly focused on aquaculture, striving to enhance fish
        farming and generate sustainable opportunities for local producers.
        Specifically, forty homestead smallholder fish farmers have been
        profiled under the Adamawa State Fish Farmers Union, facilitating
        improved organization and support for their ventures. Furthermore,
        ADAS-P, in collaboration with Aquatic Hub Afrique, has led the
        development of the Adamawa State Aquaculture Business Strategy, laying
        the foundation for long-term growth within the aquaculture sector.
      </p>
      <div className="w-full h-[20rem] md:w-[65%] md:h-[30rem] mx-auto relative mb-6">
        <Image
          src={Images[4]}
          alt="ICT in Agriculture"
          layout="fill"
          className="rounded-lg"
        />
      </div>
      <h2 className="text-2xl font-semibold mb-3">
        Forestry: Sustainable Practices for a Greener Future
      </h2>{" "}
      <p className=" text-lg mb-4">
        ADAS-P is actively advancing forestry initiatives, fostering sustainable
        livelihoods through beekeeping and environmental conservation.
        Specifically, beekeeping has been promoted as a viable agribusiness in
        partnership with ANI, Slow Food Nigeria Network, and the Beekeeping
        Association of Nigeria. Furthermore, in Mayo-Belwa LGA, 540 beekeepers
        have been organized to supply honey, wax, and venom products to
        off-takers in Lagos, generating new income opportunities. Additionally,
        a workshop for key stakeholders was hosted to share strategies for
        implementing climate-smart agriculture practices, reinforcing
        ADAS-P&apos;s commitment to environmental sustainability.
      </p>
      <div className="w-full h-[20rem] md:w-[65%] md:h-[30rem] mx-auto relative mb-6">
        <Image
          src={Images[5]}
          alt="ICT in Agriculture"
          layout="fill"
          className="rounded-lg"
        />
      </div>
      <h2 className="text-2xl font-semibold mb-3">
        Cross-Cutting Initiatives: Strengthening Financial Access and
        Institutional Support
      </h2>{" "}
      <p className=" text-lg mb-4">
        Beyond specific agricultural subsectors, ADAS-P is driving broader
        initiatives to enhance financial inclusion, empower rural institutions,
        and create an enabling business environment.{" "}
      </p>{" "}
      <p className=" text-lg mb-4">
        Twelve Markets across Adamawa State were upgraded under the ADAS
        Programme to promote agribusiness. The upgraded markets include Mubi
        grains and livestock markets, Gombi livestock market, and Song cattle
        market, Toungo Grains Market, Ganye Livestock Market, Ngurore Cattle
        Market and others. The projects included constructing standard drainage
        systems, sand-filling, provision of water, fencing, security offices,
        veterinary clinics, and loading bays at the selected markets.
      </p>
      <div className="w-full h-[20rem] md:w-[65%] md:h-[30rem] mx-auto relative mb-6">
        <Image
          src={Images[6]}
          alt="ICT in Agriculture"
          layout="fill"
          className="rounded-lg"
        />
      </div>
      <table className="w-full border-collapse border border-gray-300 mb-10">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2"></th>
            <th className="border border-gray-300 px-4 py-2">Grain</th>
            <th className="border border-gray-300 px-4 py-2">Livestock</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id} className="hover:bg-gray-100">
              <td className="border border-gray-300 px-4 py-2">{item.id}</td>
              <td className="border border-gray-300 px-4 py-2">{item.grain}</td>
              <td className="border border-gray-300 px-4 py-2">
                {item.livestock}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="w-full h-[20rem] md:w-[65%] md:h-[30rem] mx-auto relative mb-6">
        <Image
          src={Images[7]}
          alt="ICT in Agriculture"
          layout="fill"
          className="rounded-lg"
        />
      </div>
      <p className=" text-lg mb-4">
        In its financial and market facilitation efforts, ADAS-P has profiled a
        total of 120 enterprises, with 43 credit guarantee covers processed
        under the Warehouse Financing Scheme to support livestock and crop
        trading through the ADAS Credit Guarantee Scheme. Furthermore, a
        sustainable financing model has been developed, stakeholders have been
        identified, and a State Committee has been inaugurated to oversee
        implementation across various subsectors. Additionally, trade fairs and
        exhibitions have been facilitated, providing platforms for
        agro-processed products to reach wider markets.
      </p>
      <p className=" text-lg mb-4">
        ADAS-P has broadened the reach of Village Savings and Loan Associations
        (VSLAs) across more Local Government Areas, and a state-level Apex
        Adamawa Agribusiness Cooperative Financing Agency (ADACFA) has been
        launched to enhance grassroots financial inclusion and provide improved
        oversight. Furthermore, high-level advocacy visits and engagements with
        Emirates, Chiefdoms, and District Heads have been conducted to secure
        community support for ADAS-P&apos;s agricultural initiatives. Women
        entrepreneurs in agro-processing have received support in branding and
        product packaging, and have been sponsored to participate in the North
        East Trade Fair in Bauchi, promoting economic empowerment. The offices
        of ADAS-P LGA Implementation Committees have been renovated to improve
        coordination and service delivery, and security arrangements have been
        implemented for 12 upgraded markets across the state. Finally,
        engagement meetings have been held with key state ministries, including
        those responsible for Livestock and Aquaculture, Agriculture (Seed
        Technology), and Environment and Forestry (Climate-Smart Agriculture
        Value Chain Development), to align policies and strengthen inter-sector
        collaboration.
      </p>
      <div className="w-full h-[20rem] md:w-[65%] md:h-[30rem] mx-auto relative mb-6">
        <Image
          src={Images[8]}
          alt="ICT in Agriculture"
          layout="fill"
          className="rounded-lg"
        />
      </div>
      <p className=" text-lg mb-4">
        ADAS-P is more than just an agricultural program—it is a movement that
        is shaping the future of agribusiness in Adamawa State. With each
        milestone, the program is bringing farmers closer to sustainable
        livelihoods, markets, and financial opportunities. As ADAS-P continues
        to evolve, the goal remains clear: a more prosperous, inclusive, and
        resilient agricultural sector for all.
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
