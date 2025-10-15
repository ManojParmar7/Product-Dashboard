import React from "react";

export default function Input({ label, error, ...rest }) {
  return (
    <div className="w-full flex flex-col mb-4">
      {label && (
        <label className="mb-1 font-medium text-gray-700">{label}</label>
      )}
      <input
        className={`px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
          error ? "border-red-500" : "border-gray-300"
        }`}
        {...rest}
      />
      {error && <span className="text-red-500 text-sm mt-1">{error}</span>}
    </div>
  );
}
