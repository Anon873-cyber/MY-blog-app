"use client";

import React, { useState } from "react";
import authService from "@/utils/auth";
import { useRouter } from "next/navigation";

function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      email,
      password,
    });

    authService.login({ email, password })
      .then((response) => {
        console.log("Login successful:", response);
        // Handle successful login (e.g., redirect to admin dashboard)
        router.push("/manage-blog");
      })
      .catch((error) => {
        console.error("Login failed:", error);  
        setError("Invalid email or password");
        // Handle login error (e.g., show error message)
      });
  };

  return (
    <main className="flex min-h-[80vh] items-center justify-center px-6">
        {error && (
          <div className="rounded-md absolute top-20  w-md bg-red-100 p-4">
            <p className="text-sm text-center text-red-700">{error}</p>
          </div>
        )}
      <section className="w-full mt-20 max-w-md rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <div className="mb-8 text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-gray-500">
            Administration
          </p>

          <h1 className="text-3xl font-semibold text-gray-900">
            Admin Login
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Sign in to manage your website.
          </p>
        </div>


        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Email
            </label>

            <input
              id="email"
              type="email"
              placeholder="admin@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-gray-500"
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Password
            </label>

            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-gray-500"
            />
          </div>

          {/* Login button */}
          <button
            type="submit"
            className="w-full rounded-lg bg-gray-900 px-4 py-3 font-medium text-white transition active:scale-[0.98]"
          >
            Login
          </button>
        </form>
      </section>
    </main>
  );
}

export default AdminLogin;

