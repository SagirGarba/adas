"use client";
import { HiOutlineMenu } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { navigation } from "../utils/data";
import Button from "./reusable/Button";

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [open]);

  const NavList = () => (
    <div className="flex flex-col lg:flex-row lg:items-center gap-5">
      {navigation.map((item, i) => (
        <Link
          key={i}
          href={item.href}
          className={`relative px-3 py-1 hover:text-primary ${
            pathname === item.href ? "text-gray-300" : "text-white"
          }`}
          onClick={() => setOpen(false)} // Close menu when a link is clicked
        >
          {item.name}
        </Link>
      ))}
    </div>
  );

  return (
    <>
      {/* Fixed Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#0B6623] text-white shadow-md">
        <div className="wrapper max-w-[1440px] mx-auto flex items-center justify-between py-4 px-6">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image
              width={40}
              height={20}
              alt="logo"
              src="/logo.png"
              className="w-auto"
            />
          </div>

          {/* Navigation (Desktop) */}
          <div className="hidden lg:flex flex-1 justify-center">
            <NavList />
          </div>

          {/* Buttons (Desktop) */}
          {/* <div className="hidden lg:flex gap-4">
            <Link href="/auth/register">
              <Button text="Register" bgColor="white" textColor="[#0B6623]" />
            </Link>
          </div> */}

          <div className="hidden lg:flex gap-4">
            <Button textColor="[#0B6623]" bgColor="white" />
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              className="bg-[#0B6623] text-white p-2 rounded-md"
              onClick={() => setOpen(!open)}
            >
              {open ? (
                <IoMdClose className="size-6" />
              ) : (
                <HiOutlineMenu className="size-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden transition-all duration-500 overflow-hidden ${
            open ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col items-center gap-5 py-5">
            <NavList />
          </div>
        </div>
      </nav>
      {/* Push Content Down to Avoid Overlap */}
      <div className="h-[70px]" /> {/* Adjust based on navbar height */}
    </>
  );
}
