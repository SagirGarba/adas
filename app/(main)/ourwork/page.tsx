import Action from "@/app/components/ourwork/Action";
import Archievement from "@/app/components/ourwork/Archievement";
import Hero from "@/app/components/ourwork/Hero";
import Initiative from "@/app/components/ourwork/Initiative";
import Whatwedo from "@/app/components/ourwork/Whatwedo";
import React from "react";

const page = () => {
  return <div>
    <Hero />
    <Whatwedo />
    <Initiative />
    <Archievement />
    <Action />
  </div>;
};

export default page;
