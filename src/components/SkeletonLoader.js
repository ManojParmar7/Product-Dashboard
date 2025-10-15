import React from "react";

export default function SkeletonTable({ rows = 5 }) {
  return (
    <div className="overflow-x-auto bg-white rounded-lg shadow border border-gray-300">
      <table className="w-full min-w-[900px] table-auto animate-pulse">
        <thead>
          <tr className="bg-gray-50 text-left text-sm font-semibold text-gray-700">
            <th className="p-3">Product</th>
            <th className="p-3">Description</th>
            <th className="p-3">Category</th>
            <th className="p-3">Price</th>
            <th className="p-3">Action</th>
          </tr>
        </thead>

        <tbody>
          {Array.from({ length: rows }).map((_, idx) => (
            <tr key={idx} className="hover:bg-gray-50 transition">
              {/* Product column */}
              <td className="p-3 flex items-center gap-3">
                <div className="w-14 h-14 bg-gray-200 rounded-md"></div>
                <div className="flex-1">
                  <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                  <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                </div>
              </td>

              {/* Description */}
              <td className="p-3">
                <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6"></div>
              </td>

              {/* Category */}
              <td className="p-3">
                <div className="h-6 bg-gray-200 rounded-full w-20"></div>
              </td>

              {/* Price */}
              <td className="p-3">
                <div className="h-4 bg-gray-200 rounded w-16"></div>
              </td>

              {/* Action buttons */}
              <td className="p-3 space-y-2 text-center">
                <div className="h-8 bg-gray-200 rounded w-16 mx-auto"></div>
                <div className="h-8 bg-gray-200 rounded w-16 mx-auto"></div>
                <div className="h-8 bg-gray-200 rounded w-16 mx-auto"></div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
