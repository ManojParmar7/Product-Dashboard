import Rating from "../../components/Rating";

const DEFAULT_IMAGE = "https://via.placeholder.com/800x400?text=No+Image";

export default function ProductViewModal({ product }) {
  if (!product) return null;

  const imageSrc =
    product.image instanceof File
      ? URL.createObjectURL(product.image)
      : product.image || DEFAULT_IMAGE;

  return (
    <div className="flex flex-col sm:flex-row gap-4 p-4 sm:p-5 w-full sm:w-[380px] max-w-full">
      {/* Image Section */}
      <div className="flex-shrink-0 w-full sm:w-1/2">
        <div className="w-full h-56 sm:h-60 rounded-lg overflow-hidden bg-gray-100 shadow-sm">
          <img
            src={imageSrc}
            alt={product.title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-between">
        <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 truncate">
          {product.title || "—"}
        </h2>

        {product.rating && (
          <div className="flex items-center gap-2 mb-2">
            <Rating rating={product.rating.rate} />
            {product.rating.count != null && (
              <span className="text-gray-500 text-xs sm:text-sm">
                ({product.rating.count} reviews)
              </span>
            )}
          </div>
        )}

        {/* Description */}
        <p className="text-gray-700 text-xs sm:text-sm mb-2 line-clamp-5">
          {product.description || "No description available."}
        </p>

        {/* Category & Price */}
        <div className="flex flex-wrap items-center gap-2 mt-auto sm:mt-0">
          <span className="px-2 py-0.5 text-xs font-medium rounded bg-blue-50 text-blue-700 border border-blue-100">
            {product.category || "—"}
          </span>
          <span className="text-gray-900 font-semibold text-sm sm:text-base">
            ₹
            {product.price != null
              ? Number(product.price).toLocaleString()
              : "0"}
          </span>
        </div>
      </div>
    </div>
  );
}
