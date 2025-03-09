import React from "react";
import PatientCard from "../components/PatientCard";

export default function DoctorHome() {
  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-semibold text-center mb-8">Patients</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <PatientCard />
        </div>
      </div>
    </div>
  );
}
