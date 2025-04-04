import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function PatientSignUp() {
  const apiUrl = import.meta.env.VITE_API_URL;
  const [input, setInput] = useState({
    name: "",
    age: "",
    email: "",
    phone: "",
    illnessHistory: "",
    surgeryHistory: "",
  });
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "profilePhoto") {
      setFile(files[0]);
    } else {
      setInput({ ...input, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", input.name);
    formData.append("age", input.age);
    formData.append("email", input.email);
    formData.append("phone", input.phone);
    formData.append("illnessHistory", input.illnessHistory);
    formData.append("surgeryHistory", input.surgeryHistory);
    if (file) {
      formData.append("profilePhoto", file);
    }
    formData.append("profilePhoto", input.profilePhoto);

    try {
      const response = await axios.post(
        `${apiUrl}/api/post/patient`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response);
      if (response.status === 201) {
        localStorage.setItem("PatientId", response.data.userId);
        navigate("/patient/home");
      }
    } catch (error) {
      if (error.response && error.response.status === 409) {
        alert(error.response.data.msg);
      } else {
        console.error("Error submitting form:", error);
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Patient Sign Up
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="profilePhoto"
              className="block text-sm font-medium text-gray-700"
            >
              Profile Photo
            </label>
            <input
              name="profilePhoto"
              type="file"
              id="profilePhoto"
              accept="image/*"
              onChange={handleChange}
              className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-500 file:text-white hover:file:bg-blue-700"
            />
          </div>
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={input.name}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label
              htmlFor="age"
              className="block text-sm font-medium text-gray-700"
            >
              Age
            </label>
            <input
              type="number"
              id="age"
              name="age"
              value={input.age}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your Age"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={input.email}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={input.phone}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your Phone Number"
            />
          </div>
          <div>
            <label
              htmlFor="surgeryHistory"
              className="block text-sm font-medium text-gray-700"
            >
              History of Surgery
            </label>
            <textarea
              id="surgeryHistory"
              name="surgeryHistory"
              rows="3"
              value={input.surgeryHistory}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Surgery History"
            ></textarea>
          </div>
          <div>
            <label
              htmlFor="illnessHistory"
              className="block text-sm font-medium text-gray-700"
            >
              History of Illness
            </label>
            <textarea
              id="illnessHistory"
              name="illnessHistory"
              rows="3"
              value={input.illnessHistory}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Illness History"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-md"
          >
            Sign Up
          </button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-sm">
            Already have an account?{" "}
            <Link
              to="/patient/signin"
              className="text-blue-500 hover:underline"
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
