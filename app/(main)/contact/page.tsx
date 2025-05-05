"use client";

import React, { useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { IoLogoFacebook } from "react-icons/io";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactUs = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const result = await res.json();
      if (!res.ok) throw new Error(result.error || "Unknown error");

      toast.success("Message sent successfully!");
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error("Submission error:", error);
      toast.error(
        error instanceof Error ? error.message : "Failed to send message."
      );
    }
  };

  return (
    <div className="wrapper bg-gray-100 flex items-center justify-center px-4 py-10">
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
      <div className="wrapper bg-gray-100 flex items-center justify-center px-4 py-10">
        {/* ...your existing layout */}
      </div>
      <div className="max-w-6xl w-full bg-white shadow-lg rounded-lg overflow-hidden md:flex">
        {/* Left Section - Contact Info */}
        <div className="w-full md:w-1/2 bg-green-700 text-white p-8 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-10">Get in Touch</h2>
          <p className="mb-10">
            Have questions or need assistance? Reach out to us anytime.
          </p>
          <div className="space-y-8">
            <div className="flex items-center">
              <FaMapMarkerAlt className="text-2xl mr-4" />
              <p>No. 56, Girei Street...</p>
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
          <div className="flex mt-12 text-2xl space-x-4">
            <Link href="#">
              <BsLinkedin />
            </Link>
            <Link href="#">
              <IoLogoFacebook />
            </Link>
            <Link href="#">
              <FaInstagram />
            </Link>
            <Link href="#">
              <FaTwitter />
            </Link>
            <Link href="#">
              <FaYoutube />
            </Link>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Send Us a Message
          </h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-700">Full Name</label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                type="text"
                className="w-full px-4 py-2 border rounded-lg"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Email Address</label>
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                type="email"
                className="w-full px-4 py-2 border rounded-lg"
                placeholder="Your Email"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Phone Number</label>
              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                type="text"
                className="w-full px-4 py-2 border rounded-lg"
                placeholder="Your Phone Number"
              />
            </div>
            <div>
              <label className="block text-gray-700">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg"
                rows={4}
                placeholder="Your message here..."
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-green-700 text-white py-2 rounded-lg hover:bg-green-800 transition"
            >
              Send Message
            </button>
            {status && <p className="mt-2 text-sm text-gray-700">{status}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
