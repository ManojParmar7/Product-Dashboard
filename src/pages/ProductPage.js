import { useState } from "react";

function ProductPage() {
  const [products, setProducts] = useState([
    {
      id: 1,
      title: "Product A",
      price: 100,
      desc: "Desc A",
      category: "Cat A",
    },
  ]);

  const handleDelete = (id) => {
    setProducts(products.filter((p) => p.id !== id));
    alert(`Deleted product ${id}`);
  };

  const handleUpdate = (id) => {
    const newTitle = prompt("New title?");
    setProducts(
      products.map((p) => (p.id === id ? { ...p, title: newTitle } : p))
    );
    alert(`Updated product ${id}`);
  };

  const handleView = (p) => {
    alert(JSON.stringify(p, null, 2));
  };
  return (
    <div className="max-w-5xl mx-auto mt-20 p-4 bg-white rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">Products</h2>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">Title</th>
            <th className="border p-2">Price</th>
            <th className="border p-2">Description</th>
            <th className="border p-2">Category</th>
            <th className="border p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.id}>
              <td className="border p-2">{p.title}</td>
              <td className="border p-2">{p.price}</td>
              <td className="border p-2">{p.desc}</td>
              <td className="border p-2">{p.category}</td>
              <td className="border p-2 flex gap-2">
                <button
                  onClick={() => handleView(p)}
                  className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
                >
                  View
                </button>
                <button
                  onClick={() => handleUpdate(p.id)}
                  className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600"
                >
                  Update
                </button>
                <button
                  onClick={() => handleDelete(p.id)}
                  className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductPage;
