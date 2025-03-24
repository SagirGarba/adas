import React from "react";
import { Users, Home, Cpu, Handshake } from "lucide-react"; 

const Achievement = () => {
  const stats = [
    { number: "1500+", label: "Farmers Empowered", icon: <Users size={40} /> },
    { number: "300+", label: "Community Engagements", icon: <Home size={40} /> },
    {
      number: "50+",
      label: "Technology Solutions Introduced",
      icon: <Cpu size={40} />,
    },
    {
      number: "100+",
      label: "Partners & Stakeholders",
      icon: <Handshake size={40} />,
    },
  ];

  return (
    <section className="wrapper py-16 text-center px-6">
      <h2 className="text-3xl font-semibold text-[#0B6623]">Our Impact</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-[#0B6623] text-white p-6 rounded-lg shadow-md flex flex-col items-center"
          >
            <div className="mb-3 text-white">{stat.icon}</div>
            <h3 className="text-4xl font-bold">{stat.number}</h3>
            <p className="mt-2">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievement;
