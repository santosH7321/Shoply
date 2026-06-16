import { useState } from "react";
import {
  Search,
  Eye,
  Truck,
  Package,
  CheckCircle,
  Clock,
} from "lucide-react";

const initialOrders = [
  {
    id: "#ORD-1001",
    customer: "John Doe",
    total: "$1299",
    items: 2,
    status: "Delivered",
    date: "15 Jun 2026",
  },
  {
    id: "#ORD-1002",
    customer: "Sarah Smith",
    total: "$499",
    items: 1,
    status: "Processing",
    date: "14 Jun 2026",
  },
  {
    id: "#ORD-1003",
    customer: "Michael Lee",
    total: "$2499",
    items: 3,
    status: "Shipped",
    date: "13 Jun 2026",
  },
  {
    id: "#ORD-1004",
    customer: "Emma Watson",
    total: "$799",
    items: 1,
    status: "Pending",
    date: "12 Jun 2026",
  },
  {
    id: "#ORD-1005",
    customer: "David Miller",
    total: "$349",
    items: 2,
    status: "Delivered",
    date: "11 Jun 2026",
  },
];

const Orders = () => {
  const [search, setSearch] = useState("");

  const filteredOrders = initialOrders.filter(
    (order) =>
      order.id
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      order.customer
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  const handleViewOrder = (order) => {
    console.log("View Order:", order);
  };

  const getStatusStyle = (status) => {
    switch (status) {
      case "Delivered":
        return "bg-green-100 text-green-700";

      case "Processing":
        return "bg-blue-100 text-blue-700";

      case "Shipped":
        return "bg-violet-100 text-violet-700";

      default:
        return "bg-yellow-100 text-yellow-700";
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-slate-900">
          Orders
        </h1>

        <p className="mt-2 text-slate-500">
          Manage customer orders and deliveries.
        </p>
      </div>

      {/* Stats */}
      <div className="grid gap-6 md:grid-cols-4">
        <div className="rounded-3xl border border-slate-200 bg-white p-6">
          <div className="flex items-center justify-between">
            <Package className="text-violet-600" />
          </div>

          <h3 className="mt-4 text-slate-500">
            Total Orders
          </h3>

          <p className="mt-2 text-3xl font-bold text-slate-900">
            1,284
          </p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6">
          <Clock className="text-yellow-600" />

          <h3 className="mt-4 text-slate-500">
            Pending
          </h3>

          <p className="mt-2 text-3xl font-bold text-yellow-600">
            124
          </p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6">
          <Truck className="text-blue-600" />

          <h3 className="mt-4 text-slate-500">
            Shipped
          </h3>

          <p className="mt-2 text-3xl font-bold text-blue-600">
            248
          </p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6">
          <CheckCircle className="text-green-600" />

          <h3 className="mt-4 text-slate-500">
            Delivered
          </h3>

          <p className="mt-2 text-3xl font-bold text-green-600">
            912
          </p>
        </div>
      </div>

      {/* Search */}
      <div className="rounded-3xl border border-slate-200 bg-white p-6">
        <div className="relative">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="text"
            placeholder="Search order id or customer..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            className="w-full rounded-2xl border border-slate-200 py-3 pl-11 pr-4 outline-none focus:border-violet-500"
          />
        </div>
      </div>

      {/* Orders Table */}
      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white">
        <div className="overflow-x-auto">
          <table className="w-full min-w-225">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="px-6 py-4 text-left">
                  Order ID
                </th>

                <th className="px-6 py-4 text-left">
                  Customer
                </th>

                <th className="px-6 py-4 text-left">
                  Items
                </th>

                <th className="px-6 py-4 text-left">
                  Total
                </th>

                <th className="px-6 py-4 text-left">
                  Date
                </th>

                <th className="px-6 py-4 text-left">
                  Status
                </th>

                <th className="px-6 py-4 text-center">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {filteredOrders.map((order) => (
                <tr
                  key={order.id}
                  className="border-b border-slate-100"
                >
                  <td className="px-6 py-4 font-semibold text-slate-900">
                    {order.id}
                  </td>

                  <td className="px-6 py-4 text-slate-600">
                    {order.customer}
                  </td>

                  <td className="px-6 py-4 text-slate-600">
                    {order.items}
                  </td>

                  <td className="px-6 py-4 font-semibold text-slate-900">
                    {order.total}
                  </td>

                  <td className="px-6 py-4 text-slate-600">
                    {order.date}
                  </td>

                  <td className="px-6 py-4">
                    <span
                      className={`rounded-xl px-3 py-1 text-sm font-medium ${getStatusStyle(
                        order.status
                      )}`}
                    >
                      {order.status}
                    </span>
                  </td>

                  <td className="px-6 py-4">
                    <div className="flex justify-center">
                      <button
                        onClick={() =>
                          handleViewOrder(order)
                        }
                        className="rounded-xl p-2 text-violet-600 transition hover:bg-violet-50"
                      >
                        <Eye size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}

              {filteredOrders.length === 0 && (
                <tr>
                  <td
                    colSpan="7"
                    className="px-6 py-16 text-center"
                  >
                    <Package
                      size={48}
                      className="mx-auto text-slate-300"
                    />

                    <h3 className="mt-4 text-lg font-semibold text-slate-900">
                      No Orders Found
                    </h3>

                    <p className="mt-2 text-slate-500">
                      Try another search keyword.
                    </p>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Orders;