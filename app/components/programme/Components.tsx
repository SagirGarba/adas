import React from "react";
import { Leaf, Landmark, Banknote, Layers } from "lucide-react";

const Components = () => {
  return (
    <section className="wrapper px-6 py-16">
      <h2 className="text-3xl font-semibold text-[#0B6623] text-center">
        Programme Components
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-8">
        {[
          {
            titl: "Component 1",
            title: "Value Chain Development & Climate Smart Agriculture",
            icon: <Leaf size={40} />,
            description:
              "Enhancing agricultural productivity through sustainable and climate-smart practices.",
          },
          {
            titl: "Component 2",
            title: "Enabling Policy, Planning, Institutions & Reforms",
            icon: <Landmark size={40} />,
            description:
              "Strengthening policy frameworks and institutions for agricultural development.",
          },
          {
            titl: "Component 3",
            title: "Access to Finance, Investment & Revenue Enhancement",
            icon: <Banknote size={40} />,
            description:
              "Facilitating access to capital and investments to boost agricultural growth.",
          },
          {
            titl: "Component 4",
            title: "Implementing Structures, Coordination & Management",
            icon: <Layers size={40} />,
            description:
              "Ensuring efficient implementation and coordination of agricultural programs.",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-[#0B6623] text-white p-6 rounded-lg shadow-md text-center 
                      transition-all duration-300 ease-in-out border-2 border-transparent
                      hover:bg-white hover:text-[#0B6623] hover:border-[#0B6623]"
          >
            <div className="flex justify-center">{item.icon}</div>
            <h3 className="text-xl font-semibold mt-4">{item.titl}</h3>
            <h3 className="text-2xl font-bold mt-4">{item.title}</h3>
            <p className="mt-2">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Components;
