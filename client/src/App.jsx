import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";

import Home from "./components/Home";
import Shop from "./components/Shop";
import ShopDetails from "./components/ShopDetails";
import Categories from "./components/Categories";
import Deals from "./components/Deals";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  return (
    <Routes>
      {/* Home */}
      <Route
        path="/"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />

      {/* Shop */}
      <Route
        path="/shop"
        element={
          <Layout>
            <Shop />
          </Layout>
        }
      />

      {/* Product Details */}
      <Route
        path="/products/:id"
        element={
          <Layout>
            <ShopDetails />
          </Layout>
        }
      />

      {/* Categories */}
      <Route
        path="/categories"
        element={
          <Layout>
            <Categories />
          </Layout>
        }
      />

      {/* Deals */}
      <Route
        path="/deals"
        element={
          <Layout>
            <Deals />
          </Layout>
        }
      />

      {/* Cart */}
      <Route
        path="/cart"
        element={
          <Layout>
            <Cart />
          </Layout>
        }
      />

      {/* Checkout */}
      <Route
        path="/checkout"
        element={
          <Layout>
            <Checkout />
          </Layout>
        }
      />

      {/* Auth */}
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

      {/* 404 Page */}
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

              <a
                href="/"
                className="mt-8 rounded-xl bg-violet-600 px-6 py-3 font-semibold text-white transition hover:bg-violet-700"
              >
                Back To Home
              </a>
            </div>
          </Layout>
        }
      />
    </Routes>
  );
}

export default App;