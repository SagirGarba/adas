"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface FormData {
  companyName: string;
  rcNumber: string;
  companyEmail: string;
  companyPhone: string;
  representativeName: string;
  representativePhone: string;
  sectorType: string;
  collaborationArea: string;
  potentialInvestment: string;
  experience: string;
  companyProfile: string;
}

const PartnershipForm = () => {
  const [formData, setFormData] = useState<FormData>({
    companyName: "",
    rcNumber: "",
    companyEmail: "",
    companyPhone: "",
    representativeName: "",
    representativePhone: "",
    sectorType: "",
    collaborationArea: "",
    potentialInvestment: "",
    experience: "",
    companyProfile: "",
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

    if (!formData.companyName.trim()) {
      toast.error("Company name is required");
      isValid = false;
    }
    if (!formData.rcNumber.trim()) {
      toast.error("RC Number is required");
      isValid = false;
    }
    if (!formData.companyEmail.trim()) {
      toast.error("Company email is required");
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.companyEmail)) {
      toast.error("Please enter a valid email");
      isValid = false;
    }
    if (!formData.companyPhone.trim()) {
      toast.error("Company phone is required");
      isValid = false;
    }
    if (!formData.representativeName.trim()) {
      toast.error("Representative name is required");
      isValid = false;
    }
    if (!formData.representativePhone.trim()) {
      toast.error("Representative phone is required");
      isValid = false;
    }
    if (!formData.sectorType) {
      toast.error("Sector type is required");
      isValid = false;
    }
    if (!formData.collaborationArea) {
      toast.error("Area of collaboration is required");
      isValid = false;
    }
    if (!formData.potentialInvestment) {
      toast.error("Potential investment is required");
      isValid = false;
    }

    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/partnership", {
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

      toast.success("Partnership application submitted successfully!");
      setIsSuccess(true);
      // Reset form if needed
      setFormData({
        companyName: "",
        rcNumber: "",
        companyEmail: "",
        companyPhone: "",
        representativeName: "",
        representativePhone: "",
        sectorType: "",
        collaborationArea: "",
        potentialInvestment: "",
        experience: "",
        companyProfile: "",
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
            Thank You for Your Interest!
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Your partnership application has been successfully submitted. Thank
            you for doing business with ADAS-P.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => setIsSuccess(false)}
              className="bg-green-700 text-white px-6 py-2 rounded-lg hover:bg-green-800 transition"
            >
              Submit Another Application
            </button>
            <Link
              href="/patnership"
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
              Partnership Application
            </h2>
            <p className="text-gray-600">
              Please fill out all required fields to submit your application
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 mb-2 font-medium">
                  Company Name *
                </label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2`}
                  placeholder="Enter company name"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2 font-medium">
                  RC Number *
                </label>
                <input
                  type="text"
                  name="rcNumber"
                  value={formData.rcNumber}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2`}
                  placeholder="Enter RC number"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2 font-medium">
                  Company Email Address *
                </label>
                <input
                  type="email"
                  name="companyEmail"
                  value={formData.companyEmail}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2`}
                  placeholder="Enter company email"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2 font-medium">
                  Company Phone Number *
                </label>
                <input
                  type="tel"
                  name="companyPhone"
                  value={formData.companyPhone}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2`}
                  placeholder="Enter company phone number"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2 font-medium">
                  Representative Name *
                </label>
                <input
                  type="text"
                  name="representativeName"
                  value={formData.representativeName}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2`}
                  placeholder="Enter representative name"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2 font-medium">
                  Representative Phone Number *
                </label>
                <input
                  type="tel"
                  name="representativePhone"
                  value={formData.representativePhone}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2`}
                  placeholder="Enter representative phone number"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2 font-medium">
                  Private or Public Sector *
                </label>
                <select
                  name="sectorType"
                  value={formData.sectorType}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2`}
                >
                  <option value="">Select sector type</option>
                  <option value="Private">Private</option>
                  <option value="Public">Public</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 mb-2 font-medium">
                  Potential Area of Collaboration *
                </label>
                <select
                  name="collaborationArea"
                  value={formData.collaborationArea}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2`}
                >
                  <option value="">Select area of collaboration</option>
                  <option value="Corporate Farm">Corporate Farm</option>
                  <option value="Farm Cooperative">Farm Cooperative</option>
                  <option value="Development Partner">
                    Development Partner
                  </option>
                  <option value="Input/Equipment Dealer">
                    Input/Equipment Dealer
                  </option>
                  <option value="Off-taker">Off-taker</option>
                  <option value="Aggregator">Aggregator</option>
                  <option value="Logistics">Logistics</option>
                  <option value="Service Provider">Service Provider</option>
                  <option value="Government Agency">Government Agency</option>
                  <option value="Exporter">Exporter</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 mb-2 font-medium">
                  Potential Investment *
                </label>
                <select
                  name="potentialInvestment"
                  value={formData.potentialInvestment}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2`}
                >
                  <option value="">Select investment range</option>
                  <option value="Under ₦5,000,000">Under ₦5,000,000</option>
                  <option value="₦5,000,000 - ₦20,000,000">
                    ₦5,000,000 - ₦20,000,000
                  </option>
                  <option value="₦20,000,000 - ₦50,000,000">
                    ₦20,000,000 - ₦50,000,000
                  </option>
                  <option value="₦50,000,000 - ₦100,000,000">
                    ₦50,000,000 - ₦100,000,000
                  </option>
                  <option value="Over ₦100,000,000">Over ₦100,000,000</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-gray-700 mb-2 font-medium">
                Company Profile
              </label>
              <textarea
                name="companyProfile"
                value={formData.companyProfile}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                rows={4}
                placeholder="Provide details about your company"
              ></textarea>
            </div>

            <div>
              <label className="block text-gray-700 mb-2 font-medium">
                Agribusiness Experience
              </label>
              <textarea
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                rows={3}
                placeholder="Briefly describe your experience in agribusiness"
              ></textarea>
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
                  "Submit Application"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PartnershipForm;
