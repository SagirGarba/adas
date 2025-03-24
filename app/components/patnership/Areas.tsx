import React from "react";
import { Handshake, Building, Banknote, Globe } from "lucide-react";

const Areas = () => {
  return (
    <section className="wrapper px-6 py-16">
      <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-center text-[#0B6623]">
        Key Partnership Areas
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
        {[
          {
            title: "Government Agencies",
            icon: <Building size={40} />,
            description:
              "We collaborate with policymakers to create an enabling environment for agribusiness growth.",
          },
          {
            title: "Financial Institutions",
            icon: <Banknote size={40} />,
            description:
              "We facilitate access to finance for farmers and agribusinesses through strategic banking partnerships.",
          },
          {
            title: "Development Organizations",
            icon: <Globe size={40} />,
            description:
              "We work with global and local NGOs to drive sustainable agricultural initiatives.",
          },
          {
            title: "Private Sector & Investors",
            icon: <Handshake size={40} />,
            description:
              "We engage with private investors to bring innovation and technology to the agricultural value chain.",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-[#0B6623] text-white p-6 rounded-lg shadow-md text-center"
          >
            <div className="flex justify-center">{item.icon}</div>
            <h3 className="text-2xl font-bold mt-4">{item.title}</h3>
            <p className="mt-2">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Areas;
