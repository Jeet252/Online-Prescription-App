import React from "react";
import { Link } from "react-router-dom";

export default function DoctorCard({ data }) {
  const handleClick = () => {
    sessionStorage.setItem("Doctor", data._id);
  };
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
      <img
        className="w-full h-48 object-cover"
        src="https://cdn.pixabay.com/photo/2015/03/04/22/35/avatar-659652_640.png"
        alt="Doctor Profile"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{data.name}</div>
        <p className="text-gray-700 text-base">{data.specialty}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <Link
          to={"/consulationform"}
          onClick={handleClick}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-full"
        >
          Consult
        </Link>
      </div>
    </div>
  );
}
