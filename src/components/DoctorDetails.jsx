import React from "react";

export default function DoctorDetails({ data }) {
  return (
    <div className="bg-white shadow-lg rounded-lg w-full max-w-4xl p-6 mb-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Doctor's Details
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-1">
          <p className="text-lg font-medium text-gray-700">
            Name: <span className="font-normal">{data.name}</span>
          </p>
          <p className="text-lg font-medium text-gray-700">
            Specialty: <span className="font-normal">{data.specialty}</span>
          </p>
        </div>
        <div className="space-y-1">
          <p className="text-lg font-medium text-gray-700">
            Email: <span className="font-normal">{data.email}</span>
          </p>
          <p className="text-lg font-medium text-gray-700">
            Phone: <span className="font-normal">+91 {data.phone}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
