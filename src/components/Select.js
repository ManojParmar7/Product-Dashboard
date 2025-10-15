import React from "react";

export default function Select({ label, error, options = [], ...rest }) {
  return (
    <div className="w-full flex flex-col mb-4">
      {label && (
        <label className="mb-1 font-medium text-gray-700">{label}</label>
      )}
      <select
        className={`px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
          error ? "border-red-500" : "border-gray-300"
        }`}
        {...rest}
      >
        <option value="">Select {label}</option>
        {options.map((opt, idx) => (
          <option key={idx} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {error && <span className="text-red-500 text-sm mt-1">{error}</span>}
    </div>
  );
}
