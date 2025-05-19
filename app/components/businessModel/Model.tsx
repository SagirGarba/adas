"use client";
import { models } from "@/app/utils/data";
import React, { useState, useRef, useEffect } from "react";
import Image, { StaticImageData } from "next/image";

interface Model {
  title: string;
  description: string;
  image?: string | StaticImageData;
}

const BusinessModels: React.FC = () => {
  return (
    <section className="wrapper py-16 bg-[#F9FBF9]">
      <h2 className="text-3xl md:text-4xl font-bold text-[#0B6623] text-center mb-12">
        ADAS Business Models
      </h2>
      <div className="space-y-12">
        {models.map((model, index) => (
          <ModelCard key={index} model={model} />
        ))}
      </div>
    </section>
  );
};

interface ModelCardProps {
  model: Model;
}

const ModelCard: React.FC<ModelCardProps> = ({ model }) => {
  const textRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const [textHeight, setTextHeight] = useState(0);
  const [imgHeight, setImgHeight] = useState(0);

  useEffect(() => {
    const updateHeights = () => {
      if (textRef.current) setTextHeight(textRef.current.clientHeight);
      if (imgRef.current) setImgHeight(imgRef.current.clientHeight);
    };

    updateHeights();
    window.addEventListener("resize", updateHeights);

    const resizeObserver = new ResizeObserver(updateHeights);
    if (textRef.current) resizeObserver.observe(textRef.current);
    if (imgRef.current) resizeObserver.observe(imgRef.current);

    return () => {
      window.removeEventListener("resize", updateHeights);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 md:p-10 border-l-8 border-[#0B6623] transition duration-300 hover:shadow-xl">
      {/* Card title - absolutely above all content */}
      <h3 className="text-2xl md:text-3xl font-semibold text-[#0B6623] mb-6 w-full">
        {model.title}
      </h3>

      <div className="relative">
        {/* Image container - now appears strictly below title */}
        {model.image && (
          <div
            ref={imgRef}
            className="float-right ml-6 mb-6 w-[450px] h-[400px] relative clear-after-title"
          >
            <Image
              src={model.image}
              alt={model.title}
              fill
              className="rounded-xl object-cover"
              sizes="(max-width: 768px) 100vw, 350px"
            />
          </div>
        )}

        {/* Text content */}
        <div
          ref={textRef}
          className="text-gray-700 whitespace-pre-line text-lg leading-relaxed text-justify"
        >
          {model.description}
        </div>

        {/* Button - always below all content */}
        <div
          className={`${
            textHeight > imgHeight ? "clear-both" : "clear-right"
          } mt-6`}
        >
          <button className="bg-[#0B6623] hover:bg-[#095421] text-white px-5 py-3 rounded-lg shadow-md transition-all duration-300">
            Join our Partnership Community
          </button>
        </div>
      </div>
    </div>
  );
};

export default BusinessModels;
