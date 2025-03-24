"use client";

import { useState } from "react";
import * as XLSX from "xlsx";

type UserData = {
  name: string;
  email: string;
  phone: string;
  cluster: string;
  clusterType: "join" | "register";
  description?: string;
};

// Simulated Admin Check (Replace this with real authentication logic)
const isAdmin = true; // Change this to false to hide export button for non-admins

const RegisterCluster = () => {
  const [formData, setFormData] = useState<UserData>({
    name: "",
    email: "",
    phone: "",
    cluster: "",
    clusterType: "join",
    description: "",
  });

  const [submittedData, setSubmittedData] = useState<UserData[]>([]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.phone && formData.cluster) {
      setSubmittedData((prevData) => [...prevData, formData]);
      setFormData({
        name: "",
        email: "",
        phone: "",
        cluster: "",
        clusterType: "join",
        description: "",
      });
    }
  };

  const exportToExcel = () => {
    if (!isAdmin) return; // Prevent non-admins from exporting
    const worksheet = XLSX.utils.json_to_sheet(submittedData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Cluster Registrations");
    XLSX.writeFile(workbook, "Cluster_Registrations.xlsx");
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold text-center mb-6">
        Join or Register a Cluster
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Full Name */}
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Full Name"
          className="w-full p-3 border rounded-md"
          required
        />

        {/* Email */}
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="w-full p-3 border rounded-md"
          required
        />

        {/* Phone Number */}
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone Number"
          className="w-full p-3 border rounded-md"
          required
        />

        {/* Select: Join or Register */}
        <select
          name="clusterType"
          value={formData.clusterType}
          onChange={handleChange}
          className="w-full p-3 border rounded-md"
        >
          <option value="join">Join an Existing Cluster</option>
          <option value="register">Register a New Cluster</option>
        </select>

        {/* Cluster Name */}
        <input
          type="text"
          name="cluster"
          value={formData.cluster}
          onChange={handleChange}
          placeholder={
            formData.clusterType === "join"
              ? "Enter Cluster Name"
              : "New Cluster Name"
          }
          className="w-full p-3 border rounded-md"
          required
        />

        {/* Cluster Description (Only for New Cluster Registration) */}
        {formData.clusterType === "register" && (
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Describe the cluster (Optional)"
            className="w-full p-3 border rounded-md"
            rows={3}
          />
        )}

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-[#0B6623] text-white p-3 rounded-md hover:bg-[#3e704b] transition"
        >
          {formData.clusterType === "join"
            ? "Join Cluster"
            : "Register Cluster"}
        </button>
      </form>

      {/* Export Button (Only for Admin) */}
      {isAdmin && submittedData.length > 0 && (
        <button
          onClick={exportToExcel}
          className="mt-6 w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 transition"
        >
          Export All User Data to Excel
        </button>
      )}
    </div>
  );
};

export default RegisterCluster;
