import React from "react";
import { Link } from "react-router-dom";

export default function PatientCard({ data }) {
  const handleClick = () => {
    sessionStorage.setItem("Patient-ConsultationData", data._id);
  };
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
      <img
        className="w-full h-48 object-cover"
        src={data.patientId.profilePhoto}
        alt="Doctor Profile"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{data.patientId.name}</div>
        <p className="text-gray-700 text-base">{data.patientId.age}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <Link
          onClick={handleClick}
          to={"/prescriptionform"}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-full"
        >
          Prescribe
        </Link>
      </div>
    </div>
  );
}
