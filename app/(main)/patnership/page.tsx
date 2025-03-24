import Action from "@/app/components/patnership/Action";
import Areas from "@/app/components/patnership/Areas";
import Hero from "@/app/components/patnership/Hero";
import Patnerships from "@/app/components/patnership/Patnerships";
import React from "react";

const page = () => {
  return (
    <div>
      <Hero />
      <Patnerships />
      <Areas />
      <Action />
    </div>
  );
};

export default page;
