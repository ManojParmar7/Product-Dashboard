import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
import Rating from "./Rating";
export default function ProductTable({
  products = [],
  onView,
  onEdit,
  onDelete,
}) {
  return (
    <div className="overflow-x-auto bg-white rounded-lg shadow">
      <table className="w-full min-w-[900px] table-auto border-collapse">
        <thead>
          <tr className="bg-gray-50">
            <th className="text-left p-3 border-b w-1/3">Product</th>
            <th className="text-left p-3 border-b hidden sm:table-cell w-1/3">
              Description
            </th>
            <th className="text-left p-3 border-b w-1/5">Category</th>
            <th className="text-right p-3 border-b w-1/6">Price</th>
            <th className="text-left p-3 border-b w-1/3">Action</th>
          </tr>
        </thead>

        <tbody>
          {products.length > 0 ? (
            products.map((data) => (
              <tr key={data?.id} className="hover:bg-gray-50">
                <td className="p-3 align-top border-b">
                  <div className="flex items-start gap-3 flex-wrap sm:flex-nowrap">
                    <div className="w-20 sm:w-24 flex-shrink-0">
                      <div className="w-full h-16 sm:h-20 rounded overflow-hidden bg-gray-100">
                        <img
                          src={
                            data?.image instanceof File
                              ? URL.createObjectURL(data?.image)
                              : data?.image || ""
                          }
                          alt={data?.title}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {data?.rating && (
                        <div className="flex items-center gap-1 mt-1 justify-start sm:justify-start pl-2 sm:pl-0">
                          <Rating rating={data?.rating.rate} />
                          {data?.rating.count != null && (
                            <span className="text-gray-500 text-xs">
                              ({data?.rating.count})
                            </span>
                          )}
                        </div>
                      )}
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="font-semibold text-gray-900 truncate max-w-[200px] sm:max-w-xs">
                        {data?.title || "—"}
                      </div>
                      <div className="text-xs text-gray-500 mt-0.5 sm:hidden line-clamp-2">
                        {data?.description || "—"}
                      </div>
                    </div>
                  </div>
                </td>

                <td className="p-3 align-top border-b hidden sm:table-cell">
                  <div className="text-sm text-gray-600 line-clamp-2 max-w-xl">
                    {data?.description || "—"}
                  </div>
                </td>

                <td className="p-3 align-top border-b">
                  <span className="inline-block px-2 py-0.5 text-xs font-medium rounded bg-blue-50 text-blue-700 border border-blue-100">
                    {data?.category || "—"}
                  </span>
                </td>

                <td className="p-3 align-top border-b text-right">
                  <div className="font-semibold text-gray-900">
                    {data?.price != null
                      ? `₹${Number(data?.price).toFixed(2).toLocaleString()}`
                      : "₹0.00"}
                  </div>
                </td>

                <td className="p-3 align-top border-b">
                  <div className="flex flex-wrap gap-2 justify-start sm:justify-end">
                    <button
                      onClick={() => onView(data)}
                      className="inline-flex items-center gap-2 px-3 py-1 rounded border text-gray-700 text-sm hover:bg-gray-50"
                    >
                      <FaEye />
                      <span className="hidden md:inline">View</span>
                    </button>
                    <button
                      onClick={() => onEdit(data)}
                      className="inline-flex items-center gap-2 px-3 py-1 rounded border text-blue-600 text-sm hover:bg-blue-50"
                    >
                      <FaEdit />
                      <span className="hidden md:inline">Edit</span>
                    </button>
                    <button
                      onClick={() => onDelete(data)}
                      className="inline-flex items-center gap-2 px-3 py-1 rounded border text-red-600 text-sm hover:bg-red-50"
                    >
                      <FaTrash />
                      <span className="hidden md:inline">Delete</span>
                    </button>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={5} className="p-6 text-center text-gray-500">
                No products found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
