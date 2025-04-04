import React, { useEffect, useState } from "react";
import PatientCard from "../components/PatientCard";
import axios from "axios";

export default function DoctorHome() {
  const [patient, setPatient] = useState([]);
  const apiUrl = import.meta.env.VITE_API_URL;
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.post(`${apiUrl}/api/post/patientlist`, {
          doctorId: localStorage.getItem("DoctorId"),
        });

        setPatient(response.data.msg || response.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [apiUrl]);
  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-semibold text-center mb-8">Patients</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {typeof patient == "string" ? (
            <h3>{patient}</h3>
          ) : (
            patient.map((elem, i) => <PatientCard key={i} data={elem} />)
          )}
        </div>
      </div>
    </div>
  );
}
