import React from "react";

export default function Step1() {
  return (
    <>
      <label
        htmlFor="currentillness"
        className="block text-sm font-medium text-gray-700"
      >
        Current Illness History
      </label>
      <textarea
        id="currentillness"
        name="currentillness"
        rows="3"
        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        placeholder="Illness History"
      ></textarea>
    </>
  );
}
