import React from "react";

export default function DoctorPrescription() {
  return (
    <form className="space-y-4">
      <div>
        <label
          htmlFor="careTaken"
          className="block text-sm font-medium text-gray-700"
        >
          Care to be taken
        </label>
        <textarea
          id="careTaken"
          name="careTaken"
          rows="3"
          required
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          placeholder="Care to be taken"
        ></textarea>
      </div>
      <div>
        <label
          htmlFor="medicine"
          className="block text-sm font-medium text-gray-700"
        >
          Medicine
        </label>
        <textarea
          id="medicine"
          name="medicine"
          rows="3"
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          placeholder="Medicine"
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-md"
      >
        Submit
      </button>
    </form>
  );
}
