"use client";

import React from "react";
import Image from "next/image";
import { blogs } from "@/app/utils/data";



const BlogPage = () => {
  return (
    <div className="wrapper pt-10">
      <h1 className="text-3xl font-bold text-center mb-8">Latest Blog Posts</h1>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col h-full"
          >
            <Image
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5 flex flex-col flex-grow">
              <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
              <p className="text-gray-600 mb-4 flex-grow">{blog.description}</p>
              <div className="mt-auto">
                <a
                  href={blog.link}
                  className="inline-block bg-[#0B6623] text-white px-4 py-2 rounded-md hover:bg-[#3e704b] transition"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
