import React from "react";

export default function PatientDetails({ data }) {
  return (
    <div className="w-full md:w-1/2 space-y-4">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Patient's Details
      </h2>
      <ul className="space-y-1 text-gray-700">
        <p className="text-lg font-medium text-gray-700">
          Name: <span className="font-normal">{data.patientId.name}</span>
        </p>
        <p className="text-lg font-medium text-gray-700">
          Current Illness:{" "}
          <span className="font-normal">{data.patientId.currentIllness}</span>
        </p>
        <p className="text-lg font-medium text-gray-700">
          Medical history:{" "}
          <span className="font-normal">{data.patientId.illnessHistory}</span>
        </p>
        <p className="text-lg font-medium text-gray-700">
          Diabetics:{" "}
          <span className="font-normal">{data.patientId.diabetics}</span>
        </p>
        <p className="text-lg font-medium text-gray-700">
          Allergy: <span className="font-normal">{data.patientId.allergy}</span>
        </p>
        <p className="text-lg font-medium text-gray-700">
          Other: <span className="font-normal">{data.patientId.other}</span>
        </p>
      </ul>
    </div>
  );
}
