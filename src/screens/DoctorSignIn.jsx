import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function DoctorSignIn() {
  const apiUrl = import.meta.env.VITE_API_URL;
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    (async () => {
      try {
        const response = await axios.post(`${apiUrl}/api/post/doctor/signin`, {
          email: input,
        });
        if (response.status === 200) {
          console.log("i m working");
          localStorage.setItem("DoctorId", response.data.userId._id);
          navigate("/doctor/home");
        }
      } catch (error) {
        if (error.status === 403) {
          alert(error.response.data.msg);
        }
      }
    })();
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Doctor Sign In
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
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
              onChange={handleChange}
              value={input}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your email"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-md"
          >
            Sign In
          </button>
        </form>

        <div className="mt-4 text-center">
          <p className="text-sm">
            If don't have an account?{" "}
            <Link to="/doctor/signup" className="text-blue-500 hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
