import { ArrowRight, ShieldCheck, Truck, Headphones } from "lucide-react";
import { Link } from "react-router-dom";

import Categories from "./Categories";
import Deals from "./Deals";
import Shop from "./Shop";

const Home = () => {
  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="overflow-hidden rounded-4xl bg-linear-to-r from-violet-600 via-purple-600 to-indigo-600">
        <div className="grid gap-10 px-6 py-16 lg:grid-cols-2 lg:px-16 lg:py-24">
          {/* Content */}
          <div className="flex flex-col justify-center">
            <span className="mb-6 w-fit rounded-full bg-white/20 px-4 py-2 text-sm font-semibold text-white backdrop-blur">
              🔥 Summer Sale Up To 70% Off
            </span>

            <h1 className="text-5xl font-extrabold leading-tight text-white lg:text-7xl">
              Shop Smarter
              <br />
              With Shoply
            </h1>

            <p className="mt-6 max-w-xl text-lg text-violet-100">
              Discover premium products, unbeatable deals, and a seamless
              shopping experience designed for modern shoppers.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/shop"
                className="flex items-center gap-2 rounded-2xl bg-white px-6 py-4 font-semibold text-slate-900 transition hover:scale-105"
              >
                Shop Now
                <ArrowRight size={18} />
              </Link>

              <Link
                to="/categories"
                className="rounded-2xl border border-white/30 px-6 py-4 font-semibold text-white backdrop-blur transition hover:bg-white/10"
              >
                Browse Categories
              </Link>
            </div>
          </div>

          {/* Hero Image */}
          <div className="flex items-center justify-center">
            <img
              src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1200"
              alt="Shoply Hero"
              className="h-full max-h-125 w-full rounded-3xl object-cover shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-100">
              <Truck className="text-violet-600" size={28} />
            </div>

            <h3 className="text-xl font-bold text-slate-900">
              Free Shipping
            </h3>

            <p className="mt-2 text-slate-600">
              Free delivery on all orders above $99 worldwide.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-100">
              <ShieldCheck className="text-violet-600" size={28} />
            </div>

            <h3 className="text-xl font-bold text-slate-900">
              Secure Payment
            </h3>

            <p className="mt-2 text-slate-600">
              100% secure payment methods with buyer protection.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-100">
              <Headphones className="text-violet-600" size={28} />
            </div>

            <h3 className="text-xl font-bold text-slate-900">
              24/7 Support
            </h3>

            <p className="mt-2 text-slate-600">
              Dedicated support team available anytime you need help.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <Categories />

      {/* Deals */}
      <Deals />

      {/* Featured Products */}
      <section>
        <div className="mb-10 text-center">
          <span className="rounded-full bg-violet-100 px-4 py-2 text-sm font-semibold text-violet-700">
            Featured Products
          </span>

          <h2 className="mt-4 text-4xl font-bold text-slate-900">
            Trending Products
          </h2>

          <p className="mt-3 text-slate-600">
            Explore our most popular products loved by customers.
          </p>
        </div>

        <Shop />
      </section>

      {/* CTA */}
      <section className="rounded-4xl bg-slate-900 px-8 py-16 text-center">
        <h2 className="text-4xl font-bold text-white">
          Ready To Start Shopping?
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-slate-300">
          Create your Shoply account today and unlock exclusive offers,
          personalized recommendations, and premium shopping benefits.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <Link
            to="/signup"
            className="rounded-2xl bg-violet-600 px-8 py-4 font-semibold text-white transition hover:bg-violet-700"
          >
            Create Account
          </Link>

          <Link
            to="/login"
            className="rounded-2xl border border-slate-700 px-8 py-4 font-semibold text-white transition hover:bg-slate-800"
          >
            Sign In
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;