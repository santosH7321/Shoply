import { useState } from "react";
import { Heart, ShoppingCart, Trash2, Star } from "lucide-react";
import { Link } from "react-router-dom";

const initialWishlist = [
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
    name: "Sony WH-1000XM5",
    category: "Audio",
    price: 399,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800",
  },
  {
    id: 3,
    name: "Apple Watch Ultra",
    category: "Wearables",
    price: 799,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800",
  },
  {
    id: 4,
    name: "MacBook Pro M4",
    category: "Laptop",
    price: 2499,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1517336714739-489689fd1ca8?w=800",
  },
];

const Wishlist = () => {
  const [wishlist, setWishlist] = useState(initialWishlist);

  const removeFromWishlist = (product) => {
    console.log("Removed Product:", product);

    setWishlist((prev) =>
      prev.filter((item) => item.id !== product.id)
    );
  };

  const addToCart = (product) => {
    console.log("Added To Cart:", product);
  };

  if (wishlist.length === 0) {
    return (
      <section className="py-16">
        <div className="mx-auto max-w-xl text-center">
          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-red-100">
            <Heart
              size={42}
              className="fill-red-500 text-red-500"
            />
          </div>

          <h1 className="mt-6 text-3xl font-bold text-slate-900">
            Your Wishlist Is Empty
          </h1>

          <p className="mt-3 text-slate-600">
            Save products you love and purchase them later.
          </p>

          <Link
            to="/shop"
            className="mt-8 inline-flex items-center rounded-xl bg-violet-600 px-6 py-3 font-semibold text-white transition hover:bg-violet-700"
          >
            Continue Shopping
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="py-10">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-slate-900">
            My Wishlist
          </h1>

          <p className="mt-2 text-slate-600">
            Products you've saved for later.
          </p>
        </div>

        {/* Wishlist Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {wishlist.map((product) => (
            <div
              key={product.id}
              className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Image */}
              <div className="relative">
                <Link to={`/products/${product.id}`}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-64 w-full object-cover"
                  />
                </Link>

                <button
                  onClick={() =>
                    removeFromWishlist(product)
                  }
                  className="absolute right-4 top-4 rounded-xl bg-white p-2 shadow-md"
                >
                  <Trash2
                    size={18}
                    className="text-red-500"
                  />
                </button>
              </div>

              {/* Content */}
              <div className="p-5">
                <p className="text-sm text-violet-600">
                  {product.category}
                </p>

                <h3 className="mt-2 text-lg font-bold text-slate-900">
                  {product.name}
                </h3>

                <div className="mt-3 flex items-center gap-2">
                  <Star
                    size={16}
                    className="fill-yellow-400 text-yellow-400"
                  />

                  <span className="text-sm text-slate-600">
                    {product.rating}
                  </span>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <h4 className="text-2xl font-bold text-slate-900">
                    ${product.price}
                  </h4>
                </div>

                <button
                  onClick={() => addToCart(product)}
                  className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-violet-600 py-3 font-semibold text-white transition hover:bg-violet-700"
                >
                  <ShoppingCart size={18} />
                  Add To Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Wishlist;