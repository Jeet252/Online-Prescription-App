import React from "react";
import DoctorPrescription from "../components/DoctorPrescription";

export default function PrescriptionForm() {
  return (
    <>
      <div className="min-h-screen flex bg-gray-100 p-4">
        <div className="w-1/2 p-6 bg-white rounded-l-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Patient Name</h2>
          <p className="text-gray-700">Patient current illness</p>
          <p className="text-gray-700 mt-4">Family medical history</p>
          <p className="text-gray-700 mt-4">Diabetics</p>
          <p className="text-gray-700 mt-4">Allergies</p>
          <p className="text-gray-700 mt-4">others</p>
        </div>
        <div className="w-1/2 p-6 bg-white rounded-r-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Prescribe </h2>
          <DoctorPrescription />
        </div>
      </div>
    </>
  );
}
