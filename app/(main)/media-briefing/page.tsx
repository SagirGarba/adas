"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import galleryImages from "@/public/images/home/Gallery/index";

const seedBeneficiaries = [
  {
    name: "Alhaji Baba Sahabo",
    address: "Gidan Mai Jimilla, Namtari Gurel, Yola South LGA",
    phone: "07069044471",
  },
  {
    name: "Yohana Daniel",
    address: "Shelleng",
    phone: "-",
  },
  {
    name: "Usman Abubakar Ngurore",
    address: "Ngurore, Yola South",
    phone: "08069135031",
  },
];

const layerBeneficiaries = [
  {
    name: "Sapwakana Beatrice Wonoamwo",
    address: "Mautech Quarter, Mbamba Yola Town",
    phone: "08036512440",
  },
  {
    name: "Mohammed Ibrahim Jalo",
    address: "Shagari Phase 1, adjacent Shagari police station",
    phone: "08125509662",
  },
  {
    name: "Abubakar Raji",
    address: "Behind Wetland Garden, Shagari Sabon Pegi Neyewal",
    phone: "08132572760",
  },
];

const fishBeneficiaries = [
  {
    name: "Emmanuel B. K Pathel",
    address:
      "Mbursa Farms, No 4 Behind Zion Baptist Church, Kasuwan Katako Numan Road, Yola South",
    phone: "08165833081",
  },
];

const cgsBeneficiaries = [
  {
    name: "Rabiu Hassan",
    address: "Mubi South",
    phone: "08030707127",
    market: "Mubi Livestock",
  },
  {
    name: "Ahmadu Saadu",
    address: "Mubi North",
    phone: "08069756734",
    market: "Mubi Grain Market",
  },
  {
    name: "Murna James",
    address: "Mubi North",
    phone: "-",
    market: "Mubi Grain Market Dole",
  },
  {
    name: "Baba Usman",
    address: "Ganye",
    phone: "08146198980",
    market: "Ganye Cattle Market",
  },
  {
    name: "Adamu Muhammed Abubakar",
    address: "Ganye",
    phone: "08035386298",
    market: "Ganye Livestock Market",
  },
];

