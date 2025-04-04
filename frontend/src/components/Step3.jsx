import React from "react";
import qrCode from "../assets/QRCode.jpeg";

export default function Step3({ handleSubmit }) {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-md p-6 max-w-md w-full">
        <h2 className="text-lg font-semibold mb-4">
          Scan and Pay using UPI App
        </h2>
        <div className="bg-red-500 h-70 mb-4">
          <img src={qrCode} alt="" />
        </div>
        <div className="flex items-center justify-center mb-4">
          <span className="text-gray-600">or</span>
        </div>
        <div className="mb-4">
          <label
            htmlFor="upiId"
            className="block text-sm font-medium text-gray-700"
          >
            9321058428@ptaxis
          </label>
        </div>

        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2">Pay Using Any App</h2>
          <p className="text-3xl font-bold mb-1">₹600</p>
          <p className="text-sm text-gray-600 mb-2">(After Payment)</p>
          <label
            htmlFor="transactionId"
            className="block text-sm font-medium text-gray-700"
          >
            Enter Transaction ID*
          </label>
          <input
            type="text"
            id="transactionId"
            className="mt-1 p-2 border rounded w-full"
            placeholder="Enter Transaction ID"
          />
        </div>

        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2">
            CONSENT FOR ONLINE CONSULTATION
          </h2>
          <p className="text-xs text-gray-700">
            I HAVE UNDERSTOOD THAT THIS IS AN ONLINE CONSULTATION WITHOUT A
            PHYSICAL CHECKUP OF MY SYMPTOMS. THE DOCTOR HENCE RELIES ON MY
            DESCRIPTION OF THE PROBLEM OR SCANNED REPORTS PROVIDED BY ME. WITH
            THIS UNDERSTANDING, I HEREBY GIVE MY CONSENT FOR ONLINE
            CONSULTATION.
          </p>
          <div className="flex items-center mt-4">
            <input
              type="checkbox"
              id="consent"
              className="htmlForm-checkbox h-4 w-4 text-green-600 mr-2"
            />
            <label htmlFor="consent" className="text-sm text-gray-700">
              YES, I ACCEPT
            </label>
          </div>
        </div>

        <button
          onClick={handleSubmit}
          className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded w-full"
        >
          Submit Appointment
        </button>
      </div>
    </div>
  );
}
