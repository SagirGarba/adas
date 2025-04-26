import React from "react";
import Button from "../reusable/Button";
import Link from "next/link";

const Action = () => {
  return (
    <section className="wrapper py-16 text-center px-6 bg-[#0B6623] text-white">
      <h2 className="text-3xl font-semibold">Join Our Partnership Community</h2>
      <p className="mt-4 text-lg max-w-2xl mx-auto">
        Be part of a transformative movement in agriculture.
      </p>
      <div className="mt-6">
        <Link href="/forms/partnership">
          <Button text="Join Now" bgColor="white" textColor="[#0B6623]" />
        </Link>
      </div>
    </section>
  );
};

export default Action;