function SeedDetails() {
  return (
    <div className="space-y-4 text-sm text-slate-700">
      <div>
        <h4 className="text-lg font-semibold text-slate-900">Objective</h4>
        <p className="mt-2 leading-7">
          The initiative is designed to strengthen agricultural productivity and
          commercialization by supporting Community-Based Seed Enterprises
          (CBSEs), promoting technology adoption, and encouraging Climate-Smart
          Agriculture (CSA). It seeks to increase farmers&apos; access to
          affordable, high-quality certified seeds, optimize crop yields, and
          stimulate large-scale production for structured market offtake.
        </p>
      </div>

      <div>
        <h4 className="text-lg font-semibold text-slate-900">Justification</h4>
        <p className="mt-2 leading-7">
          Agricultural productivity in Adamawa State has remained below national
          averages due to recycled seeds, limited access to certified seeds, and
          inadequate financing for smallholder farmers. ADAS-P partnered with
          the International Institute of Tropical Agriculture (IITA) and the
          National Agricultural Seeds Council (NASC) to make foundation seeds,
          training, processing, packaging, and market linkage support available
          closer to rural communities.
        </p>
      </div>

      <div>
        <h4 className="text-lg font-semibold text-slate-900">
          Progress Highlights
        </h4>
        <p className="mt-2 leading-7">
          The initiative has strengthened the seed value chain across the State.
          A total of 44 CBSEs, comprising over 800 members across seven LGAs,
          have been linked to input financing through ADACFA and connected to
          markets through trade fairs and exhibitions. Cumulatively, 4.90 metric
          tonnes of foundation seeds produced 566.20 metric tonnes of certified
          seeds, which subsequently generated approximately 89,855.60 metric
          tonnes of grain output.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-green-100 bg-white p-4">
          <h4 className="font-semibold text-slate-900">Directly supported</h4>
          <ul className="mt-2 space-y-1">
            <li>• Community-Based Seed Enterprises (CBSEs)</li>
            <li>• Seed multipliers and processors</li>
            <li>• Agro-dealers and input distributors</li>
            <li>• Seed packaging and marketing enterprises</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-green-100 bg-white p-4">
          <h4 className="font-semibold text-slate-900">Indirectly supported</h4>
          <ul className="mt-2 space-y-1">
            <li>• Smallholder grain producers</li>
            <li>• Commodity aggregators and traders</li>
            <li>• Transport and logistics providers</li>
            <li>• Warehouse and storage operators</li>
            <li>• Agro-processors and exporters</li>
          </ul>
        </div>
      </div>

      <div>
        <h4 className="text-lg font-semibold text-slate-900">
          Key Beneficiaries
        </h4>
        <div className="mt-3 space-y-3">
          {seedBeneficiaries.map((beneficiary) => (
            <div
              key={beneficiary.name}
              className="rounded-2xl border border-green-100 bg-white p-4"
            >
              <p className="font-semibold text-slate-900">{beneficiary.name}</p>
              <p>{beneficiary.address}</p>
              <p>Phone: {beneficiary.phone}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function MicroEnterpriseDetails() {
  return (
    <div className="space-y-4 text-sm text-slate-700">
      <div>
        <h4 className="text-lg font-semibold text-slate-900">
          A. Household Layer Operation
        </h4>
        <p className="mt-2 leading-7">
          The programme seeks to create an additional income stream for women,
          especially during off-farm periods when farm labour income is often
          low. It also improves household nutrition through egg consumption and
          helps reduce the cost and scarcity of day-old chicks.
        </p>
      </div>

      <div>
        <h4 className="font-semibold text-slate-900">Justification</h4>
        <p className="mt-2 leading-7">
          Poultry production has a short cycle; birds begin laying after about
          20 weeks and continue for up to one year, meaning households can earn
          daily income and improve nutrition with relatively quick returns.
        </p>
      </div>

      <div>
        <h4 className="font-semibold text-slate-900">Business Approach</h4>
        <p className="mt-2 leading-7">
          ADAS-P procured a 1,000-egg-capacity hatchery powered by electricity,
          solar, and LNG. Beneficiaries receive 25 birds each, while the anchor
          provides feed and manages the brooding and production process until
          point-of-lay. The anchor farmer earns from egg sales, and revenue from
          spent layers is shared 50:50 between the farmer and the anchor.
        </p>
      </div>

      <div>
        <h4 className="font-semibold text-slate-900">Highlights</h4>
        <ul className="mt-2 space-y-2">
          <li>• 25 birds per beneficiary</li>
          <li>• Monthly revenue: approximately ₦66,400</li>
          <li>• Net profit: approximately ₦18,369</li>
        </ul>
      </div>

      <div>
        <h4 className="font-semibold text-slate-900">Progress (Q1 2026)</h4>
        <ul className="mt-2 space-y-2">
          <li>• 30 master trainers and 300 women trained</li>
          <li>• 150 chicks distributed</li>
          <li>• Brooder network established across 2 LGAs</li>
        </ul>
      </div>

      <div>
        <h4 className="font-semibold text-slate-900">Key Beneficiaries</h4>
        <div className="mt-3 space-y-3">
          {layerBeneficiaries.map((beneficiary) => (
            <div
              key={beneficiary.name}
              className="rounded-2xl border border-green-100 bg-white p-4"
            >
              <p className="font-semibold text-slate-900">{beneficiary.name}</p>
              <p>{beneficiary.address}</p>
              <p>Phone: {beneficiary.phone}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h4 className="mt-6 text-lg font-semibold text-slate-900">
          B. Anchor Fish Production
        </h4>
        <p className="mt-2 leading-7">
          The objective is to supply the market with high-quality, multi-species
          table fish. Good quality table-sized fish has become expensive due to
          overfishing and closure of commercial fish farms caused by limited
          access to quality fingerlings, high feed costs, and limited expertise
          in commercial feed production.
        </p>
      </div>

      <div>
        <h4 className="font-semibold text-slate-900">Business Model</h4>
        <p className="mt-2 leading-7">
          The model supports Clarias, Tilapia, Heterotis, and Carp production.
          An anchor farm produces table-sized fish and fingerlings while
          surrounding farmers are organised into clusters with aggregators and
          feed suppliers. The anchor farm connects with fish marketers and uses
          market demand to guide production and practices.
        </p>
      </div>

      <div>
        <h4 className="font-semibold text-slate-900">Highlights</h4>
        <ul className="mt-2 space-y-2">
          <li>• Multi-species production</li>
          <li>• Scalable cluster-based model with strong revenue potential</li>
        </ul>
      </div>

      <div>
        <h4 className="font-semibold text-slate-900">Progress (Q1 2026)</h4>
        <ul className="mt-2 space-y-2">
          <li>• Hatchery setup approximately 40% complete</li>
          <li>• ₦4.54 million disbursed</li>
          <li>• Anchor farm established</li>
        </ul>
      </div>

      <div>
        <h4 className="font-semibold text-slate-900">Key Beneficiaries</h4>
        <div className="mt-3 space-y-3">
          {fishBeneficiaries.map((beneficiary) => (
            <div
              key={beneficiary.name}
              className="rounded-2xl border border-green-100 bg-white p-4"
            >
              <p className="font-semibold text-slate-900">{beneficiary.name}</p>
              <p>{beneficiary.address}</p>
              <p>Phone: {beneficiary.phone}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function CgsDetails() {
  return (
    <div className="space-y-4 text-sm text-slate-700">
      <div>
        <h4 className="text-lg font-semibold text-slate-900">Key Features</h4>
        <ul className="mt-2 space-y-2">
          <li>• ₦5 billion credit guarantee fund</li>
          <li>• Supports aggregation and out-grower models</li>
          <li>• Dual financing: conventional and non-interest</li>
          <li>• Commodity-backed warehouse financing</li>
        </ul>
      </div>

      <div>
        <h4 className="text-lg font-semibold text-slate-900">
          Performance (Q1 2026)
        </h4>
        <ul className="mt-2 space-y-2">
          <li>• ₦429.8 million disbursed</li>
          <li>• 18 beneficiaries financed</li>
        </ul>
      </div>

      <div>
        <h4 className="text-lg font-semibold text-slate-900">
          Value Chain Enterprises Supported
        </h4>
        <ul className="mt-2 space-y-2">
          <li>
            • Direct: agribusiness SMEs, aggregators, warehouse operators,
            out-grower schemes
          </li>
          <li>
            • Indirect: financial institutions, insurers, commodity exchanges,
            processors, logistics firms, exporters
          </li>
        </ul>
      </div>

      <div>
        <h4 className="text-lg font-semibold text-slate-900">
          Key Beneficiaries
        </h4>
        <div className="mt-3 space-y-3">
          {cgsBeneficiaries.map((beneficiary) => (
            <div
              key={beneficiary.name}
              className="rounded-2xl border border-green-100 bg-white p-4"
            >
              <p className="font-semibold text-slate-900">{beneficiary.name}</p>
              <p>{beneficiary.address}</p>
              <p>Phone: {beneficiary.phone}</p>
              <p>Market: {beneficiary.market}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

type SectionCardProps = {
  title: string;
  description: string;
  highlights: string[];
  image: any;
  details: React.ReactNode;
};

const SectionCard = ({
  title,
  description,
  highlights,
  image,
  details,
}: SectionCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <article className="overflow-hidden rounded-[1.5rem] border border-green-100 bg-[#fcfffc] md:flex">
      <div className="relative h-56 w-full shrink-0 overflow-hidden md:h-[280px] md:w-[38%] md:self-start">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 38vw"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex-1 p-2 md:p-8">
        <h3 className="text-2xl font-semibold text-slate-900">{title}</h3>
        <p className="mt-3 text-base leading-7 text-slate-700">{description}</p>
        <ul className="mt-4 space-y-2 text-sm text-slate-700">
          {highlights.map((item) => (
            <li key={item} className="flex gap-2">
              <span className="mt-1 text-[#0B6623]">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        {isOpen && (
          <div className="mt-6 rounded-[1.25rem] border border-green-100 bg-white p-4 md:p-6">
            {details}
          </div>
        )}

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="mt-6 inline-flex rounded-full bg-[#0B6623] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#09511d]"
        >
          {isOpen ? "Hide details" : "Read full section"}
        </button>
      </div>
    </article>
  );
};

const sections = [
  {
    title: "Improving Access to Certified Seeds",
    description:
      "ADAS-P is strengthening agricultural productivity through certified seed access, community-based seed enterprises, and climate-smart practices.",
    highlights: [
      "44 community-based seed enterprises linked to financing",
      "Over 800 members across seven LGAs",
      "Nearly 90,000 MT of grain output generated from improved seed systems",
    ],
    image: galleryImages[0],
    details: <SeedDetails />,
  },
  {
    title: "Promotion of Micro-Enterprises",
    description:
      "The programme is creating income opportunities for women and rural households through layer operations and anchor fish production.",
    highlights: [
      "Household layer operations with daily egg income potential",
      "Anchor fish production with multi-species table fish supply",
      "Cluster-based delivery model for productivity and market access",
    ],
    image: galleryImages[4],
    details: <MicroEnterpriseDetails />,
  },
  {
    title: "ADAS Credit Guarantee Scheme",
    description:
      "The scheme provides risk-sharing finance for aggregators, SMEs, and out-grower models across the agribusiness value chain.",
    highlights: [
      "₦5 billion guarantee fund",
      "Dual conventional and non-interest financing options",
      "Commodity-backed warehouse finance support",
    ],
    image: galleryImages[8],
    details: <CgsDetails />,
  },
];

const MediaBriefingPage = () => {
  return (
    <main className="min-h-screen bg-[#f7fff8]">
      <section className="wrapper md:px-5 py-16 md:py-24">
        <div className="max-w-6xl rounded-[2rem] border border-green-100 bg-white p-2 shadow-[0_20px_60px_-25px_rgba(11,102,35,0.25)] md:p-10 lg:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#0B6623]">
            Media Briefing Report 2026
          </p>
          <h1 className="mt-4 text-3xl font-bold text-slate-900 md:text-4xl">
            Adamawa Agribusiness Support Programme (ADAS-P)
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-700">
            ADAS-P is advancing agricultural commercialization through
            innovation, partnerships, improved productivity, market access, and
            finance to drive sustainable growth and livelihoods across Adamawa
            State.
          </p>

          <div className="mt-8 rounded-[1.5rem] bg-[#0B6623] p-6 text-white">
            <h2 className="text-2xl font-semibold">Programme focus</h2>
            <p className="mt-3 text-base leading-7 text-green-50">
              The briefing highlights enterprise schemes spanning certified
              seeds, micro-enterprises, and credit guarantee finance to
              strengthen the full agribusiness value chain.
            </p>
          </div>

          <div className="mt-10 space-y-6">
            {sections.map((section) => (
              <SectionCard
                key={section.title}
                title={section.title}
                description={section.description}
                highlights={section.highlights}
                image={section.image}
                details={section.details}
              />
            ))}
          </div>

          <div className="mt-8 rounded-[1.5rem] border border-green-100 bg-[#f7fff8] p-4 md:p-8">
            <h2 className="text-2xl font-semibold text-slate-900">
              Integrated Value Chain Impact
            </h2>
            <p className="mt-3 text-base leading-7 text-slate-700">
              ADAS-P&apos;s integrated approach is delivering increased
              productivity through improved inputs, enterprise development
              across poultry and aquaculture, expanded access to finance, and
              stronger market systems with structured offtake. By supporting
              both direct producers and enabling service providers, ADAS-P is
              building a resilient, inclusive, and commercially viable
              agribusiness ecosystem in Adamawa State.
            </p>
            <p className="mt-4 text-base font-semibold text-[#0B6623]">
              ADAS-P: Connecting Farmers, Enterprises, and Finance for
              Sustainable Growth.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MediaBriefingPage;
