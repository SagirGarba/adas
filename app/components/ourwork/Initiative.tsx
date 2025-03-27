import React from "react";
import Image from "next/image";
import Images from "@/public/images/home/Gallery/index";

const Initiative = () => {
  return (
    <section className="wrapper py-16 px-6 bg-gray-100">
      <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-center text-[#0B6623]">
        Key Domain
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        {[
          {
            title: "Cluster Formation",
            img: Images[1],
            desc: "We organize farmers into clusters to improve market access and productivity.",
          },
          {
            title: "Technology Adoption",
            img: Images[2],
            desc: "We introduce modern farming techniques and digital solutions to enhance efficiency.",
          },
          {
            title: "Community Engagement",
            img: Images[12],
            desc: "We support local farmers with infrastructure and capacity-building programs.",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-white p-0 rounded-lg shadow-md text-center"
          >
            <Image
              src={item.img}
              width={300}
              height={200}
              className="w-full rounded-t-md mb-6"
              alt={item.title}
            />
            <h3 className="text-xl font-semibold text-[#0B6623] px-6">
              {item.title}
            </h3>
            <p className="mt-2 px-6 pb-9">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Initiative;
