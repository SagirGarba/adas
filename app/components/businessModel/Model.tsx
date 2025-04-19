import { models } from "@/app/utils/data";
import React from "react";

const BusinessModels = () => {
  

  return (
    <section className="wrapper py-16  bg-[#F9FBF9]">
      <h2 className="text-3xl md:text-4xl font-bold text-[#0B6623] text-center mb-12">
        ADAS Business Models
      </h2>
      <div className="space-y-12">
        {models.map((model, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-2xl p-6 md:p-10 border-l-8 border-[#0B6623] transition duration-300 hover:shadow-xl"
          >
            <h3 className="text-2xl md:text-3xl font-semibold text-[#0B6623] mb-4">
              {model.title}
            </h3>
            <p className="text-gray-700 whitespace-pre-line text-lg leading-relaxed">
              {model.description}
            </p>
            <div className="mt-6">
              <button className="bg-[#0B6623] hover:bg-[#095421] text-white px-5 py-3 rounded-lg shadow-md transition-all duration-300">
                Join our Partnership Community
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BusinessModels;
