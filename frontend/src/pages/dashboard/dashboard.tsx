"use client";

import {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import { getDashboard, logoutUser } from "../../services/api";

function Dashboard() {
  type User = {
    id: number
    name: string
    email: string
  };

  const navigate = useNavigate();
  const [user,setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const data = await getDashboard();
        setUser(data.user);
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
        navigate("/");
      }
    };

    fetchDashboardData();
  }, [navigate]);

  async function handleLogout() {
    await logoutUser();
    navigate("/login");
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-gray-900">MyApp</h1>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden sm:block text-right">
              <p className="text-sm font-semibold text-gray-800">
                {user ? user.name : "Loading..."}
              </p>

              <p className="text-xs text-gray-500">User</p>
            </div>
            <button
              onClick={handleLogout}
              type="button"
              className="
                                px-4 py-2
                                text-sm
                                font-semibold
                                text-red-600
                                border border-red-200
                                rounded-lg
                                hover:bg-red-50
                                transition
                            "
            > 
              Sair
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-10">
        <section className="mb-8">
          <p className="text-sm font-medium text-blue-600 mb-2">Dashboard</p>

          <h2 className="text-3xl font-bold text-gray-900">
            Welcome, {user ? user.name : "Loading..."}
          </h2>

          <p className="mt-2 text-gray-500">
            Great to have you back. Here's a summary of your account.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition">
            <div className="flex items-center justify-between mb-5">
              <div className="w-11 h-11 rounded-lg bg-blue-100 flex items-center justify-center">
                <span className="text-xl">📊</span>
              </div>

              <span className="text-xs font-medium text-gray-400">
                OVERVIEW
              </span>
            </div>

            <h3 className="text-lg font-semibold text-gray-900">Overview</h3>

            <p className="mt-2 text-sm text-gray-500">
              Check a summary of your account's main information.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition">
            <div className="flex items-center justify-between mb-5">
              <div className="w-11 h-11 rounded-lg bg-purple-100 flex items-center justify-center">
                <span className="text-xl">👤</span>
              </div>

              <span className="text-xs font-medium text-gray-400">PROFILE</span>
            </div>

            <h3 className="text-lg font-semibold text-gray-900">My Profile</h3>

            <p className="mt-2 text-sm text-gray-500">
              Visualize and manage your account information.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition">
            <div className="flex items-center justify-between mb-5">
              <div className="w-11 h-11 rounded-lg bg-gray-100 flex items-center justify-center">
                <span className="text-xl">⚙️</span>
              </div>

              <span className="text-xs font-medium text-gray-400">SYSTEM</span>
            </div>

            <h3 className="text-lg font-semibold text-gray-900">
              Configurations
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              Manage your account's settings and preferences.
            </p>
          </div>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
          <div className="lg:col-span-2 bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Summary</h3>

                <p className="text-sm text-gray-500 mt-1">
                  Account information
                </p>
              </div>

              <span className="text-2xl">📈</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-sm text-gray-500">Status</p>

                <p className="mt-1 text-lg font-semibold text-green-600">
                  Active
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-sm text-gray-500">Activities</p>

                <p className="mt-1 text-lg font-semibold text-gray-900">0</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-sm text-gray-500">Account Created</p>

                <p className="mt-1 text-lg font-semibold text-gray-900">Today</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center">
                <span className="text-2xl">👤</span>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900">{user ? user.name : "Loading..."}</h3>

                <p className="text-sm text-gray-500">User</p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <p className="text-xs text-gray-400 uppercase">Email</p>

                <p className="text-sm text-gray-700 mt-1">{user ? user.email : "Loading..."}</p>
              </div>

              <div>
                <p className="text-xs text-gray-400 uppercase">Status</p>

                <div className="flex items-center gap-2 mt-1">
                  <span className="w-2 h-2 bg-green-500 rounded-full" />

                  <p className="text-sm text-gray-700">Active Account</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-xl border border-gray-200 shadow-sm">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">
              Recent Activity
            </h3>

            <p className="text-sm text-gray-500 mt-1">
              Track the activities of your account.
            </p>
          </div>

          <div className="p-10 text-center">
            <div className="w-14 h-14 mx-auto rounded-full bg-gray-100 flex items-center justify-center mb-4">
              <span className="text-2xl">📭</span>
            </div>

            <h4 className="font-medium text-gray-900">
              No recent activity
            </h4>

            <p className="text-sm text-gray-500 mt-1">
              When there is any activity, it will appear here.
            </p>
          </div>
        </section>
      </main>

      <footer className="max-w-7xl mx-auto px-6 py-8">
        <p className="text-center text-xs text-gray-400">
          © {new Date().getFullYear()}. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default Dashboard;
