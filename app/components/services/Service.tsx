import React from "react";
import { Users, Package, Banknote, ShoppingCart } from "lucide-react";

const services = [
  {
    title: "Demand-Led Agribusiness Development",
    description:
      "ADAS-P fosters community empowerment through agribusiness development. It organizes farmers into clusters and producer organizations, using aggregation and out-grower models. These models connect farmers to markets, suppliers, and government agencies via contracts, ensuring market access, quality standards, and economies of scale.",
    icon: <Users size={50} />,
    link: "/forms/cluster",
    linkText: "Join or Register a Cluster",
  },
  {
    title: "Value-Chain Development",
    description:
      "Our work spans key commodities, including crops, livestock, fish, and forestry products. By supporting value chain productivity and promoting best practices, we help farmers and producers increase their yields and quality, making their products more competitive in local and global markets.",
    icon: <Package size={50} />,
    link: "/forms/produce",
    linkText: "Register Your Produce for Sale",
  },
  {
    title: "Financial Services",
    description:
      "ADAS-P facilitates access to finance through partnerships with financial institutions and the establishment of the Adamawa Agribusiness Cooperative Financing Agency (ADACFA). We offer credit guarantees, tailored financial products, and financial literacy programs to ensure that value chain actors have the resources they need to grow their businesses.",
    icon: <Banknote size={50} />,
    link: "/forms/adacfa",
    linkText: "Join ADACFA",
  },
  {
    title: "Market Access",
    description:
      "We connect farmers and producers to local, regional, and international markets. Through our digital platforms, market linkages, and infrastructure upgrades, ADAS-P ensures that agricultural products reach buyers efficiently, enhancing the visibility and profitability of agribusinesses across Adamawa State.",
    icon: <ShoppingCart size={50} />,
    link: "/forms/asabis",
    linkText: "Register or Log into ASABIS",
  },
];

const Service = () => {
  return (
    <section className="wrapper px-6 py-16">
      <h2 className="text-4xl font-bold text-center text-[#0B6623] mb-12">
        Our Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="p-8 bg-[#0B6623] text-white rounded-lg shadow-md text-center 
                      transition-all duration-300 ease-in-out border-2 border-transparent
                      hover:bg-white hover:text-[#0B6623] hover:border-[#0B6623]"
          >
            <div className="flex justify-center mb-4 ">{service.icon}</div>
            <h3 className="text-2xl font-semibold">{service.title}</h3>
            <p className="mt-3">{service.description}</p>
            <a
              href={service.link}
              className="inline-block mt-4 px-6 py-2 bg-[#0B6623] text-white font-semibold rounded-lg 
                         transition duration-300 hover:bg-white hover:text-[#0B6623] border-2 border-white 
                         hover:border-[#0B6623]"
            >
              {service.linkText}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Service;
