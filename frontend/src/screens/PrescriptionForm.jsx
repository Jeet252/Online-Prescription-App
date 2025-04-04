import React, { useEffect, useRef, useState } from "react";
import DoctorPrescription from "../components/DoctorPrescription";
import axios from "axios";
import PatientDetails from "../components/PatientDetails";
import DoctorDetails from "../components/DoctorDetails";
import { useNavigate } from "react-router-dom";

export default function PrescriptionForm() {
  const apiUrl = import.meta.env.VITE_API_URL;
  const [data, setData] = useState("");
  const printableElement = useRef(null);
  const navigate = useNavigate();
  const handleClick = () => {
    sessionStorage.setItem("pdfData", JSON.stringify({ ...data }));
    navigate("/pdf");
  };

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.post(
          `${apiUrl}/api/post/patientconsultationdata`,
          { _id: sessionStorage.getItem("Patient-ConsultationData") }
        );
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [apiUrl]);
  return (
    <div
      ref={printableElement}
      className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4 py-6"
    >
      {data === "" ? "loading" : <DoctorDetails data={data.doctorId} />}
      <div className="bg-white shadow-lg rounded-lg w-full max-w-4xl p-6 flex flex-col-reverse md:flex-row gap-6">
        <DoctorPrescription data={data} />
        {data === "" ? "loading" : <PatientDetails data={data} />}
      </div>
      <button onClick={handleClick}>Print</button>
    </div>
  );
}
