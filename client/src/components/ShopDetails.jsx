import { useState } from "react";
import {
  Heart,
  ShoppingCart,
  Star,
  Truck,
  ShieldCheck,
  RotateCcw,
  Plus,
  Minus,
} from "lucide-react";

const product = {
  id: 1,
  name: "iPhone 16 Pro Max",
  category: "Smartphones",
  price: 1299,
  oldPrice: 1499,
  rating: 4.9,
  reviews: 2847,
  stock: "In Stock",
  description:
    "Experience the next generation smartphone with an advanced camera system, powerful performance, stunning display, and all-day battery life.",
  images: [
    "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=1200",
    "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=1200",
    "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=1200",
    "https://images.unsplash.com/photo-1567581935884-3349723552ca?w=1200",
  ],
};

const ShopDetails = () => {
  const [selectedImage, setSelectedImage] = useState(
    product.images[0]
  );

  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleAddToCart = () => {
    console.log({
      productId: product.id,
      productName: product.name,
      quantity,
      price: product.price,
    });
  };

  return (
    <section className="py-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Images */}
          <div>
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white">
              <img
                src={selectedImage}
                alt={product.name}
                className="h-125 w-full object-cover"
              />
            </div>

            <div className="mt-4 grid grid-cols-4 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(image)}
                  className={`overflow-hidden rounded-2xl border-2 transition ${
                    selectedImage === image
                      ? "border-violet-600"
                      : "border-slate-200"
                  }`}
                >
                  <img
                    src={image}
                    alt={`Preview ${index + 1}`}
                    className="h-24 w-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <p className="font-medium text-violet-600">
              {product.category}
            </p>

            <h1 className="mt-2 text-4xl font-bold text-slate-900">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="mt-4 flex items-center gap-3">
              <div className="flex items-center gap-1">
                <Star
                  size={18}
                  className="fill-yellow-400 text-yellow-400"
                />
                <span className="font-medium">
                  {product.rating}
                </span>
              </div>

              <span className="text-slate-500">
                ({product.reviews} Reviews)
              </span>
            </div>

            {/* Price */}
            <div className="mt-6 flex items-center gap-4">
              <h2 className="text-4xl font-bold text-violet-600">
                ${product.price}
              </h2>

              <span className="text-2xl text-slate-400 line-through">
                ${product.oldPrice}
              </span>
            </div>

            {/* Stock */}
            <div className="mt-4">
              <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700">
                {product.stock}
              </span>
            </div>

            {/* Description */}
            <p className="mt-6 leading-relaxed text-slate-600">
              {product.description}
            </p>

            {/* Quantity */}
            <div className="mt-8">
              <h3 className="mb-3 font-semibold text-slate-900">
                Quantity
              </h3>

              <div className="flex items-center gap-4">
                <button
                  onClick={decreaseQuantity}
                  className="rounded-xl border border-slate-200 p-3 hover:bg-slate-100"
                >
                  <Minus size={18} />
                </button>

                <span className="min-w-10 text-center text-lg font-bold">
                  {quantity}
                </span>

                <button
                  onClick={increaseQuantity}
                  className="rounded-xl border border-slate-200 p-3 hover:bg-slate-100"
                >
                  <Plus size={18} />
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <button
                onClick={handleAddToCart}
                className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-violet-600 px-6 py-4 font-semibold text-white transition hover:bg-violet-700"
              >
                <ShoppingCart size={20} />
                Add To Cart
              </button>

              <button className="flex items-center justify-center gap-2 rounded-2xl border border-slate-200 px-6 py-4 font-semibold text-slate-700 transition hover:bg-slate-100">
                <Heart size={20} />
                Wishlist
              </button>
            </div>

            {/* Features */}
            <div className="mt-10 grid gap-4">
              <div className="flex items-center gap-4 rounded-2xl border border-slate-200 p-4">
                <Truck className="text-violet-600" />
                <div>
                  <h4 className="font-semibold">
                    Free Shipping
                  </h4>
                  <p className="text-sm text-slate-500">
                    Orders above $99
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-2xl border border-slate-200 p-4">
                <ShieldCheck className="text-violet-600" />
                <div>
                  <h4 className="font-semibold">
                    Secure Payment
                  </h4>
                  <p className="text-sm text-slate-500">
                    100% protected checkout
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-2xl border border-slate-200 p-4">
                <RotateCcw className="text-violet-600" />
                <div>
                  <h4 className="font-semibold">
                    Easy Returns
                  </h4>
                  <p className="text-sm text-slate-500">
                    30 days return policy
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Description Section */}
        <div className="mt-20 rounded-3xl border border-slate-200 bg-white p-8">
          <h2 className="text-3xl font-bold text-slate-900">
            Product Details
          </h2>

          <p className="mt-4 leading-relaxed text-slate-600">
            The iPhone 16 Pro Max delivers exceptional performance with
            cutting-edge technology, premium build quality, professional-grade
            camera capabilities, and a stunning display designed for the best
            user experience. Perfect for productivity, gaming, photography, and
            entertainment.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ShopDetails;