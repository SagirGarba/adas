import React from "react";
import Image from "next/image";
import Images from "@/public/images/home/Gallery/index";

const AboutUs = () => {
  
  return (
    <section className="wraper flex flex-col overflow-hidden bg-no-repeat bg-left-bottom">
      <div className="container mx-auto px-4">
        <div className="pt-20 pb-5 flex flex-col md:flex-row md:items-center md:justify-between">
          {/* Left Image */}
          <div className="flex flex-col w-full md:w-1/2 md:items-end">
            <Image
              src={Images[4]}
              width={888}
              height={792}
              alt="Who We Are"
              className="object-center object-cover rounded-2xl"
            />
          </div>

          {/* Right Content */}
          <div className="w-full md:w-1/2 ml-0 md:ml-8 py-8">
            <div className="max-w-[649px]">
              <h3 className="font-bold text-3xl">Who We Are</h3>
              <p className="text-left text-lg mt-6 pr-2">
                We are committed to transforming agriculture through
                partnerships, technology, and targeted interventions, enhancing
                productivity, facilitating market linkage and access to finance
                while creating sustainable agribusiness opportunities for
                economic growth and improved livelihoods.
              </p>
            </div>

            <div className="mt-2 md:py-4">
              <button className="bg-[#0B6623] text-white px-3 py-3 rounded-lg shadow-md transition-all w-fit flex items-center gap-2">
                Learn More &#11166; &#11166;
              </button>
            </div>

            <div className="mx-auto mt-8">
              <Image
                src={Images[14]}
                width={700}
                height={692}
                alt="Supporting Image"
                className="object-center object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
