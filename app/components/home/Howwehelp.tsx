import React from "react";

const HowWeHelp = () => {
  return (
    <section className="wrapper py-16">
      <div className="text-center">
        <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-black mb-6">
          How We Help
        </h2>
        <p className="text-lg md:text-2xl text-black mb-10">
          At ADAS-P, we empower agribusinesses by offering tailored support,
          innovative solutions, and strategic partnerships. Here’s how we help:
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* Help Cards */}
        {[
          {
            title: "Partnering with You",
            description:
              "We collaborate closely with agribusiness owners to understand their unique needs and create customized solutions.",
          },
          {
            title: "Leveraging Technology",
            description:
              "Our innovative tech-driven solutions improve efficiency and productivity in agriculture.",
          },
          {
            title: "Providing Targeted Support",
            description:
              "We offer tailored interventions, market access, and funding opportunities to help agribusinesses grow.",
          },
          {
            title: "Increasing Yields",
            description:
              "Our strategies help farmers produce more with less effort, leading to sustainable agricultural growth.",
          },
          {
            title: "Strengthening Market Connections",
            description:
              "We connect farmers with buyers and new market opportunities to ensure profitability.",
          },
          {
            title: "Supporting Sustainable Practices",
            description:
              "We promote environmentally friendly farming techniques to build a greener future.",
          },
        ].map((help, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md border border-[#0B6623] 
              flex flex-col items-center text-center transition-all duration-300 hover:scale-105 hover:text-lg"
          >
            <h3 className="text-xl font-semibold text-[#0B6623] transition-all duration-300">
              {help.title}
            </h3>
            <p className="mt-2 text-[#242424] transition-all duration-300">
              {help.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowWeHelp;
