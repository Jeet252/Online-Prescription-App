import React, { useState } from "react";
import Step1 from "../components/Step1";
import Step2 from "../components/Step2";
import Step3 from "../components/Step3";

export default function ConsultationForm() {
  const [transition, setTransition] = useState(1);
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Doctors Consultation Form
        </h2>

        <form className="space-y-4">
          <div className={`${transition === 1 ? "block" : "hidden"}`}>
            <Step1 />
          </div>
          <div className={`${transition === 2 ? "block" : "hidden"}`}>
            <Step2 />
          </div>
          <div className={`${transition === 3 ? "block" : "hidden"}`}>
            <Step3 />
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
              console.log(transition);
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
