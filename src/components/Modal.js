// src/components/Modal.jsx
import React from "react";

export default function Modal({ open, title, onClose, children, size = "md" }) {
  if (!open) return null;
  const sizeClass = {
    sm: "max-w-md",
    md: "max-w-2xl",
    lg: "max-w-4xl",
  }[size];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div
        className={`relative w-full ${sizeClass} mx-auto bg-white rounded-lg shadow-lg z-10 overflow-auto`}
      >
        <div className="flex items-center justify-between border-b px-4 py-3">
          <h3 className="text-lg font-semibold">{title}</h3>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-900 px-2"
          >
            ✕
          </button>
        </div>
        <div className="p-4 max-h-[80vh] overflow-auto">{children}</div>
      </div>
    </div>
  );
}
