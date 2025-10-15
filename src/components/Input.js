import React, { useState, useEffect } from "react";

export default function Input({
  label,
  value,
  onChange,
  placeholder,
  error,
  type = "text",
  className = "",
  accept,
  ...rest
}) {
  const [preview, setPreview] = useState(null);

  // 🔹 File preview handle karega agar input type file hai
  useEffect(() => {
    if (
      type === "file" &&
      value &&
      value.length > 0 &&
      value[0] instanceof File
    ) {
      const file = value[0];
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result);
      reader.readAsDataURL(file);
    } else {
      setPreview(null);
    }
  }, [value, type]);

  return (
    <div className={`w-full flex flex-col ${className}`}>
      {label && (
        <label className="text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
      )}

      {type === "file" ? (
        <>
          <input
            type="file"
            accept={accept || "image/*"}
            onChange={onChange}
            className={`block w-full text-sm text-gray-700 border rounded-md px-3 py-2 cursor-pointer
              ${error ? "border-red-500" : "border-gray-300"}
            `}
            {...rest}
          />

          {/* ✅ File name display */}
          {value && value.length > 0 && (
            <p className="text-xs text-gray-600 mt-1 truncate">
              Selected: {value[0]?.name}
            </p>
          )}

          {/* ✅ Image preview if image file */}
          {preview && (
            <div className="mt-3">
              <img
                src={preview}
                alt="Preview"
                className="w-32 h-32 object-cover border rounded"
              />
            </div>
          )}
        </>
      ) : (
        <>
          <input
            type={type}
            value={value || ""}
            onChange={onChange}
            placeholder={placeholder || `Enter ${label?.toLowerCase() || ""}`}
            className={`border rounded-md text-sm text-gray-700 px-3 py-2 h-[40px]
              focus:outline-none focus:ring-1 focus:ring-blue-500
              ${error ? "border-red-500" : "border-gray-300"}
              w-full
            `}
            {...rest}
          />
        </>
      )}

      {/* ✅ Error message */}
      {error && <span className="text-red-500 text-xs mt-1">{error}</span>}
    </div>
  );
}
