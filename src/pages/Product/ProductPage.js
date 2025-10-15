/*eslint-disable */
import { useContext, useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import Modal from "../../components/Modal";
import ProductTable from "../../components/Table";
import ProductModal from "../Product/Form";
import ProductViewModal from "../Product/View";
import { ProductContext } from "../../context/ProductContext/provider";
import Select from "../../components/Select";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Pagination from "../../components/Pagination";
import SkeletonTable from "../../components/SkeletonLoader";
import { productApi } from "../../api/productApi";
import { showToast } from "../../components/Toaster";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export default function ProductPage() {
  const { products, addProduct, updateProduct, deleteProduct, setProducts } =
    useContext(ProductContext);

  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [createOpen, setCreateOpen] = useState(false);
  const [viewOpen, setViewOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [activeProduct, setActiveProduct] = useState(null);
  const [form, setForm] = useState({
    title: "",
    price: "",
    description: "",
    category: "",
    image: "",
  });
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const MySwal = withReactContent(Swal);

  const loadProducts = async () => {
    setLoading(true);
    try {
      const data = await productApi.list();
      setProducts(Array.isArray(data) ? data.sort((a, b) => b.id - a.id) : []);
    } catch (err) {
      console.error(err);
      setProducts([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProducts();
  }, [search, categoryFilter]);

  const filtered = (products || [])
    .filter((p) => p?.title?.toLowerCase().includes(search.toLowerCase()))
    .filter((p) => (categoryFilter ? p.category === categoryFilter : true))
    .sort((a, b) => b.id - a.id);

  const categories = Array.from(
    new Set((products || []).map((p) => p.category))
  ).filter(Boolean);
  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const paginatedProducts = filtered.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };
  const openCreate = () => {
    setForm({ title: "", price: "", description: "", category: "", image: "" });
    setCreateOpen(true);
  };
  const handleEditOpen = (p) => {
    setActiveProduct(p);
    setForm(p);
    setEditOpen(true);
  };
  const handleView = (p) => {
    setActiveProduct(p);
    setViewOpen(true);
  };

  const handleDelete = async (p) => {
    const result = await MySwal.fire({
      title: `Are you sure?`,
      text: `Delete "${p.title}"?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: "No",
      reverseButtons: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
    });
    if (result.isConfirmed) {
      try {
        await productApi.remove(p.id);
        deleteProduct(p.id);
      } catch (err) {
        console.error(err);
        deleteProduct(p.id);
        showToast("Failed server delete. Deleted locally.", "error");
      }
    }
  };

  const handleSubmitForm = async (data) => {
    const isEdit = !!activeProduct;

    let imageUrl = "";
    if (data.image instanceof File) {
      imageUrl = URL.createObjectURL(data.image);
    } else if (typeof data.image === "string") {
      imageUrl = data.image;
    }

    const payload = {
      title: data.title,
      price: Number(data.price || 0),
      description: data.description,
      category: data.category,
      image: imageUrl,
    };

    try {
      if (isEdit) {
        const res = await productApi.update(activeProduct.id, payload);
        updateProduct(res);
      } else {
        const res = await productApi.create(payload);
        addProduct(res);
      }
    } catch (err) {
      console.error(err);
      if (isEdit) updateProduct(payload);
      else addProduct({ ...payload, id: Date.now() });
    } finally {
      setCreateOpen(false);
      setEditOpen(false);
      setActiveProduct(null);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 mt-20">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between gap-4 mb-6">
          <h1 className="text-2xl font-bold">Products</h1>
          <Button onClick={openCreate} variant="primary" startIcon={<FaPlus />}>
            Add Product
          </Button>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 items-center mb-6">
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search..."
            className="sm:w-1/2"
          />
          <Select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            options={categories.map((c) => ({ value: c, label: c }))}
            placeholder="All Categories"
            className="w-full sm:w-1/4"
          />
          <Button
            onClick={() => {
              setSearch("");
              setCategoryFilter("");
              setCurrentPage(1);
            }}
            variant="gray"
          >
            Reset
          </Button>
        </div>

        <div className="mb-10">
          {loading ? (
            <SkeletonTable
              columns={5}
              rows={5}
              columnWidths={["w-1/3", "w-1/3", "w-1/5", "w-1/6", "w-1/3"]}
            />
          ) : (
            <>
              <ProductTable
                products={paginatedProducts}
                onView={handleView}
                onEdit={handleEditOpen}
                onDelete={handleDelete}
              />
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            </>
          )}
        </div>
      </div>

      <Modal
        open={createOpen || editOpen}
        title={activeProduct ? "Edit Product" : "Create Product"}
        onClose={() => {
          setCreateOpen(false);
          setEditOpen(false);
          setActiveProduct(null);
        }}
        size="md"
      >
        <ProductModal
          mode={activeProduct ? "edit" : "create"}
          onClose={() => {
            setCreateOpen(false);
            setEditOpen(false);
            setActiveProduct(null);
          }}
          form={form}
          setForm={setForm}
          onSubmit={handleSubmitForm}
          categoryOptions={categories.map((c) => ({ value: c, label: c }))}
        />
      </Modal>

      <Modal
        open={viewOpen}
        title="Product Details"
        onClose={() => setViewOpen(false)}
        size="lg"
      >
        <ProductViewModal product={activeProduct} />
      </Modal>
    </main>
  );
}
