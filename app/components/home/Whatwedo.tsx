import React from "react";

const WhatWeDo = () => {
  const services = [
    {
      title: "Technology Integration",
      description:
        "We utilize innovative solutions to boost efficiency and optimize agricultural processes.",
    },
    {
      title: "Market Access",
      description:
        "We connect farmers and agribusinesses to stronger markets, increasing sales opportunities.",
    },
    {
      title: "Financial Support",
      description:
        "We provide resources and partnerships to help agribusinesses secure reliable funding.",
    },
  ];

  return (
    <section className="wrapper py-16 bg-[#0B6623] text-white">
      <div className="text-center">
        <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-6">
          What We Do
        </h2>
        <p className="text-lg md:text-2xl mb-10">
          At ADAS-P, we empower agribusinesses by providing tailored solutions
          that enhance productivity, market access, and financial stability.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md text-center transition-all duration-300 hover:scale-105 hover:text-lg"
          >
            <h3 className="text-xl font-semibold text-[#0B6623] mb-3">
              {service.title}
            </h3>
            <p className="text-[#242424]">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatWeDo;
