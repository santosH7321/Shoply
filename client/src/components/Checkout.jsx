import { useState } from "react";
import {
  CreditCard,
  MapPin,
  User,
  Mail,
  Phone,
  ShoppingBag,
} from "lucide-react";

const Checkout = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    paymentMethod: "card",
  });

  const [errors, setErrors] = useState({});

  const cartSummary = {
    subtotal: 2097,
    shipping: 0,
    tax: 209.7,
    total: 2306.7,
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

    setErrors((prev) => ({
      ...prev,
      [e.target.name]: "",
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
        formData.email
      )
    ) {
      newErrors.email = "Invalid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }

    if (!formData.address.trim()) {
      newErrors.address = "Address is required";
    }

    if (!formData.city.trim()) {
      newErrors.city = "City is required";
    }

    if (!formData.state.trim()) {
      newErrors.state = "State is required";
    }

    if (!formData.zipCode.trim()) {
      newErrors.zipCode = "Zip code is required";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }

    // Shoply Rule
    console.log("Checkout Form Data:", formData);
  };

  return (
    <section className="py-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-slate-900">
            Checkout
          </h1>

          <p className="mt-2 text-slate-600">
            Complete your order securely.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_400px]">
          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-8"
          >
            {/* Personal Info */}
            <div className="rounded-3xl border border-slate-200 bg-white p-6">
              <h2 className="mb-6 text-2xl font-bold text-slate-900">
                Personal Information
              </h2>

              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block font-medium text-slate-700">
                    Full Name
                  </label>

                  <div className="relative">
                    <User
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full rounded-xl border border-slate-200 py-3 pl-11 pr-4 outline-none focus:border-violet-500"
                    />
                  </div>

                  {errors.fullName && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.fullName}
                    </p>
                  )}
                </div>

                <div>
                  <label className="mb-2 block font-medium text-slate-700">
                    Email
                  </label>

                  <div className="relative">
                    <Mail
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full rounded-xl border border-slate-200 py-3 pl-11 pr-4 outline-none focus:border-violet-500"
                    />
                  </div>

                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div className="md:col-span-2">
                  <label className="mb-2 block font-medium text-slate-700">
                    Phone Number
                  </label>

                  <div className="relative">
                    <Phone
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 9876543210"
                      className="w-full rounded-xl border border-slate-200 py-3 pl-11 pr-4 outline-none focus:border-violet-500"
                    />
                  </div>

                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.phone}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Shipping Address */}
            <div className="rounded-3xl border border-slate-200 bg-white p-6">
              <h2 className="mb-6 text-2xl font-bold text-slate-900">
                Shipping Address
              </h2>

              <div className="space-y-5">
                <div>
                  <label className="mb-2 block font-medium text-slate-700">
                    Address
                  </label>

                  <div className="relative">
                    <MapPin
                      size={18}
                      className="absolute left-4 top-4 text-slate-400"
                    />

                    <textarea
                      rows="4"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="Enter your address"
                      className="w-full rounded-xl border border-slate-200 py-3 pl-11 pr-4 outline-none focus:border-violet-500"
                    />
                  </div>

                  {errors.address && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.address}
                    </p>
                  )}
                </div>

                <div className="grid gap-5 md:grid-cols-3">
                  <div>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      placeholder="City"
                      className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-violet-500"
                    />

                    {errors.city && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.city}
                      </p>
                    )}
                  </div>

                  <div>
                    <input
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      placeholder="State"
                      className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-violet-500"
                    />

                    {errors.state && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.state}
                      </p>
                    )}
                  </div>

                  <div>
                    <input
                      type="text"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleChange}
                      placeholder="Zip Code"
                      className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-violet-500"
                    />

                    {errors.zipCode && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.zipCode}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Payment */}
            <div className="rounded-3xl border border-slate-200 bg-white p-6">
              <h2 className="mb-6 text-2xl font-bold text-slate-900">
                Payment Method
              </h2>

              <label className="flex cursor-pointer items-center gap-3 rounded-2xl border border-violet-200 bg-violet-50 p-4">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="card"
                  checked={formData.paymentMethod === "card"}
                  onChange={handleChange}
                />

                <CreditCard size={20} />

                <span className="font-medium">
                  Credit / Debit Card
                </span>
              </label>
            </div>

            <button
              type="submit"
              className="w-full rounded-2xl bg-violet-600 py-4 font-semibold text-white transition hover:bg-violet-700"
            >
              Place Order
            </button>
          </form>

          {/* Summary */}
          <div>
            <div className="sticky top-24 rounded-3xl border border-slate-200 bg-white p-6">
              <div className="flex items-center gap-3">
                <ShoppingBag className="text-violet-600" />

                <h2 className="text-2xl font-bold text-slate-900">
                  Order Summary
                </h2>
              </div>

              <div className="mt-8 space-y-4">
                <div className="flex justify-between">
                  <span className="text-slate-600">
                    Subtotal
                  </span>

                  <span>
                    ${cartSummary.subtotal.toFixed(2)}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-slate-600">
                    Shipping
                  </span>

                  <span className="text-green-600">
                    Free
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-slate-600">Tax</span>

                  <span>
                    ${cartSummary.tax.toFixed(2)}
                  </span>
                </div>

                <div className="border-t border-slate-200 pt-4">
                  <div className="flex justify-between">
                    <span className="text-xl font-bold">
                      Total
                    </span>

                    <span className="text-2xl font-bold text-violet-600">
                      ${cartSummary.total.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-8 rounded-2xl bg-slate-50 p-4">
                <p className="text-sm text-slate-600">
                  Secure checkout powered by encrypted payment
                  processing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;