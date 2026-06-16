import { useState } from "react";
import {
  Plus,
  Minus,
  Trash2,
  ShoppingBag,
  ArrowRight,
} from "lucide-react";

const initialCartItems = [
  {
    id: 1,
    name: "iPhone 16 Pro Max",
    price: 1299,
    quantity: 1,
    image:
      "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=800",
  },
  {
    id: 2,
    name: "Sony WH-1000XM5",
    price: 399,
    quantity: 2,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800",
  },
];

const Cart = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);

  const increaseQuantity = (id) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((items) =>
      items.filter((item) => item.id !== id)
    );
  };

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const shipping = subtotal > 500 ? 0 : 20;
  const tax = subtotal * 0.1;
  const total = subtotal + shipping + tax;

  if (cartItems.length === 0) {
    return (
      <section className="py-16">
        <div className="mx-auto max-w-xl text-center">
          <div className="flex justify-center">
            <div className="rounded-full bg-violet-100 p-6">
              <ShoppingBag
                size={50}
                className="text-violet-600"
              />
            </div>
          </div>

          <h1 className="mt-6 text-3xl font-bold text-slate-900">
            Your Cart Is Empty
          </h1>

          <p className="mt-3 text-slate-600">
            Looks like you haven't added any products yet.
          </p>

          <a
            href="/shop"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-violet-600 px-6 py-3 font-semibold text-white transition hover:bg-violet-700"
          >
            Continue Shopping
            <ArrowRight size={18} />
          </a>
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
            Shopping Cart
          </h1>

          <p className="mt-2 text-slate-600">
            Review your selected products before checkout.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
          {/* Cart Items */}
          <div className="space-y-5">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <div className="flex flex-col gap-5 md:flex-row md:items-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-32 w-full rounded-2xl object-cover md:w-32"
                  />

                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-900">
                      {item.name}
                    </h3>

                    <p className="mt-2 text-slate-500">
                      Premium Product
                    </p>

                    <h4 className="mt-3 text-2xl font-bold text-violet-600">
                      ${item.price}
                    </h4>
                  </div>

                  {/* Quantity */}
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() =>
                        decreaseQuantity(item.id)
                      }
                      className="rounded-xl border border-slate-200 p-2 hover:bg-slate-100"
                    >
                      <Minus size={18} />
                    </button>

                    <span className="min-w-10 text-center font-semibold">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() =>
                        increaseQuantity(item.id)
                      }
                      className="rounded-xl border border-slate-200 p-2 hover:bg-slate-100"
                    >
                      <Plus size={18} />
                    </button>
                  </div>

                  {/* Remove */}
                  <button
                    onClick={() => removeItem(item.id)}
                    className="rounded-xl bg-red-50 p-3 text-red-500 transition hover:bg-red-100"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div>
            <div className="sticky top-24 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900">
                Order Summary
              </h2>

              <div className="mt-6 space-y-4">
                <div className="flex justify-between">
                  <span className="text-slate-600">
                    Subtotal
                  </span>

                  <span className="font-semibold">
                    ${subtotal.toFixed(2)}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-slate-600">
                    Shipping
                  </span>

                  <span className="font-semibold">
                    {shipping === 0
                      ? "Free"
                      : `$${shipping.toFixed(2)}`}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-slate-600">Tax</span>

                  <span className="font-semibold">
                    ${tax.toFixed(2)}
                  </span>
                </div>

                <div className="border-t border-slate-200 pt-4">
                  <div className="flex justify-between">
                    <span className="text-lg font-bold">
                      Total
                    </span>

                    <span className="text-2xl font-bold text-violet-600">
                      ${total.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>

              <button
                onClick={() =>
                  console.log({
                    cartItems,
                    subtotal,
                    shipping,
                    tax,
                    total,
                  })
                }
                className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-violet-600 py-4 font-semibold text-white transition hover:bg-violet-700"
              >
                Proceed To Checkout
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;