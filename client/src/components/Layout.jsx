import Logo from "./Logo";
import {
  Search,
  Heart,
  ShoppingCart,
  User,
  Menu,
} from "lucide-react";

const Layout = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-lg">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 lg:flex">
            <a
              href="/"
              className="font-medium text-slate-600 transition hover:text-violet-600"
            >
              Home
            </a>

            <a
              href="/shop"
              className="font-medium text-slate-600 transition hover:text-violet-600"
            >
              Shop
            </a>

            <a
              href="/categories"
              className="font-medium text-slate-600 transition hover:text-violet-600"
            >
              Categories
            </a>

            <a
              href="/deals"
              className="font-medium text-slate-600 transition hover:text-violet-600"
            >
              Deals
            </a>
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-2">
            {/* Desktop Actions */}
            <div className="hidden items-center gap-1 md:flex">
              <button className="rounded-xl p-2 text-slate-600 transition hover:bg-slate-100 hover:text-violet-600">
                <Search size={20} />
              </button>

              <button className="rounded-xl p-2 text-slate-600 transition hover:bg-slate-100 hover:text-violet-600">
                <Heart size={20} />
              </button>

              <button className="rounded-xl p-2 text-slate-600 transition hover:bg-slate-100 hover:text-violet-600">
                <ShoppingCart size={20} />
              </button>

              <button className="rounded-xl p-2 text-slate-600 transition hover:bg-slate-100 hover:text-violet-600">
                <User size={20} />
              </button>
            </div>

            {/* Auth Buttons */}
            <div className="hidden items-center gap-3 md:flex">
              <a
                href="/login"
                className="rounded-xl px-4 py-2 font-medium text-slate-700 transition hover:bg-slate-100"
              >
                Login
              </a>

              <a
                href="/signup"
                className="rounded-xl bg-violet-600 px-5 py-2 font-medium text-white transition hover:bg-violet-700"
              >
                Sign Up
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button className="rounded-xl p-2 text-slate-700 transition hover:bg-slate-100 md:hidden">
              <Menu size={24} />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="border-t border-slate-200 bg-white md:hidden">
          <div className="flex flex-col gap-1 px-4 py-4">
            <a
              href="/"
              className="rounded-xl px-4 py-3 font-medium text-slate-700 hover:bg-slate-100"
            >
              Home
            </a>

            <a
              href="/shop"
              className="rounded-xl px-4 py-3 font-medium text-slate-700 hover:bg-slate-100"
            >
              Shop
            </a>

            <a
              href="/categories"
              className="rounded-xl px-4 py-3 font-medium text-slate-700 hover:bg-slate-100"
            >
              Categories
            </a>

            <a
              href="/deals"
              className="rounded-xl px-4 py-3 font-medium text-slate-700 hover:bg-slate-100"
            >
              Deals
            </a>

            <div className="mt-4 flex flex-col gap-3">
              <a
                href="/login"
                className="rounded-xl border border-slate-200 px-4 py-3 text-center font-medium text-slate-700"
              >
                Login
              </a>

              <a
                href="/signup"
                className="rounded-xl bg-violet-600 px-4 py-3 text-center font-medium text-white"
              >
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          {children}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {/* Brand */}
            <div>
              <Logo showTagline />

              <p className="mt-4 text-sm text-slate-500">
                Shop premium products with confidence and enjoy a seamless
                shopping experience.
              </p>
            </div>

            {/* Shop */}
            <div>
              <h3 className="mb-4 text-lg font-semibold text-slate-900">
                Shop
              </h3>

              <ul className="space-y-3">
                <li>
                  <a
                    href="/new-arrivals"
                    className="text-slate-600 hover:text-violet-600"
                  >
                    New Arrivals
                  </a>
                </li>

                <li>
                  <a
                    href="/best-sellers"
                    className="text-slate-600 hover:text-violet-600"
                  >
                    Best Sellers
                  </a>
                </li>

                <li>
                  <a
                    href="/offers"
                    className="text-slate-600 hover:text-violet-600"
                  >
                    Special Offers
                  </a>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="mb-4 text-lg font-semibold text-slate-900">
                Support
              </h3>

              <ul className="space-y-3">
                <li>
                  <a
                    href="/help"
                    className="text-slate-600 hover:text-violet-600"
                  >
                    Help Center
                  </a>
                </li>

                <li>
                  <a
                    href="/contact"
                    className="text-slate-600 hover:text-violet-600"
                  >
                    Contact Us
                  </a>
                </li>

                <li>
                  <a
                    href="/shipping"
                    className="text-slate-600 hover:text-violet-600"
                  >
                    Shipping Policy
                  </a>
                </li>
              </ul>
            </div>

            {/* Account */}
            <div>
              <h3 className="mb-4 text-lg font-semibold text-slate-900">
                Account
              </h3>

              <ul className="space-y-3">
                <li>
                  <a
                    href="/login"
                    className="text-slate-600 hover:text-violet-600"
                  >
                    Login
                  </a>
                </li>

                <li>
                  <a
                    href="/signup"
                    className="text-slate-600 hover:text-violet-600"
                  >
                    Create Account
                  </a>
                </li>

                <li>
                  <a
                    href="/orders"
                    className="text-slate-600 hover:text-violet-600"
                  >
                    My Orders
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-10 border-t border-slate-200 pt-6 text-center text-sm text-slate-500">
            © {new Date().getFullYear()} Shoply. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;