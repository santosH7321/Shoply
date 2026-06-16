import { Routes, Route } from "react-router-dom";

/* Customer Layout */
import Layout from "./components/Layout";

/* Customer Pages */
import Home from "./components/Home";
import Shop from "./components/Shop";
import ShopDetails from "./components/ShopDetails";
import Categories from "./components/Categories";
import Deals from "./components/Deals";
import Cart from "./components/Cart";
import Wishlist from "./components/Wishlist";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import Signup from "./components/Signup";

/* Admin Layout */
import AdminLayout from "./components/admin/AdminLayout";

/* Admin Pages */
import Dashboard from "./components/admin/Dashboard";
import Products from "./components/admin/Products";
import Orders from "./components/admin/Orders";
import Users from "./components/admin/Users";

function App() {
  return (
    <Routes>
      {/* ========================= */}
      {/* Customer Routes */}
      {/* ========================= */}

      <Route
        path="/"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />

      <Route
        path="/shop"
        element={
          <Layout>
            <Shop />
          </Layout>
        }
      />

      <Route
        path="/products/:id"
        element={
          <Layout>
            <ShopDetails />
          </Layout>
        }
      />

      <Route
        path="/categories"
        element={
          <Layout>
            <Categories />
          </Layout>
        }
      />

      <Route
        path="/deals"
        element={
          <Layout>
            <Deals />
          </Layout>
        }
      />

      <Route
        path="/cart"
        element={
          <Layout>
            <Cart />
          </Layout>
        }
      />

      <Route
        path="/wishlist"
        element={
          <Layout>
            <Wishlist />
          </Layout>
        }
      />

      <Route
        path="/checkout"
        element={
          <Layout>
            <Checkout />
          </Layout>
        }
      />

      <Route
        path="/login"
        element={
          <Layout>
            <Login />
          </Layout>
        }
      />

      <Route
        path="/signup"
        element={
          <Layout>
            <Signup />
          </Layout>
        }
      />

      {/* ========================= */}
      {/* Admin Routes */}
      {/* ========================= */}

      <Route
        path="/admin"
        element={
          <AdminLayout>
            <Dashboard />
          </AdminLayout>
        }
      />

      <Route
        path="/admin/products"
        element={
          <AdminLayout>
            <Products />
          </AdminLayout>
        }
      />

      <Route
        path="/admin/orders"
        element={
          <AdminLayout>
            <Orders />
          </AdminLayout>
        }
      />

      <Route
        path="/admin/users"
        element={
          <AdminLayout>
            <Users />
          </AdminLayout>
        }
      />

      {/* ========================= */}
      {/* 404 Page */}
      {/* ========================= */}

      <Route
        path="*"
        element={
          <Layout>
            <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
              <h1 className="text-7xl font-extrabold text-violet-600">
                404
              </h1>

              <h2 className="mt-4 text-3xl font-bold text-slate-900">
                Page Not Found
              </h2>

              <p className="mt-3 text-slate-600">
                The page you are looking for does not exist.
              </p>
            </div>
          </Layout>
        }
      />
    </Routes>
  );
}

export default App;