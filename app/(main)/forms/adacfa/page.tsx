"use client";

import { useState } from "react";
import * as XLSX from "xlsx";
import { FaCheckCircle } from "react-icons/fa";
import Link from "next/link";

type UserData = {
  name: string;
  email: string;
  phone: string;
  location: string;
  reason: string;
};

const JoinADACFA = () => {
  const [formData, setFormData] = useState<UserData>({
    name: "",
    email: "",
    phone: "",
    location: "",
    reason: "",
  });

  const [adminEmail, setAdminEmail] = useState("");
  const [submittedData, setSubmittedData] = useState<UserData[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleAdminEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAdminEmail(e.target.value);
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Full name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.location.trim()) newErrors.location = "Location is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      console.log("Form submitted:", formData);
      await new Promise((resolve) => setTimeout(resolve, 1500)); // Simulate API call

      setSubmittedData((prev) => [...prev, formData]);
      setFormData({ name: "", email: "", phone: "", location: "", reason: "" });
      setIsSuccess(true);
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const exportToExcel = () => {
    console.log("Exporting data to Excel:", submittedData);

    const worksheet = XLSX.utils.json_to_sheet(submittedData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "ADACFA Members");
    XLSX.writeFile(workbook, "ADACFA_Members.xlsx");

    if (adminEmail) {
      console.log(`Admin email notification would be sent to: ${adminEmail}`);
      alert(`Excel file has been generated. Please send it to ${adminEmail}.`);
    }
  };

  if (isSuccess) {
    return (
      <div className="wrapper bg-gray-100 flex items-center justify-center px-4 py-20">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden p-8 text-center max-w-md">
          <div className="flex justify-center text-green-600 mb-4">
            <FaCheckCircle size={60} />
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Thank You for Joining!
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Your application to join ADACFA has been successfully submitted.
            Welcome to our community!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => setIsSuccess(false)}
              className="bg-green-700 text-white px-6 py-2 rounded-lg hover:bg-green-800 transition"
            >
              Submit Another Application
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
      <div className=" w-full bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-8">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold text-green-700 mb-2">
              Join ADACFA Community
            </h1>
            <p className="text-gray-600">
              Please fill out all required fields to join our community
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
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 ${
                    errors.name
                      ? "border-red-500 focus:ring-red-300"
                      : "border-gray-300 focus:ring-green-500 focus:border-green-500"
                  }`}
                  placeholder="Enter your full name"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
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
                  Location *
                </label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 ${
                    errors.location
                      ? "border-red-500 focus:ring-red-300"
                      : "border-gray-300 focus:ring-green-500 focus:border-green-500"
                  }`}
                  placeholder="Enter your location"
                />
                {errors.location && (
                  <p className="text-red-500 text-sm mt-1">{errors.location}</p>
                )}
              </div>
            </div>

            <div>
              <label className="block text-gray-700 mb-2 font-medium">
                Why do you want to join? (Optional)
              </label>
              <textarea
                name="reason"
                value={formData.reason}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                rows={3}
                placeholder="Tell us why you want to join ADACFA"
              />
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
                  "Join Community"
                )}
              </button>
            </div>
          </form>

          {submittedData.length > 0 && (
            <div className="mt-10">
              <h3 className="text-xl font-semibold text-gray-700 mb-4">
                Admin Tools
              </h3>
              <input
                type="email"
                value={adminEmail}
                onChange={handleAdminEmailChange}
                placeholder="Enter admin email to receive Excel"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
              />
              <button
                onClick={exportToExcel}
                className="w-full bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition font-medium"
              >
                Export to Excel (Admin Only)
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default JoinADACFA;
