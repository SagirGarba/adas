"use client";

import { useState } from "react";
import * as XLSX from "xlsx";

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

  const [adminEmail, setAdminEmail] = useState(""); // Email for receiving submissions
  const [submittedData, setSubmittedData] = useState<UserData[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAdminEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAdminEmail(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      formData.name &&
      formData.email &&
      formData.phone &&
      formData.location
    ) {
      setSubmittedData((prevData) => [...prevData, formData]);
      setFormData({ name: "", email: "", phone: "", location: "", reason: "" });
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 5000); // Hide confirmation after 5 seconds
    }
  };

  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(submittedData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "ADACFA Members");
    XLSX.writeFile(workbook, "ADACFA_Members.xlsx");

    if (adminEmail) {
      alert(`Excel file has been generated. Please send it to ${adminEmail}.`);
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold text-center mb-6">
        Join ADACFA Community
      </h1>

      {isSubmitted && (
        <p className="text-green-600 text-center mb-4">
          ✅ Your form has been submitted successfully!
        </p>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Full Name"
          className="w-full p-3 border rounded-md"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="w-full p-3 border rounded-md"
          required
        />
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone Number"
          className="w-full p-3 border rounded-md"
          required
        />
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          placeholder="Location"
          className="w-full p-3 border rounded-md"
          required
        />
        <textarea
          name="reason"
          value={formData.reason}
          onChange={handleChange}
          placeholder="Why do you want to join? (Optional)"
          className="w-full p-3 border rounded-md"
          rows={3}
        />
        <button
          type="submit"
          className="w-full bg-[#0B6623] text-white p-3 rounded-md hover:bg-[#3e704b] transition"
        >
          Join Community
        </button>
      </form>

      {submittedData.length > 0 && (
        <div className="mt-6">
          <input
            type="email"
            value={adminEmail}
            onChange={handleAdminEmailChange}
            placeholder="Enter admin email to receive Excel"
            className="w-full p-3 border rounded-md mb-4"
          />
          <button
            onClick={exportToExcel}
            className="w-full bg-green-600 text-white p-3 rounded-md hover:bg-green-700 transition"
          >
            Export to Excel (Admin Only)
          </button>
        </div>
      )}
    </div>
  );
};

export default JoinADACFA;
