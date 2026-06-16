import Layout from "./components/Layout";

function App() {
  return (
    <Layout>
      <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-20 text-center">
        <h1 className="text-4xl font-bold text-slate-900">
          Shoply Home Page
        </h1>

        <p className="mt-4 text-slate-600">
          Your page content goes here.
        </p>
      </div>
    </Layout>
  );
}

export default App;