import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Users,
  Menu,
  X,
  Bell,
  Search,
  User,
} from "lucide-react";

const menus = [
  {
    name: "Dashboard",
    path: "/admin",
    icon: LayoutDashboard,
  },
  {
    name: "Products",
    path: "/admin/products",
    icon: Package,
  },
  {
    name: "Orders",
    path: "/admin/orders",
    icon: ShoppingCart,
  },
  {
    name: "Users",
    path: "/admin/users",
    icon: Users,
  },
];

const AdminLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] =
    useState(false);

  return (
    <div className="flex min-h-screen bg-slate-100">
      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div
          onClick={() => setIsSidebarOpen(false)}
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 z-50 h-screen w-72 border-r border-slate-200 bg-white transition-transform duration-300 lg:translate-x-0 ${
          isSidebarOpen
            ? "translate-x-0"
            : "-translate-x-full"
        }`}
      >
        {/* Logo */}
        <div className="flex h-20 items-center justify-between border-b border-slate-200 px-6">
          <div>
            <h1 className="text-2xl font-bold text-violet-600">
              Shoply
            </h1>

            <p className="text-sm text-slate-500">
              Admin Panel
            </p>
          </div>

          <button
            onClick={() => setIsSidebarOpen(false)}
            className="rounded-lg p-2 hover:bg-slate-100 lg:hidden"
          >
            <X size={20} />
          </button>
        </div>

        {/* Menus */}
        <nav className="p-4">
          <ul className="space-y-2">
            {menus.map((menu) => {
              const Icon = menu.icon;

              return (
                <li key={menu.path}>
                  <NavLink
                    to={menu.path}
                    end={menu.path === "/admin"}
                    className={({ isActive }) =>
                      `flex items-center gap-3 rounded-2xl px-4 py-3 font-medium transition ${
                        isActive
                          ? "bg-violet-600 text-white"
                          : "text-slate-700 hover:bg-slate-100"
                      }`
                    }
                  >
                    <Icon size={20} />
                    {menu.name}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>

      {/* Content */}
      <div className="flex flex-1 flex-col lg:ml-72">
        {/* Topbar */}
        <header className="sticky top-0 z-30 border-b border-slate-200 bg-white">
          <div className="flex h-20 items-center justify-between px-4 md:px-8">
            {/* Left */}
            <div className="flex items-center gap-4">
              <button
                onClick={() =>
                  setIsSidebarOpen(true)
                }
                className="rounded-xl p-2 hover:bg-slate-100 lg:hidden"
              >
                <Menu size={22} />
              </button>

              <div className="hidden items-center rounded-xl border border-slate-200 bg-slate-50 px-4 py-2 md:flex">
                <Search
                  size={18}
                  className="text-slate-400"
                />

                <input
                  type="text"
                  placeholder="Search..."
                  className="ml-2 bg-transparent outline-none"
                />
              </div>
            </div>

            {/* Right */}
            <div className="flex items-center gap-4">
              <button className="rounded-xl p-2 hover:bg-slate-100">
                <Bell size={20} />
              </button>

              <div className="flex items-center gap-3 rounded-xl border border-slate-200 px-3 py-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-100">
                  <User
                    size={18}
                    className="text-violet-600"
                  />
                </div>

                <div className="hidden md:block">
                  <p className="font-medium text-slate-900">
                    Admin
                  </p>

                  <p className="text-sm text-slate-500">
                    admin@shoply.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Section */}
        <main className="flex-1 p-4 md:p-8">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;