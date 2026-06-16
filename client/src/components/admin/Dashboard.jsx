import {
  DollarSign,
  ShoppingCart,
  Package,
  Users,
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";

const stats = [
  {
    title: "Total Revenue",
    value: "$24,850",
    growth: "+12.5%",
    icon: DollarSign,
    positive: true,
  },
  {
    title: "Total Orders",
    value: "1,284",
    growth: "+8.2%",
    icon: ShoppingCart,
    positive: true,
  },
  {
    title: "Products",
    value: "356",
    growth: "+5.1%",
    icon: Package,
    positive: true,
  },
  {
    title: "Users",
    value: "4,892",
    growth: "-1.2%",
    icon: Users,
    positive: false,
  },
];

const recentOrders = [
  {
    id: "#ORD-1001",
    customer: "John Doe",
    amount: "$299",
    status: "Completed",
  },
  {
    id: "#ORD-1002",
    customer: "Sarah Smith",
    amount: "$899",
    status: "Pending",
  },
  {
    id: "#ORD-1003",
    customer: "Michael Lee",
    amount: "$129",
    status: "Completed",
  },
  {
    id: "#ORD-1004",
    customer: "Emma Watson",
    amount: "$459",
    status: "Processing",
  },
];

const topProducts = [
  {
    name: "iPhone 16 Pro Max",
    sales: 248,
  },
  {
    name: "MacBook Pro M4",
    sales: 187,
  },
  {
    name: "Sony WH-1000XM5",
    sales: 142,
  },
  {
    name: "Apple Watch Ultra",
    sales: 115,
  },
];

const Dashboard = () => {
  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-slate-900">
          Dashboard
        </h1>

        <p className="mt-2 text-slate-500">
          Welcome back! Here's what's happening with your store today.
        </p>
      </div>

      {/* Stats */}
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.title}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <div className="rounded-2xl bg-violet-100 p-3">
                  <Icon
                    size={24}
                    className="text-violet-600"
                  />
                </div>

                <div
                  className={`flex items-center gap-1 text-sm font-medium ${
                    stat.positive
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {stat.positive ? (
                    <ArrowUpRight size={16} />
                  ) : (
                    <ArrowDownRight size={16} />
                  )}

                  {stat.growth}
                </div>
              </div>

              <h3 className="mt-5 text-sm text-slate-500">
                {stat.title}
              </h3>

              <p className="mt-2 text-3xl font-bold text-slate-900">
                {stat.value}
              </p>
            </div>
          );
        })}
      </div>

      {/* Middle Section */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Sales Overview */}
        <div className="rounded-3xl border border-slate-200 bg-white p-6 lg:col-span-2">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-slate-900">
              Sales Overview
            </h2>

            <div className="flex items-center gap-2 text-green-600">
              <TrendingUp size={18} />
              <span className="font-medium">
                +18.4% This Month
              </span>
            </div>
          </div>

          <div className="mt-8 flex h-80 items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-slate-50">
            <p className="text-slate-500">
              Sales Chart (Recharts / Chart.js Here)
            </p>
          </div>
        </div>

        {/* Top Products */}
        <div className="rounded-3xl border border-slate-200 bg-white p-6">
          <h2 className="text-xl font-bold text-slate-900">
            Top Products
          </h2>

          <div className="mt-6 space-y-4">
            {topProducts.map((product) => (
              <div
                key={product.name}
                className="flex items-center justify-between"
              >
                <div>
                  <h4 className="font-medium text-slate-900">
                    {product.name}
                  </h4>

                  <p className="text-sm text-slate-500">
                    {product.sales} Sales
                  </p>
                </div>

                <span className="rounded-xl bg-violet-100 px-3 py-1 text-sm font-medium text-violet-700">
                  #{topProducts.indexOf(product) + 1}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Orders */}
      <div className="rounded-3xl border border-slate-200 bg-white p-6">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-bold text-slate-900">
            Recent Orders
          </h2>

          <button className="font-medium text-violet-600">
            View All
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-175">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="pb-4 text-left font-semibold text-slate-600">
                  Order ID
                </th>

                <th className="pb-4 text-left font-semibold text-slate-600">
                  Customer
                </th>

                <th className="pb-4 text-left font-semibold text-slate-600">
                  Amount
                </th>

                <th className="pb-4 text-left font-semibold text-slate-600">
                  Status
                </th>
              </tr>
            </thead>

            <tbody>
              {recentOrders.map((order) => (
                <tr
                  key={order.id}
                  className="border-b border-slate-100"
                >
                  <td className="py-4 font-medium text-slate-900">
                    {order.id}
                  </td>

                  <td className="py-4 text-slate-600">
                    {order.customer}
                  </td>

                  <td className="py-4 font-medium text-slate-900">
                    {order.amount}
                  </td>

                  <td className="py-4">
                    <span
                      className={`rounded-xl px-3 py-1 text-sm font-medium ${
                        order.status === "Completed"
                          ? "bg-green-100 text-green-700"
                          : order.status === "Pending"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-blue-100 text-blue-700"
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;