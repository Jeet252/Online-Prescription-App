import React, { useEffect, useState } from "react";
import Step1 from "../components/Step1";
import Step2 from "../components/Step2";
import Step3 from "../components/Step3";
import axios from "axios";

export default function ConsultationForm() {
  const [transition, setTransition] = useState(1);
  const [doctor, setDoctor] = useState({});
  const [consultation, setConsultation] = useState({
    doctorId: "",
    patientId: "",
    currentIllness: "",
    diabtics: "",
    allergy: "",
    other: "",
    transaction_id: "",
  });
  const apiUrl = import.meta.env.VITE_API_URL;

  const handleSubmit = (e) => {
    e.preventDefault();
    (async () => {
      try {
        const response = await axios.post(
          `${apiUrl}/api/post/consultation`,
          consultation
        );
        if (response.status === 201) {
          alert(response.data.msg);
        }
      } catch (error) {
        console.log(error.response);
      }
    })();
  };

  useEffect(() => {
    const fetch_data = async () => {
      try {
        const response = await axios.post(`${apiUrl}/api/post/find`, {
          id: sessionStorage.getItem("Doctor"),
        });
        setDoctor(response.data);
        setConsultation({
          ...consultation,
          doctorId: sessionStorage.getItem("Doctor"),
          patientId: localStorage.getItem("PatientId"),
        });
      } catch (error) {
        console.log(error);
      }
    };
    fetch_data();
  }, [apiUrl]);
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-semibold text-center mb-6">
          {doctor ? <>{doctor.name}</> : <>Doctor</>}
        </h1>
        <h2 className="text-2xl font-semibold text-center mb-6">
          Consultation Form
        </h2>

        <form className="space-y-4">
          <div className={`${transition === 1 ? "block" : "hidden"}`}>
            <Step1
              consultation={consultation}
              setConsultation={setConsultation}
            />
          </div>
          <div className={`${transition === 2 ? "block" : "hidden"}`}>
            <Step2
              consultation={consultation}
              setConsultation={setConsultation}
            />
          </div>
          <div className={`${transition === 3 ? "block" : "hidden"}`}>
            <Step3
              handleSubmit={handleSubmit}
              consultation={consultation}
              setConsultation={setConsultation}
            />
          </div>
        </form>

        <div className="flex justify-between items-center p-4">
          <button
            disabled={transition === 1}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-l"
            onClick={() => setTransition(transition - 1)}
          >
            Left
          </button>
          <button
            disabled={transition === 3}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-r"
            onClick={() => {
              setTransition(transition + 1);
            }}
          >
            Right
          </button>
        </div>
      </div>
    </div>
  );
}
