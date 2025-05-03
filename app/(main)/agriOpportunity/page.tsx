import Climate from "@/app/components/AgirBusiness/Climate";
import Food from "@/app/components/AgirBusiness/Food";
import Forest from "@/app/components/AgirBusiness/Forest";
import Geography from "@/app/components/AgirBusiness/Geography";
import Irrigation from "@/app/components/AgirBusiness/Irrigation";
import Livestock from "@/app/components/AgirBusiness/Livestock";
import Soil from "@/app/components/AgirBusiness/Soil";
import Water from "@/app/components/AgirBusiness/Water";
import React from "react";

const page = () => {
  return (
    <div className="wrapper">
      <Livestock />
      <Climate />
      <Water />
      <Soil />
      <Forest />
      <Food />
      <Geography />
      <Irrigation />
    </div>
  );
};

export default page;
