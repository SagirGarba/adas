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
      className={`bg-${bgColor} text-${textColor} w-fit h-fit rounded-lg px-6 py-[10px] ${className}`}
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
