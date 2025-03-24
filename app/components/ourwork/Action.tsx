import Link from "next/link";
import React from "react";

const Action = () => {
  return (
    <section className="wrapper py-16 text-center px-6 bg-[#0B6623] text-white">
      <h2 className="text-3xl font-semibold">The Journey So Far</h2>
      <p className="mt-4 text-lg max-w-2xl mx-auto">
        Learn more about our progress, impact, and future goals in
        revolutionizing agriculture.
      </p>
      <div className="mt-6">
        <Link href="/blog/blog1">
          <button className="bg-white text-[#0B6623] px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
            Explore More
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Action;
