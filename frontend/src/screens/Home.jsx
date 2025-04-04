import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center mb-8">
          Welcome to Our Platform
        </h2>

        <div className="flex flex-col space-y-4">
          <Link
            to="/patient/signin"
            className="block w-full text-center py-3 px-4 rounded-md bg-blue-500 hover:bg-blue-600 text-white font-medium transition duration-300"
          >
            I am a Patient
          </Link>
          <Link
            to="/doctor/signin"
            className="block w-full text-center py-3 px-4 rounded-md bg-green-500 hover:bg-green-600 text-white font-medium transition duration-300"
          >
            I am a Doctor
          </Link>
        </div>
      </div>
    </div>
  );
}
