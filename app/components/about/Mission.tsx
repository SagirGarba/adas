import React from "react";
import Image from "next/image";
import { cards } from "@/app/utils/data";


const Mission = () => {
  
  return (
    <section className=" wrapper  mt-24 mb-12 ">
      <div className="ml-4 flex-col items-center space-y-4 lg:flex lg:flex-row lg:justify-around lg:space-x-8 lg:space-y-0">
        {cards.map((card, index) => (
          <div
            className="mission group hover:bg-[#242424] bg-[#0B6623] text-white flex w-[90vw] items-center gap-8 p-4 md:flex-row md:p-8 lg:w-[576px] rounded-2xl h-[300px]"
            key={index}
          >
            <Image
              src={card.image}
              width={150}
              height={72}
              className="h-[72px] w-[90px] md:w-[150px]"
              alt={card.title}
            />
            <div className="content">
              <h2 className="pb-2 text-3xl font-bold  ">{card.title}</h2>
              <p className="text font-light  md:text-[20px]">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Mission;
