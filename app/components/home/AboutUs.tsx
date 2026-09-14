import React from "react";
import Link from "next/link";
import Image from "next/image";
import Images from "@/public/images/home/Gallery/index";

const AboutUs = () => {
  return (
    <section className="wrapper py-16 flex flex-col overflow-hidden bg-no-repeat bg-left-bottom">
      <div className="container mx-auto px-4">
        <div className="flex flex-col pt-8 pb-5 md:flex-row md:items-center md:justify-between">
          {/* Left Image 9 */}
          <div className="flex flex-col w-full md:w-1/2 md:items-end">
            <Image
              src={Images[4]}
              width={888}
              height={792}
              alt="Who We Are"
              className="rounded-2xl object-cover object-center shadow-sm"
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
              <Link
                href="/aboutus"
                className="flex w-fit items-center gap-2 rounded-lg bg-[#0B6623] px-4 py-3 text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-[#09511d]"
              >
                Learn More <span aria-hidden="true">→</span>
              </Link>
            </div>

            <div className="mx-auto mt-8">
              <Image
                src={Images[14]}
                width={700}
                height={692}
                alt="Supporting Image"
                className="rounded-2xl object-cover object-center shadow-sm"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
