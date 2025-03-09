import React from "react";
import { Link } from "react-router-dom";

export default function PatientCard() {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
      <img
        className="w-full h-48 object-cover"
        src="doctor-profile.jpg"
        alt="Doctor Profile"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Patient Name</div>
        <p className="text-gray-700 text-base">Age</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <Link
          to={"/prescriptionform"}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-full"
        >
          Prescribe
        </Link>
      </div>
    </div>
  );
}
