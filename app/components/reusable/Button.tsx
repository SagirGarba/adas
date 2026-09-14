"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function Button({
  text,
  bgColor = "[#0B6623]",
  textColor = "white",
  style,
  className,
  icons,
  linkTo = "/contact", // Default navigation path
  handleClick,
}: ButtonProps) {
  const router = useRouter(); // Next.js navigation hook

  const resolvedBgClass =
    bgColor === "white"
      ? "bg-white"
      : bgColor === "[#0B6623]" || bgColor === "green"
        ? "bg-[#0B6623]"
        : "bg-[#0B6623]";

  const resolvedTextClass =
    textColor === "[#0B6623]" || textColor === "green"
      ? "text-[#0B6623]"
      : "text-white";

  return (
    <button
      style={style}
      onClick={() => {
        if (handleClick) {
          handleClick();
        } else {
          router.push(linkTo); // Correct Next.js navigation
        }
      }}
      className={`inline-flex h-fit w-fit items-center justify-center rounded-lg px-6 py-[10px] font-semibold shadow-md transition-all duration-300 hover:-translate-y-1 ${resolvedBgClass} ${resolvedTextClass} ${className ?? ""}`}
    >
      {text ? text : "Contact Us"}
      {icons}
    </button>
  );
}

type ButtonProps = {
  text?: string;
  bgColor?: string;
  textColor?: string;
  icons?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  linkTo?: string;
  handleClick?: () => void;
};
