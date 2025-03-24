"use client";

import Link from "next/link";
import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { IoLogoFacebook } from "react-icons/io";

const ContactUs = () => {
  return (
    <div className="wrapper bg-gray-100 flex items-center justify-center px-4 py-10">
      <div className="max-w-6xl w-full bg-white shadow-lg rounded-lg overflow-hidden md:flex">
        {/* Left Section - Contact Info */}
        <div className="w-full md:w-1/2 bg-green-700 text-white p-8 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-10">Get in Touch</h2>
          <p className="mb-10">
            Have questions or need assistance? Reach out to us anytime, and
            we&apos;ll be happy to help.
          </p>

          <div className="space-y-8">
            <div className="flex items-center">
              <FaMapMarkerAlt className="text-2xl mr-4" />
              <p>
                {" "}
                No. 56, Girei Street, Dougirei GRA Jimeta-Yola, Adamawa State,
                Nigeria || Behind Government House Yola, AADIL Complex
              </p>
            </div>
            <div className="flex items-center">
              <FaPhoneAlt className="text-2xl mr-4" />
              <p>+234 803 277 7606</p>
            </div>
            <div className="flex items-center">
              <FaEnvelope className="text-2xl mr-4" />
              <p>support@adasprogramme.com</p>
            </div>
          </div>

          {/* Social Media */}
          <div className="flex mt-12 text-2xl space-x-4">
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

        {/* Right Section - Contact Form */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Send Us a Message
          </h2>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700">Full Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="block text-gray-700">Email Address</label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block text-gray-700">Phone Number</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Enter your phone number"
              />
            </div>
            <div>
              <label className="block text-gray-700">Message</label>
              <textarea
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                rows={4}
                placeholder="Type your message here"
              ></textarea>
            </div>
            <button className="w-full bg-green-700 text-white py-2 rounded-lg hover:bg-green-800 transition">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
