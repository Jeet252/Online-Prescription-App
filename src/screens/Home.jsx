import React from "react";

export default function Home() {
  return (
    <div class="min-h-screen flex items-center justify-center bg-gray-100">
      <div class="max-w-md w-full p-6 bg-white rounded-lg shadow-md">
        <h2 class="text-2xl font-semibold text-center mb-8">
          Welcome to Our Platform
        </h2>

        <div class="flex flex-col space-y-4">
          <a
            href="/patient-sign-up"
            class="block w-full text-center py-3 px-4 rounded-md bg-blue-500 hover:bg-blue-600 text-white font-medium transition duration-300"
          >
            I am a Patient
          </a>
          <a
            href="/doctor"
            class="block w-full text-center py-3 px-4 rounded-md bg-green-500 hover:bg-green-600 text-white font-medium transition duration-300"
          >
            I am a Doctor
          </a>
        </div>
      </div>
    </div>
  );
}
