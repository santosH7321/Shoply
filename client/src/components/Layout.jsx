import Logo from "./Logo";
import { Search, Heart, ShoppingCart, User } from "lucide-react";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-lg">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            <a
              href="#"
              className="font-medium text-slate-600 transition hover:text-violet-600"
            >
              Home
            </a>

            <a
              href="#"
              className="font-medium text-slate-600 transition hover:text-violet-600"
            >
              Shop
            </a>

            <a
              href="#"
              className="font-medium text-slate-600 transition hover:text-violet-600"
            >
              Categories
            </a>

            <a
              href="#"
              className="font-medium text-slate-600 transition hover:text-violet-600"
            >
              Deals
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2 sm:gap-4">
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
          <div className="grid gap-10 md:grid-cols-4">
            {/* Brand */}
            <div>
              <Logo showTagline />
            </div>

            {/* Shop */}
            <div>
              <h3 className="mb-4 font-semibold text-slate-900">Shop</h3>

              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-slate-600 transition hover:text-violet-600"
                  >
                    New Arrivals
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-slate-600 transition hover:text-violet-600"
                  >
                    Best Sellers
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-slate-600 transition hover:text-violet-600"
                  >
                    Deals
                  </a>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="mb-4 font-semibold text-slate-900">Support</h3>

              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-slate-600 transition hover:text-violet-600"
                  >
                    Help Center
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-slate-600 transition hover:text-violet-600"
                  >
                    Contact Us
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-slate-600 transition hover:text-violet-600"
                  >
                    Shipping Policy
                  </a>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="mb-4 font-semibold text-slate-900">Company</h3>

              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-slate-600 transition hover:text-violet-600"
                  >
                    About Us
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-slate-600 transition hover:text-violet-600"
                  >
                    Careers
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-slate-600 transition hover:text-violet-600"
                  >
                    Privacy Policy
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