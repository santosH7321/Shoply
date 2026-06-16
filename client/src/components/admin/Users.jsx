import { useState } from "react";
import {
  Search,
  Eye,
  User,
  Mail,
  Phone,
  Trash2,
  Shield,
  Users as UsersIcon,
} from "lucide-react";

const initialUsers = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    phone: "+1 9876543210",
    role: "Customer",
    status: "Active",
  },
  {
    id: 2,
    name: "Sarah Smith",
    email: "sarah@example.com",
    phone: "+1 9876543211",
    role: "Customer",
    status: "Active",
  },
  {
    id: 3,
    name: "Michael Lee",
    email: "michael@example.com",
    phone: "+1 9876543212",
    role: "Admin",
    status: "Active",
  },
  {
    id: 4,
    name: "Emma Watson",
    email: "emma@example.com",
    phone: "+1 9876543213",
    role: "Customer",
    status: "Blocked",
  },
  {
    id: 5,
    name: "David Miller",
    email: "david@example.com",
    phone: "+1 9876543214",
    role: "Customer",
    status: "Active",
  },
];

const Users = () => {
  const [search, setSearch] = useState("");

  const filteredUsers = initialUsers.filter(
    (user) =>
      user.name
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      user.email
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  const handleView = (user) => {
    console.log("View User:", user);
  };

  const handleDelete = (user) => {
    console.log("Delete User:", user);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-slate-900">
          Users
        </h1>

        <p className="mt-2 text-slate-500">
          Manage customers and administrators.
        </p>
      </div>

      {/* Stats */}
      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-3xl border border-slate-200 bg-white p-6">
          <UsersIcon className="text-violet-600" />

          <h3 className="mt-4 text-slate-500">
            Total Users
          </h3>

          <p className="mt-2 text-3xl font-bold text-slate-900">
            4,892
          </p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6">
          <User className="text-green-600" />

          <h3 className="mt-4 text-slate-500">
            Active Users
          </h3>

          <p className="mt-2 text-3xl font-bold text-green-600">
            4,728
          </p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6">
          <Shield className="text-amber-600" />

          <h3 className="mt-4 text-slate-500">
            Administrators
          </h3>

          <p className="mt-2 text-3xl font-bold text-amber-600">
            12
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
            placeholder="Search users..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            className="w-full rounded-2xl border border-slate-200 py-3 pl-11 pr-4 outline-none focus:border-violet-500"
          />
        </div>
      </div>

      {/* Users Table */}
      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white">
        <div className="overflow-x-auto">
          <table className="w-full min-w-250">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="px-6 py-4 text-left">
                  User
                </th>

                <th className="px-6 py-4 text-left">
                  Email
                </th>

                <th className="px-6 py-4 text-left">
                  Phone
                </th>

                <th className="px-6 py-4 text-left">
                  Role
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
              {filteredUsers.map((user) => (
                <tr
                  key={user.id}
                  className="border-b border-slate-100"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-violet-100">
                        <User
                          size={18}
                          className="text-violet-600"
                        />
                      </div>

                      <div>
                        <h4 className="font-semibold text-slate-900">
                          {user.name}
                        </h4>

                        <p className="text-sm text-slate-500">
                          User ID #{user.id}
                        </p>
                      </div>
                    </div>
                  </td>

                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2 text-slate-600">
                      <Mail size={16} />
                      {user.email}
                    </div>
                  </td>

                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2 text-slate-600">
                      <Phone size={16} />
                      {user.phone}
                    </div>
                  </td>

                  <td className="px-6 py-4">
                    <span
                      className={`rounded-xl px-3 py-1 text-sm font-medium ${
                        user.role === "Admin"
                          ? "bg-violet-100 text-violet-700"
                          : "bg-slate-100 text-slate-700"
                      }`}
                    >
                      {user.role}
                    </span>
                  </td>

                  <td className="px-6 py-4">
                    <span
                      className={`rounded-xl px-3 py-1 text-sm font-medium ${
                        user.status === "Active"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {user.status}
                    </span>
                  </td>

                  <td className="px-6 py-4">
                    <div className="flex items-center justify-center gap-2">
                      <button
                        onClick={() =>
                          handleView(user)
                        }
                        className="rounded-xl p-2 text-blue-600 transition hover:bg-blue-50"
                      >
                        <Eye size={18} />
                      </button>

                      <button
                        onClick={() =>
                          handleDelete(user)
                        }
                        className="rounded-xl p-2 text-red-600 transition hover:bg-red-50"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}

              {filteredUsers.length === 0 && (
                <tr>
                  <td
                    colSpan="6"
                    className="px-6 py-16 text-center"
                  >
                    <UsersIcon
                      size={48}
                      className="mx-auto text-slate-300"
                    />

                    <h3 className="mt-4 text-lg font-semibold text-slate-900">
                      No Users Found
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

export default Users;