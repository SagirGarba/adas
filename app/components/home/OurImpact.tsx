import React from "react";
import { FaSeedling, FaHandshake, FaChartLine, FaLeaf } from "react-icons/fa";

const impactData = [
  {
    icon: <FaSeedling className="text-[#0B6623] size-10" />,
    title: "Boosting Agricultural Productivity",
    description:
      "Through innovative technology and data-driven solutions, we help agribusinesses increase yields, optimize resources, and improve efficiency—leading to higher output with less effort.",
  },
  {
    icon: <FaHandshake className="text-[#0B6623] size-10" />,
    title: "Strengthening Market Access",
    description:
      "We bridge the gap between farmers and lucrative markets, creating better sales opportunities, fair pricing, and long-term business partnerships that drive economic growth.",
  },
  {
    icon: <FaChartLine className="text-[#0B6623] size-10" />,
    title: "Enhancing Financial Stability",
    description:
      "By connecting agribusiness owners with funding opportunities and financial literacy programs, we support sustainable business growth, ensuring long-term profitability and security.",
  },
  {
    icon: <FaLeaf className="text-[#0B6623] size-10" />,
    title: "Promoting Sustainable Practices",
    description:
      "ADAS-P champions eco-friendly farming techniques that protect natural resources while increasing productivity. We advocate for climate-smart agriculture to ensure a greener, more resilient future.",
  },
];

const OurImpact = () => {
  return (
    <section className="wrapper py-16">
      <div className="text-center">
        <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-black mb-6">
          Our Impact
        </h2>
        <p className="text-lg md:text-2xl text-black mb-10">
          At ADAS-P, we are transforming the agribusiness landscape by
          empowering farmers and entrepreneurs with the tools, knowledge, and
          support they need to thrive.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {impactData.map((impact, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center border border-[#0B6623] transition-all duration-300 hover:scale-105 hover:text-lg"
            >
              {impact.icon}
              <h3 className="text-xl font-semibold mt-4 text-[#0B6623] transition-all duration-300">
                {impact.title}
              </h3>
              <p className="mt-2 text-[#242424] transition-all duration-300">
                {impact.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default OurImpact;
