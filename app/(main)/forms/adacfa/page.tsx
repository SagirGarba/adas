"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface FormData {
  fullName: string;
  dateOfBirth: string;
  gender: string;
  maritalStatus: string;
  phoneNumber: string;
  email: string;
  lga: string;
  state: string;
  contactAddress: string;
  nextOfKinFullName: string;
  nextOfKinContactAddress: string;
  relationship: string;
  bvn: string;
  nin: string;
}

const PersonalInfoForm = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    dateOfBirth: "",
    gender: "",
    maritalStatus: "",
    phoneNumber: "",
    email: "",
    lga: "",
    state: "",
    contactAddress: "",
    nextOfKinFullName: "",
    nextOfKinContactAddress: "",
    relationship: "",
    bvn: "",
    nin: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    let isValid = true;

    if (!formData.fullName.trim()) {
      toast.error("Full name is required");
      isValid = false;
    }
    if (!formData.dateOfBirth) {
      toast.error("Date of birth is required");
      isValid = false;
    }
    if (!formData.gender) {
      toast.error("Gender is required");
      isValid = false;
    }
    if (!formData.maritalStatus) {
      toast.error("Marital status is required");
      isValid = false;
    }
    if (!formData.phoneNumber.trim()) {
      toast.error("Phone number is required");
      isValid = false;
    }
    if (!formData.email.trim()) {
      toast.error("Email is required");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      toast.error("Please enter a valid email");
      isValid = false;
    }
    if (!formData.lga.trim()) {
      toast.error("LGA is required");
      isValid = false;
    }
    if (!formData.state.trim()) {
      toast.error("State is required");
      isValid = false;
    }
    if (!formData.contactAddress.trim()) {
      toast.error("Contact address is required");
      isValid = false;
    }
    if (!formData.nextOfKinFullName.trim()) {
      toast.error("Next of kin full name is required");
      isValid = false;
    }
    if (!formData.nextOfKinContactAddress.trim()) {
      toast.error("Next of kin contact address is required");
      isValid = false;
    }
    if (!formData.relationship.trim()) {
      toast.error("Relationship is required");
      isValid = false;
    }
    if (!formData.bvn.trim()) {
      toast.error("BVN is required");
      isValid = false;
    }
    if (!formData.nin.trim()) {
      toast.error("NIN is required");
      isValid = false;
    }

    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/adacfa", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Submission failed");
      }

      toast.success("Personal information submitted successfully!");
      setIsSuccess(true);
      // Reset form if needed
      setFormData({
        fullName: "",
        dateOfBirth: "",
        gender: "",
        maritalStatus: "",
        phoneNumber: "",
        email: "",
        lga: "",
        state: "",
        contactAddress: "",
        nextOfKinFullName: "",
        nextOfKinContactAddress: "",
        relationship: "",
        bvn: "",
        nin: "",
      });
    } catch (err) {
      console.error("Submission error:", err);
      toast.error(err instanceof Error ? err.message : "Submission failed");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="wrapper bg-gray-100 flex items-center justify-center px-4 py-20">
        <div className="m bg-white shadow-lg rounded-lg overflow-hidden p-8 text-center">
          <div className="flex justify-center text-green-600 mb-4">
            <FaCheckCircle size={60} />
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Thank You for Your Submission!
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Your personal information has been successfully submitted.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => setIsSuccess(false)}
              className="bg-green-700 text-white px-6 py-2 rounded-lg hover:bg-green-800 transition"
            >
              Submit Another Form
            </button>
            <Link
              href="/"
              className="border border-green-700 text-green-700 px-6 py-2 rounded-lg hover:bg-green-50 transition"
            >
              Return to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="wrapper bg-gray-100 flex items-center justify-center px-4 py-10">
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
      <div className="w-full bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="w-full p-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-green-700 mb-2">
              Personal Information Form
            </h2>
            <p className="text-gray-600">
              Please fill out all required fields to submit your information
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 mb-2 font-medium">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2 font-medium">
                  Date of Birth *
                </label>
                <input
                  type="date"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2 font-medium">
                  Gender *
                </label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                >
                  <option value="">Select gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 mb-2 font-medium">
                  Marital Status *
                </label>
                <select
                  name="maritalStatus"
                  value={formData.maritalStatus}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                >
                  <option value="">Select marital status</option>
                  <option value="Single">Single</option>
                  <option value="Married">Married</option>
                  <option value="Divorced">Divorced</option>
                  <option value="Widowed">Widowed</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 mb-2 font-medium">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  placeholder="Enter phone number"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2 font-medium">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  placeholder="Enter email address"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2 font-medium">
                  LGA *
                </label>
                <input
                  type="text"
                  name="lga"
                  value={formData.lga}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  placeholder="Enter Local Government Area"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2 font-medium">
                  State *
                </label>
                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  placeholder="Enter state"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2 font-medium">
                  Contact Address *
                </label>
                <textarea
                  name="contactAddress"
                  value={formData.contactAddress}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  rows={2}
                  placeholder="Enter contact address"
                ></textarea>
              </div>

              <div>
                <label className="block text-gray-700 mb-2 font-medium">
                  Next of Kin Full Name *
                </label>
                <input
                  type="text"
                  name="nextOfKinFullName"
                  value={formData.nextOfKinFullName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  placeholder="Enter next of kin full name"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2 font-medium">
                  Next of Kin Contact Address *
                </label>
                <textarea
                  name="nextOfKinContactAddress"
                  value={formData.nextOfKinContactAddress}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  rows={2}
                  placeholder="Enter next of kin contact address"
                ></textarea>
              </div>

              <div>
                <label className="block text-gray-700 mb-2 font-medium">
                  Relationship *
                </label>
                <input
                  type="text"
                  name="relationship"
                  value={formData.relationship}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  placeholder="Enter relationship to next of kin"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2 font-medium">
                  BVN *
                </label>
                <input
                  type="text"
                  name="bvn"
                  value={formData.bvn}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  placeholder="Enter Bank Verification Number"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2 font-medium">
                  NIN *
                </label>
                <input
                  type="text"
                  name="nin"
                  value={formData.nin}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  placeholder="Enter National Identification Number"
                />
              </div>
            </div>

            <div className="pt-4 flex justify-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`px-6 bg-green-700 text-white py-3 rounded-lg hover:bg-green-800 transition font-medium text-lg ${
                  isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Processing...
                  </span>
                ) : (
                  "Submit Information"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfoForm;
