import axios from "axios";
import React, { useState } from "react";

export default function DoctorPrescription({ data }) {
  const apiUrl = import.meta.env.VITE_API_URL;
  const [input, setInput] = useState({
    prescribeTo: data._id,
    medicine: "",
    careTaken: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    sessionStorage.setItem(
      "pdfData",
      JSON.stringify({ ...data, medicine: "", careTaken: "" })
    );
    console.log(input);
    // (async () => {
    //   try {
    //     const response = await axios.post(
    //       `${apiUrl}/api/post/prescription`,
    //       input
    //     );
    //     sessionStorage.setItem("pdfData", JSON.stringify(data));
    //     console.log(response);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // })();
  };
  return (
    <div className="w-full md:w-1/2 space-y-4">
      <h2 className="text-2xl font-bold text-gray-800">Prescribe</h2>
      <form className="space-y-4">
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Care to be taken
          </label>
          <textarea
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="3"
            onChange={(e) => {
              setInput({ ...input, [e.target.name]: e.target.value });
            }}
            value={input.careTaken}
          ></textarea>
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Medicine
          </label>
          <textarea
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="3"
            onChange={(e) => {
              setInput({ ...input, [e.target.name]: e.target.value });
            }}
            value={input.medicine}
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
