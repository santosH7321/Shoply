import { useState } from "react";
import {
  Search,
  Plus,
  Pencil,
  Trash2,
  Eye,
  Package,
} from "lucide-react";

const initialProducts = [
  {
    id: 1,
    name: "iPhone 16 Pro Max",
    category: "Smartphones",
    price: 1299,
    stock: 24,
    status: "Active",
    image:
      "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=300",
  },
  {
    id: 2,
    name: "MacBook Pro M4",
    category: "Laptops",
    price: 2499,
    stock: 12,
    status: "Active",
    image:
      "https://images.unsplash.com/photo-1517336714739-489689fd1ca8?w=300",
  },
  {
    id: 3,
    name: "Sony WH-1000XM5",
    category: "Audio",
    price: 399,
    stock: 0,
    status: "Out of Stock",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300",
  },
  {
    id: 4,
    name: "Apple Watch Ultra",
    category: "Wearables",
    price: 799,
    stock: 18,
    status: "Active",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300",
  },
];

const Products = () => {
  const [search, setSearch] = useState("");
  const [products] = useState(initialProducts);

  const filteredProducts = products.filter((product) =>
    product.name
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const handleView = (product) => {
    console.log("View Product:", product);
  };

  const handleEdit = (product) => {
    console.log("Edit Product:", product);
  };

  const handleDelete = (product) => {
    console.log("Delete Product:", product);
  };

  const handleAddProduct = () => {
    console.log("Add Product");
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">
            Products
          </h1>

          <p className="mt-2 text-slate-500">
            Manage your store products.
          </p>
        </div>

        <button
          onClick={handleAddProduct}
          className="flex items-center gap-2 rounded-2xl bg-violet-600 px-5 py-3 font-medium text-white transition hover:bg-violet-700"
        >
          <Plus size={18} />
          Add Product
        </button>
      </div>

      {/* Stats */}
      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-3xl border border-slate-200 bg-white p-6">
          <h3 className="text-slate-500">
            Total Products
          </h3>

          <p className="mt-3 text-3xl font-bold text-slate-900">
            {products.length}
          </p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6">
          <h3 className="text-slate-500">
            Active Products
          </h3>

          <p className="mt-3 text-3xl font-bold text-green-600">
            {
              products.filter(
                (product) =>
                  product.status === "Active"
              ).length
            }
          </p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6">
          <h3 className="text-slate-500">
            Out Of Stock
          </h3>

          <p className="mt-3 text-3xl font-bold text-red-600">
            {
              products.filter(
                (product) =>
                  product.status === "Out of Stock"
              ).length
            }
          </p>
        </div>
      </div>

      {/* Search */}
      <div className="rounded-3xl border border-slate-200 bg-white p-6">
        <div className="relative">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            className="w-full rounded-2xl border border-slate-200 py-3 pl-11 pr-4 outline-none focus:border-violet-500"
          />
        </div>
      </div>

      {/* Product Table */}
      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white">
        <div className="overflow-x-auto">
          <table className="w-full min-w-225">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="px-6 py-4 text-left">
                  Product
                </th>

                <th className="px-6 py-4 text-left">
                  Category
                </th>

                <th className="px-6 py-4 text-left">
                  Price
                </th>

                <th className="px-6 py-4 text-left">
                  Stock
                </th>

                <th className="px-6 py-4 text-left">
                  Status
                </th>

                <th className="px-6 py-4 text-center">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {filteredProducts.map((product) => (
                <tr
                  key={product.id}
                  className="border-b border-slate-100"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-4">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-14 w-14 rounded-xl object-cover"
                      />

                      <div>
                        <h4 className="font-semibold text-slate-900">
                          {product.name}
                        </h4>

                        <p className="text-sm text-slate-500">
                          ID #{product.id}
                        </p>
                      </div>
                    </div>
                  </td>

                  <td className="px-6 py-4 text-slate-600">
                    {product.category}
                  </td>

                  <td className="px-6 py-4 font-semibold text-slate-900">
                    ${product.price}
                  </td>

                  <td className="px-6 py-4 text-slate-600">
                    {product.stock}
                  </td>

                  <td className="px-6 py-4">
                    <span
                      className={`rounded-xl px-3 py-1 text-sm font-medium ${
                        product.status === "Active"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {product.status}
                    </span>
                  </td>

                  <td className="px-6 py-4">
                    <div className="flex items-center justify-center gap-2">
                      <button
                        onClick={() =>
                          handleView(product)
                        }
                        className="rounded-xl p-2 text-blue-600 transition hover:bg-blue-50"
                      >
                        <Eye size={18} />
                      </button>

                      <button
                        onClick={() =>
                          handleEdit(product)
                        }
                        className="rounded-xl p-2 text-amber-600 transition hover:bg-amber-50"
                      >
                        <Pencil size={18} />
                      </button>

                      <button
                        onClick={() =>
                          handleDelete(product)
                        }
                        className="rounded-xl p-2 text-red-600 transition hover:bg-red-50"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}

              {filteredProducts.length === 0 && (
                <tr>
                  <td
                    colSpan="6"
                    className="px-6 py-16 text-center"
                  >
                    <div className="flex flex-col items-center">
                      <Package
                        size={48}
                        className="text-slate-300"
                      />

                      <h3 className="mt-4 text-lg font-semibold text-slate-900">
                        No Products Found
                      </h3>

                      <p className="mt-2 text-slate-500">
                        Try a different search term.
                      </p>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Products;