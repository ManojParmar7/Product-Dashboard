import Rating from "./Rating";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-5 hover:shadow-xl transition">
      <img
        src={product?.image}
        alt={product?.name}
        className="h-40 w-full object-cover rounded-md mb-4"
      />
      <h3 className="font-semibold text-lg mb-1">{product?.name}</h3>

      {product.rating && <Rating rating={product.rating} />}

      <p className="text-gray-600 mb-2">₹{Number(product?.price).toFixed(2)}</p>
      <p className="text-gray-500 text-sm">{product?.description}</p>
    </div>
  );
};

export default ProductCard;
