"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";

const PartnershipForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    businessName: "",
    businessType: "",
    investmentRange: "",
    experience: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
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
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.businessName.trim())
      newErrors.businessName = "Business name is required";
    if (!formData.businessType)
      newErrors.businessType = "Business type is required";
    if (!formData.investmentRange)
      newErrors.investmentRange = "Investment range is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      console.log("Form data to be emailed:", formData);
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setIsSuccess(true);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        businessName: "",
        businessType: "",
        investmentRange: "",
        experience: "",
        message: "",
      });
    } catch (error) {
      console.error("Submission error:", error);
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
            Your partnership application has been successfully submitted. Our
            team will review your information and get back to you within 3-5
            business days.
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
      <div className="w-full  bg-white shadow-lg rounded-lg overflow-hidden">
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
                  Full Name *
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 ${
                    errors.fullName
                      ? "border-red-500 focus:ring-red-300"
                      : "border-gray-300 focus:ring-green-500 focus:border-green-500"
                  }`}
                  placeholder="Enter your full name"
                />
                {errors.fullName && (
                  <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
                )}
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
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 ${
                    errors.email
                      ? "border-red-500 focus:ring-red-300"
                      : "border-gray-300 focus:ring-green-500 focus:border-green-500"
                  }`}
                  placeholder="Enter your email"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <label className="block text-gray-700 mb-2 font-medium">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 ${
                    errors.phone
                      ? "border-red-500 focus:ring-red-300"
                      : "border-gray-300 focus:ring-green-500 focus:border-green-500"
                  }`}
                  placeholder="Enter your phone number"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                )}
              </div>

              <div>
                <label className="block text-gray-700 mb-2 font-medium">
                  Business/Organization Name *
                </label>
                <input
                  type="text"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 ${
                    errors.businessName
                      ? "border-red-500 focus:ring-red-300"
                      : "border-gray-300 focus:ring-green-500 focus:border-green-500"
                  }`}
                  placeholder="Enter your business name"
                />
                {errors.businessName && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.businessName}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-gray-700 mb-2 font-medium">
                  Business Type *
                </label>
                <select
                  name="businessType"
                  value={formData.businessType}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 ${
                    errors.businessType
                      ? "border-red-500 focus:ring-red-300"
                      : "border-gray-300 focus:ring-green-500 focus:border-green-500"
                  }`}
                >
                  <option value="">Select your business type</option>
                  <option value="Farm Owner/Operator">
                    Farm Owner/Operator
                  </option>
                  <option value="Agri-Input Supplier">
                    Agri-Input Supplier
                  </option>
                  <option value="Processor/Manufacturer">
                    Processor/Manufacturer
                  </option>
                  <option value="Distributor/Retailer">
                    Distributor/Retailer
                  </option>
                  <option value="Investor/Financier">Investor/Financier</option>
                  <option value="Research/Education">Research/Education</option>
                  <option value="Other">Other</option>
                </select>
                {errors.businessType && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.businessType}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-gray-700 mb-2 font-medium">
                  Potential Investment Range *
                </label>
                <select
                  name="investmentRange"
                  value={formData.investmentRange}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 ${
                    errors.investmentRange
                      ? "border-red-500 focus:ring-red-300"
                      : "border-gray-300 focus:ring-green-500 focus:border-green-500"
                  }`}
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
                {errors.investmentRange && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.investmentRange}
                  </p>
                )}
              </div>
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

            <div>
              <label className="block text-gray-700 mb-2 font-medium">
                Additional Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                rows={4}
                placeholder="Any additional information you'd like to share"
              ></textarea>
            </div>

            <div className="pt-4 flex justify-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className={` px-6 bg-green-700 text-white py-3 rounded-lg hover:bg-green-800 transition font-medium text-lg ${
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
