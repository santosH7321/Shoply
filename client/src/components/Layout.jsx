import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "./Logo";

import {
  Search,
  Heart,
  ShoppingCart,
  User,
  Menu,
  X,
} from "lucide-react";

const navLinks = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "Shop",
    path: "/shop",
  },
  {
    label: "Categories",
    path: "/categories",
  },
  {
    label: "Deals",
    path: "/deals",
  },
];

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const cartCount = 2;
  const wishlistCount = 3;

  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-lg">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link to="/">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `font-medium transition ${
                    isActive
                      ? "text-violet-600"
                      : "text-slate-600 hover:text-violet-600"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            {/* Search */}
            <button className="rounded-xl p-2 text-slate-600 transition hover:bg-slate-100 hover:text-violet-600">
              <Search size={20} />
            </button>

            {/* Wishlist */}
            <Link
              to="/wishlist"
              className="relative rounded-xl p-2 text-slate-600 transition hover:bg-slate-100 hover:text-violet-600"
            >
              <Heart size={20} />

              {wishlistCount > 0 && (
                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
                  {wishlistCount}
                </span>
              )}
            </Link>

            {/* Cart */}
            <Link
              to="/cart"
              className="relative rounded-xl p-2 text-slate-600 transition hover:bg-slate-100 hover:text-violet-600"
            >
              <ShoppingCart size={20} />

              {cartCount > 0 && (
                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-violet-600 text-xs font-bold text-white">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Profile */}
            <Link
              to="/profile"
              className="hidden rounded-xl p-2 text-slate-600 transition hover:bg-slate-100 hover:text-violet-600 md:block"
            >
              <User size={20} />
            </Link>

            {/* Auth */}
            <div className="hidden items-center gap-3 md:flex">
              <Link
                to="/login"
                className="rounded-xl px-4 py-2 font-medium text-slate-700 transition hover:bg-slate-100"
              >
                Login
              </Link>

              <Link
                to="/signup"
                className="rounded-xl bg-violet-600 px-5 py-2 font-medium text-white transition hover:bg-violet-700"
              >
                Sign Up
              </Link>
            </div>

            {/* Mobile Menu */}
            <button
              onClick={() =>
                setIsMenuOpen((prev) => !prev)
              }
              className="rounded-xl p-2 text-slate-700 transition hover:bg-slate-100 lg:hidden"
            >
              {isMenuOpen ? (
                <X size={24} />
              ) : (
                <Menu size={24} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="animate__animated animate__fadeIn border-t border-slate-200 bg-white lg:hidden">
            <div className="flex flex-col gap-2 p-4">
              {navLinks.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `rounded-xl px-4 py-3 font-medium ${
                      isActive
                        ? "bg-violet-50 text-violet-600"
                        : "text-slate-700 hover:bg-slate-100"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}

              <div className="mt-4 flex flex-col gap-3">
                <Link
                  to="/login"
                  onClick={() => setIsMenuOpen(false)}
                  className="rounded-xl border border-slate-200 px-4 py-3 text-center font-medium text-slate-700"
                >
                  Login
                </Link>

                <Link
                  to="/signup"
                  onClick={() => setIsMenuOpen(false)}
                  className="rounded-xl bg-violet-600 px-4 py-3 text-center font-medium text-white"
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main */}
      <main className="flex-1">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          {children}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <Logo showTagline />

              <p className="mt-4 text-sm text-slate-500">
                Shop premium products with confidence and enjoy a seamless
                shopping experience.
              </p>
            </div>

            <div>
              <h3 className="mb-4 text-lg font-semibold">
                Shop
              </h3>

              <ul className="space-y-3 text-slate-600">
                <li>
                  <Link to="/shop">All Products</Link>
                </li>
                <li>
                  <Link to="/categories">Categories</Link>
                </li>
                <li>
                  <Link to="/deals">Deals</Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-lg font-semibold">
                Support
              </h3>

              <ul className="space-y-3 text-slate-600">
                <li>Help Center</li>
                <li>Contact Us</li>
                <li>Shipping Policy</li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-lg font-semibold">
                Account
              </h3>

              <ul className="space-y-3 text-slate-600">
                <li>
                  <Link to="/login">Login</Link>
                </li>

                <li>
                  <Link to="/signup">Create Account</Link>
                </li>

                <li>
                  <Link to="/cart">My Cart</Link>
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