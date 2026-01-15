"use client";

import {
  FiChevronDown,
  FiMail,
  FiMessageSquare,
  FiPhone,
  FiUser,
} from "react-icons/fi";
import React, { useState } from "react";

function ContactUsForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobileNumber: "",
    company: "",
    product: "",
    description: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("✅ Your message was sent successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          mobileNumber: "",
          company: "",
          product: "",
          description: "",
        });
      } else {
        setStatus("❌ There was a problem sending your message.");
      }
    } catch (err) {
      setStatus("❌ Error connecting to the server.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-9">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* First Name */}
        <div className="relative">
          <label
            htmlFor="firstName"
            className="block mb-2 text-sm font-bold text-white"
          >
            First Name *
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <FiUser className="text-gray-500" />
            </div>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full px-4 py-3 pl-10 text-black bg-gray-100 border-none rounded-lg focus:ring-2 focus:ring-[#A00927] focus:bg-gray-50"
              placeholder="Peter"
              required
            />
          </div>
        </div>

        {/* Last Name */}
        <div className="relative">
          <label
            htmlFor="lastName"
            className="block mb-2 text-sm font-bold text-white"
          >
            Last Name *
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <FiUser className="text-gray-500" />
            </div>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full px-4 py-3 pl-10 text-black bg-gray-100 border-none rounded-lg focus:ring-2 focus:ring-[#A00927] focus:bg-gray-50"
              placeholder="Doe"
              required
            />
          </div>
        </div>
      </div>

      {/* Email */}
      <div className="relative">
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-bold text-white"
        >
          Email Address *
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <FiMail className="text-gray-500" />
          </div>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 pl-10 text-black bg-gray-100 border-none rounded-lg focus:ring-2 focus:ring-[#A00927] focus:bg-gray-50"
            placeholder="mail@company.com"
            required
          />
        </div>
      </div>

      {/* Phone */}
      <div className="relative">
        <label
          htmlFor="mobileNumber"
          className="block mb-2 text-sm font-bold text-white"
        >
          Phone Number
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <FiPhone className="text-gray-500" />
          </div>
          <input
            type="tel"
            id="mobileNumber"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleChange}
            className="w-full px-4 py-3 pl-10 text-black bg-gray-100 border-none rounded-lg focus:ring-2 focus:ring-[#A00927] focus:bg-gray-50"
            placeholder="+263 00 000 0000"
          />
        </div>
      </div>

      {/* Company */}
      <div>
        <label
          htmlFor="company"
          className="block mb-2 text-sm font-bold text-white"
        >
          Company
        </label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          className="w-full px-4 py-3 text-black bg-gray-100 border-none rounded-lg focus:ring-2 focus:ring-[#A00927] focus:bg-gray-50"
          placeholder="Sharetek"
        />
      </div>

      {/* Product Dropdown */}
      <div className="relative">
        <label
          htmlFor="product"
          className="block mb-2 text-sm font-bold text-white"
        >
          What is your inquiry about?
        </label>
        <div className="relative">
          <select
            id="product"
            name="product"
            value={formData.product}
            onChange={handleChange}
            className="w-full px-4 py-3 text-black bg-gray-100 border-none rounded-lg appearance-none focus:ring-2 focus:ring-[#A00927] focus:bg-gray-50"
          >
            <option value="" className="text-gray-500">
              Please Select
            </option>
            <option value="product-analytics">Product Analytics</option>
            <option value="it-solutions">IT Solutions</option>
            <option value="business-optimization">Business Optimization</option>
            <option value="other">Other</option>
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <FiChevronDown className="text-gray-500" />
          </div>
        </div>
      </div>

      {/* Description */}
      <div>
        <label
          htmlFor="description"
          className="block mb-2 text-sm font-bold text-white"
        >
          How we can help you?
        </label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          rows={4}
          className="w-full px-4 py-3 text-black bg-gray-100 border-none rounded-lg focus:ring-2 focus:ring-[#A00927] focus:bg-gray-50"
          placeholder="Message"
        ></textarea>
      </div>

      {/* Submit */}
      <div>
        <button
          type="submit"
          className="flex items-center justify-center w-full px-6 py-5 font-bold text-[#A00927] transition-colors bg-white rounded-lg hover:bg-[#27282C] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 cursor-pointer hover:text-white"
        >
          <FiMessageSquare className="mr-2" />
          Submit
        </button>
        {status && <p className="mt-4 text-sm text-white">{status}</p>}
      </div>
    </form>
  );
}

export default ContactUsForm;



