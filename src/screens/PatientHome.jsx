import React, { useEffect, useState } from "react";
import DoctorCard from "../components/DoctorCard";
import axios from "axios";
import Loader from "../assets/Loader";

export default function PatientHome() {
  const [doctorData, setDoctorData] = useState({});
  const [isloading, setisLoading] = useState(true);
  useEffect(() => {
    (async () => {
      const response = await axios.get("http://localhost:5000/api/get/doctor");
      setDoctorData(response.data);
      setisLoading(false);
    })();

    console.log(doctorData);
  }, []);
  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-semibold text-center mb-8">Our Doctors</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {isloading ? (
            <Loader />
          ) : (
            doctorData.map((elem, i) => <DoctorCard key={i} data={elem} />)
          )}
        </div>
      </div>
    </div>
  );
}
