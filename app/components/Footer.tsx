import React from "react";

import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { IoLogoFacebook } from "react-icons/io";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className=" wrapper mt-10 bg-[#0E1012] text-white">
      <section className="   py-5 grid gap-5  gap-y-10 sm:grid-cols-2 lg:grid-cols-5">
        <div className=" lg:col-span-2 flex flex-col gap-5">
          <h1 className=" pb-2 font-semibold text-xl">Quick Links</h1>
          <Link href="/">
            <p className="  font-normal">Home</p>
          </Link>
          <Link href="/aboutus">
            {" "}
            <p>About Us</p>
          </Link>

          <Link href="/ourwork">
            {" "}
            <p>Our Work</p>
          </Link>
          <Link href="/patnership">
            {" "}
            <p>Patnership</p>
          </Link>

          <Link href="/programme">
            {" "}
            <p>Programme</p>
          </Link>
          <Link href="/services">
            <p>Services</p>
          </Link>
          <Link href="/contact">
            <p>Contact Us</p>
          </Link>
        </div>

        <div className=" lg:col-span-2 grid grid-rows-2">
          <div className=" row-span-1">
            <h1 className=" pb-5 font-semibold text-[17px]">Office 1</h1>
            <p>
              No. 56, Girei Street, Dougirei GRA{" "}
              <span className=" block">
                Jimeta-Yola, Adamawa State, Nigeria
              </span>
            </p>
          </div>

          <div className=" row-span-1 place-content-end">
            <h1 className=" pb-3 font-semibold text-[17px]">Office 2</h1>
            <p>
              Behind Government House Yola,{" "}
              <span className=" md:block"> AADIL Complex</span>{" "}
            </p>
          </div>
        </div>

        <div className=" space-y-3 grid grid-rows-3">
          <div>
            <h1 className=" pb-3 font-semibold text-[17px]">Email</h1>
            <p>support@adasprogramme.com</p>
          </div>
          <div>
            <h1 className=" pb-3 font-semibold text-[17px]">Contact Us</h1>
            <p>+234 803 277 7606</p>
          </div>
          <div className="flex place-items-end gap-3 text-2xl my-5">
            <Link
              href="https://www.linkedin.com/company"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsLinkedin />
            </Link>
            <Link
              href="https://web.facebook.com/profile.php?id=61555734735593"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLogoFacebook />
            </Link>
            <Link
              href="https://www.instagram.com/adasprogramme_nigeria/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </Link>
            <Link
              href="https://x.com/adasprogrammeng"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </Link>
            <Link
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube />
            </Link>
          </div>
        </div>
      </section>
      <div className=" flex justify-cente mt-5 md:justify-end gap-5 mb-5"></div>
      <div className="h-[0.5px] bg-white w-full" />
      <section className=" py-5">
        <p className=" ">
          © Adamawa State Agribusiness Support Programme{" "}
          {new Date().getFullYear()}. All right reserved
        </p>
      </section>
    </footer>
  );
}
