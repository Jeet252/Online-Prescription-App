import React from "react";

export default function Step2() {
  return (
    <>
      <div className="flex items-center">
        <input
          type="radio"
          id="yes-diabiatic"
          name="Diabiatic"
          value="Diabiatic"
          className="form-radio h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
        />
        <label htmlFor="male" className="ml-2 text-sm text-gray-700">
          Diabiatic
        </label>
        <input
          type="radio"
          id="no-diabiatic"
          name="Diabiatic"
          value="Non-Diabiatic"
          className="form-radio h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
        />
        <label htmlFor="male" className="ml-2 text-sm text-gray-700">
          Non Diabiatic
        </label>
      </div>
      <label
        htmlFor="allergy"
        className="block text-sm font-medium text-gray-700"
      >
        Any Allergies
      </label>
      <textarea
        id="allergy"
        name="allergy"
        rows="3"
        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        placeholder="Allergy History"
      ></textarea>
      <label
        htmlFor="other"
        className="block text-sm font-medium text-gray-700"
      >
        Other
      </label>
      <textarea
        id="other"
        name="other"
        rows="3"
        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        placeholder="Other"
      ></textarea>
    </>
  );
}
