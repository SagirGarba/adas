"use client";

import { useState } from "react";
import * as XLSX from "xlsx";

type ProduceData = {
  name: string;
  email: string;
  phone: string;
  produceName: string;
  quantity: number;
  price: number;
  description?: string;
};

// Simulated Admin Check (Replace this with real authentication logic)
const isAdmin = true; // Change this to false to hide export button for non-admins

const RegisterProduce = () => {
  const [produceData, setProduceData] = useState<ProduceData>({
    name: "",
    email: "",
    phone: "",
    produceName: "",
    quantity: 0,
    price: 0,
    description: "",
  });

  const [submittedProduce, setSubmittedProduce] = useState<ProduceData[]>([]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setProduceData({ ...produceData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      produceData.name &&
      produceData.email &&
      produceData.phone &&
      produceData.produceName
    ) {
      setSubmittedProduce((prevData) => [...prevData, produceData]);
      setProduceData({
        name: "",
        email: "",
        phone: "",
        produceName: "",
        quantity: 0,
        price: 0,
        description: "",
      });
    }
  };

  const exportToExcel = () => {
    if (!isAdmin) return;
    const worksheet = XLSX.utils.json_to_sheet(submittedProduce);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Produce Registrations");
    XLSX.writeFile(workbook, "Produce_Registrations.xlsx");
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold text-center mb-6">
        Register Your Produce for Sale
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          value={produceData.name}
          onChange={handleChange}
          placeholder="Full Name"
          className="w-full p-3 border rounded-md"
          required
        />
        <input
          type="email"
          name="email"
          value={produceData.email}
          onChange={handleChange}
          placeholder="Email"
          className="w-full p-3 border rounded-md"
          required
        />
        <input
          type="tel"
          name="phone"
          value={produceData.phone}
          onChange={handleChange}
          placeholder="Phone Number"
          className="w-full p-3 border rounded-md"
          required
        />
        <input
          type="text"
          name="produceName"
          value={produceData.produceName}
          onChange={handleChange}
          placeholder="Produce Name"
          className="w-full p-3 border rounded-md"
          required
        />
        <input
          type="number"
          name="quantity"
          value={produceData.quantity}
          onChange={handleChange}
          placeholder="Quantity (Kg)"
          className="w-full p-3 border rounded-md"
          required
        />
        <input
          type="number"
          name="price"
          value={produceData.price}
          onChange={handleChange}
          placeholder="Price per Kg"
          className="w-full p-3 border rounded-md"
          required
        />
        <textarea
          name="description"
          value={produceData.description}
          onChange={handleChange}
          placeholder="Description (Optional)"
          className="w-full p-3 border rounded-md"
          rows={3}
        />
        <button
          type="submit"
          className="w-full bg-green-600 text-white p-3 rounded-md hover:bg-green-700 transition"
        >
          Register Produce
        </button>
      </form>

      {isAdmin && submittedProduce.length > 0 && (
        <button
          onClick={exportToExcel}
          className="mt-6 w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 transition"
        >
          Export All Produce Data to Excel
        </button>
      )}
    </div>
  );
};

export default RegisterProduce;
