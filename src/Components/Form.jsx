import React from "react";
import { useState } from "react";

const Form = () => {
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    service: "",
    budget: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <form className="mt-4">
        <p className="text-purple-600 pt-4">Name</p>
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={form.fullName}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
        <p className="text-purple-600 pt-4">Phone Number</p>
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md"
        />

        <p className="text-purple-600 pt-4">Email</p>
        <input
          type="text"
          name="budget"
          placeholder="Email"
          value={form.budget}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
        <p className="text-purple-600 pt-4">Services</p>
        <select
          name="service"
          value={form.service}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md"
        >
          <option>Select Services</option>
          <option>Web Development</option>
          <option>App Development</option>
          <option>Cloud Servicve</option>
        </select>
        <button className="w-full bg-purple-700 text-white p-2 rounded-md mt-4">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
