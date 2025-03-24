"use client";

import { useState } from "react";
import * as XLSX from "xlsx";

type UserData = {
  name?: string;
  email: string;
  password: string;
  type: "register" | "login";
};

const ASABISAuth = () => {
  const [formData, setFormData] = useState<UserData>({
    name: "",
    email: "",
    password: "",
    type: "register",
  });

  const [submittedData, setSubmittedData] = useState<UserData[]>([]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.email && formData.password) {
      setSubmittedData((prevData) => [...prevData, formData]);
      setFormData({
        name: "",
        email: "",
        password: "",
        type: "register",
      });
    }
  };

  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(submittedData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "ASABIS Users");
    XLSX.writeFile(workbook, "ASABIS_Users.xlsx");
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold text-center mb-6">
        {formData.type === "register"
          ? "Register for ASABIS"
          : "Login to ASABIS"}
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <select
          name="type"
          value={formData.type}
          onChange={handleChange}
          className="w-full p-3 border rounded-md"
        >
          <option value="register">Register</option>
          <option value="login">Login</option>
        </select>

        {formData.type === "register" && (
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name"
            className="w-full p-3 border rounded-md"
            required
          />
        )}

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
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          className="w-full p-3 border rounded-md"
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 transition"
        >
          {formData.type === "register" ? "Register" : "Login"}
        </button>
      </form>

      {submittedData.length > 0 && (
        <button
          onClick={exportToExcel}
          className="mt-6 w-full bg-green-600 text-white p-3 rounded-md hover:bg-green-700 transition"
        >
          Export to Excel (Admin Only)
        </button>
      )}
    </div>
  );
};

export default ASABISAuth;
