import { Heart, ShoppingCart, Star, Search } from "lucide-react";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "iPhone 16 Pro Max",
    category: "Smartphones",
    price: 1299,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=800",
  },
  {
    id: 2,
    name: "MacBook Pro M4",
    category: "Laptops",
    price: 2499,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1517336714739-489689fd1ca8?w=800",
  },
  {
    id: 3,
    name: "Sony WH-1000XM5",
    category: "Audio",
    price: 399,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800",
  },
  {
    id: 4,
    name: "Apple Watch Ultra",
    category: "Wearables",
    price: 799,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800",
  },
  {
    id: 5,
    name: "Gaming Keyboard",
    category: "Accessories",
    price: 149,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=800",
  },
  {
    id: 6,
    name: "Premium Chair",
    category: "Furniture",
    price: 299,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800",
  },
];

const Shop = () => {
  const handleAddToCart = (product) => {
    console.log("Add To Cart:", product);
  };

  const handleWishlist = (product) => {
    console.log("Wishlist:", product);
  };

  return (
    <section className="py-10">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <span className="rounded-full bg-violet-100 px-4 py-2 text-sm font-semibold text-violet-700">
              Shop Products
            </span>

            <h1 className="mt-4 text-4xl font-bold text-slate-900">
              Discover Premium Products
            </h1>

            <p className="mt-3 text-slate-600">
              Explore our handpicked collection of trending products.
            </p>
          </div>

          {/* Search */}
          <div className="relative w-full lg:w-96">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="text"
              placeholder="Search products..."
              className="w-full rounded-2xl border border-slate-200 bg-white py-3 pl-11 pr-4 outline-none transition focus:border-violet-500"
            />
          </div>
        </div>

        {/* Filters */}
        <div className="mb-8 flex flex-wrap gap-3">
          <button className="rounded-xl bg-violet-600 px-5 py-2 text-sm font-medium text-white">
            All
          </button>

          <button className="rounded-xl border border-slate-200 bg-white px-5 py-2 text-sm font-medium text-slate-700 transition hover:border-violet-600 hover:text-violet-600">
            Electronics
          </button>

          <button className="rounded-xl border border-slate-200 bg-white px-5 py-2 text-sm font-medium text-slate-700 transition hover:border-violet-600 hover:text-violet-600">
            Fashion
          </button>

          <button className="rounded-xl border border-slate-200 bg-white px-5 py-2 text-sm font-medium text-slate-700 transition hover:border-violet-600 hover:text-violet-600">
            Audio
          </button>

          <button className="rounded-xl border border-slate-200 bg-white px-5 py-2 text-sm font-medium text-slate-700 transition hover:border-violet-600 hover:text-violet-600">
            Furniture
          </button>
        </div>

        {/* Products */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Clickable Area */}
              <Link to={`/products/${product.id}`}>
                {/* Product Image */}
                <div className="relative overflow-hidden bg-slate-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-64 w-full object-cover transition duration-300 group-hover:scale-110"
                  />
                </div>

                {/* Product Info */}
                <div className="p-5">
                  <p className="text-sm text-violet-600">
                    {product.category}
                  </p>

                  <h3 className="mt-2 text-lg font-bold text-slate-900">
                    {product.name}
                  </h3>

                  <div className="mt-3 flex items-center gap-1">
                    <Star
                      size={16}
                      className="fill-yellow-400 text-yellow-400"
                    />

                    <span className="text-sm text-slate-600">
                      {product.rating}
                    </span>
                  </div>

                  <h4 className="mt-4 text-2xl font-bold text-slate-900">
                    ${product.price}
                  </h4>
                </div>
              </Link>

              {/* Actions */}
              <div className="px-5 pb-5">
                <div className="flex gap-3">
                  <button
                    onClick={() => handleWishlist(product)}
                    className="rounded-xl border border-slate-200 p-3 transition hover:bg-slate-100"
                  >
                    <Heart size={18} />
                  </button>

                  <button
                    onClick={() => handleAddToCart(product)}
                    className="flex flex-1 items-center justify-center rounded-xl bg-violet-600 py-3 text-white transition hover:bg-violet-700"
                  >
                    <ShoppingCart size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Shop;