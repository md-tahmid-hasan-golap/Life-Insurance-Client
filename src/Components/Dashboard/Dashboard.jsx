// Dashboard.jsx
import React, { useContext, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../../firebase/FirebaseAuthProvider";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const role = user?.role || "customer"; // user role
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar for large screens */}
      <aside className="hidden md:flex md:flex-col w-64 bg-white shadow-md p-4">
        <h2 className="text-xl font-bold mb-6">Dashboard</h2>
        <ul className="space-y-3">
          {role === "customer" && (
            <>
              <li>
                <Link
                  to="/dashboard/my-policies"
                  className="block px-3 py-2 rounded hover:bg-blue-600 hover:text-white"
                >
                  My Policies
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard/payment-status"
                  className="block px-3 py-2 rounded hover:bg-blue-600 hover:text-white"
                >
                  Payment Status
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard/claim-request"
                  className="block px-3 py-2 rounded hover:bg-blue-600 hover:text-white"
                >
                  Claim Requests
                </Link>
              </li>
            </>
          )}

          {role === "agent" && (
            <>
              <li>
                <Link
                  to="/dashboard/assigned-customers"
                  className="block px-3 py-2 rounded hover:bg-blue-600 hover:text-white"
                >
                  Assigned Customers
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard/manage-blogs"
                  className="block px-3 py-2 rounded hover:bg-blue-600 hover:text-white"
                >
                  Manage Blogs
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard/policy-clearance"
                  className="block px-3 py-2 rounded hover:bg-blue-600 hover:text-white"
                >
                  Policy Clearance
                </Link>
              </li>
            </>
          )}

          {role === "admin" && (
            <>
              <li>
                <Link
                  to="/dashboard/manage-applications"
                  className="block px-3 py-2 rounded hover:bg-blue-600 hover:text-white"
                >
                  Manage Applications
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard/manage-users"
                  className="block px-3 py-2 rounded hover:bg-blue-600 hover:text-white"
                >
                  Manage Users
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard/manage-policies"
                  className="block px-3 py-2 rounded hover:bg-blue-600 hover:text-white"
                >
                  Manage Policies
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard/manage-transactions"
                  className="block px-3 py-2 rounded hover:bg-blue-600 hover:text-white"
                >
                  Manage Transactions
                </Link>
              </li>
            </>
          )}

          {/* Common */}
          <li>
            <Link
              to="/dashboard/profile"
              className="block px-3 py-2 rounded hover:bg-blue-600 hover:text-white"
            >
              Profile
            </Link>
          </li>
        </ul>
      </aside>

      {/* Sidebar toggle for mobile */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button
          className="bg-blue-600 text-white p-2 rounded"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          {sidebarOpen ? "Close" : "Menu"}
        </button>
      </div>

      {/* Mobile Sidebar */}
      {sidebarOpen && (
        <aside className="fixed inset-0 bg-white z-40 p-4 md:hidden overflow-y-auto shadow-lg">
          <h2 className="text-xl font-bold mb-6">Dashboard</h2>
          <ul className="space-y-3">
            {role === "customer" && (
              <>
                <li>
                  <Link
                    to="/dashboard/my-policies"
                    className="block px-3 py-2 rounded hover:bg-blue-600 hover:text-white"
                    onClick={() => setSidebarOpen(false)}
                  >
                    My Policies
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard/payment-status"
                    className="block px-3 py-2 rounded hover:bg-blue-600 hover:text-white"
                    onClick={() => setSidebarOpen(false)}
                  >
                    Payment Status
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard/claim-request"
                    className="block px-3 py-2 rounded hover:bg-blue-600 hover:text-white"
                    onClick={() => setSidebarOpen(false)}
                  >
                    Claim Requests
                  </Link>
                </li>
              </>
            )}

            {role === "agent" && (
              <>
                <li>
                  <Link
                    to="/dashboard/assigned-customers"
                    className="block px-3 py-2 rounded hover:bg-blue-600 hover:text-white"
                    onClick={() => setSidebarOpen(false)}
                  >
                    Assigned Customers
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard/manage-blogs"
                    className="block px-3 py-2 rounded hover:bg-blue-600 hover:text-white"
                    onClick={() => setSidebarOpen(false)}
                  >
                    Manage Blogs
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard/policy-clearance"
                    className="block px-3 py-2 rounded hover:bg-blue-600 hover:text-white"
                    onClick={() => setSidebarOpen(false)}
                  >
                    Policy Clearance
                  </Link>
                </li>
              </>
            )}

            {role === "admin" && (
              <>
                <li>
                  <Link
                    to="/dashboard/manage-applications"
                    className="block px-3 py-2 rounded hover:bg-blue-600 hover:text-white"
                    onClick={() => setSidebarOpen(false)}
                  >
                    Manage Applications
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard/manage-users"
                    className="block px-3 py-2 rounded hover:bg-blue-600 hover:text-white"
                    onClick={() => setSidebarOpen(false)}
                  >
                    Manage Users
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard/manage-policies"
                    className="block px-3 py-2 rounded hover:bg-blue-600 hover:text-white"
                    onClick={() => setSidebarOpen(false)}
                  >
                    Manage Policies
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard/manage-transactions"
                    className="block px-3 py-2 rounded hover:bg-blue-600 hover:text-white"
                    onClick={() => setSidebarOpen(false)}
                  >
                    Manage Transactions
                  </Link>
                </li>
              </>
            )}

            <li>
              <Link
                to="/dashboard/profile"
                className="block px-3 py-2 rounded hover:bg-blue-600 hover:text-white"
                onClick={() => setSidebarOpen(false)}
              >
                Profile
              </Link>
            </li>
          </ul>
        </aside>
      )}

      {/* Main Content */}
      <main className="flex-1 p-6 md:ml-64">
        <h2 className="text-2xl font-bold mb-4">Welcome to your Dashboard!</h2>
        <p className="text-gray-700 mb-4">
          Here you can manage your policies, payments, claims, and profile.
        </p>

        {/* Nested Routes */}
        <Outlet />
      </main>
    </div>
  );
};

export default Dashboard;
