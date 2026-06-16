import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Login from "./components/Login";
import Signup from "./components/Signup";

const Home = () => {
  return (
    <div className="rounded-3xl bg-white p-12 shadow-sm">
      <h1 className="text-center text-4xl font-bold text-slate-900">
        Welcome to Shoply
      </h1>

      <p className="mt-4 text-center text-slate-600">
        Premium Ecommerce Experience
      </p>
    </div>
  );
};

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Home />
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

      <Route
        path="*"
        element={
          <Layout>
            <div className="py-20 text-center">
              <h1 className="text-5xl font-bold text-slate-900">
                404
              </h1>

              <p className="mt-4 text-slate-600">
                Page not found
              </p>
            </div>
          </Layout>
        }
      />
    </Routes>
  );
}

export default App;