"use client";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation"; // Import from next/navigation
import { loginAdmin } from "@/redux/authSlice";
import { RootState, AppDispatch } from "@/redux/store";

const Login = () => {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter(); // Initialize router from next/navigation
  const { loading, error, accessToken } = useSelector(
    (state: RootState) => state.auth
  );

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    dispatch(loginAdmin({ username, password }));
  };

  useEffect(() => {
    if (accessToken) {
      alert("Login successful!"); // Display success alert
      router.push("/admin"); // Redirect to the admin dashboard
    }
    console.log("Token:", accessToken); // Log the token
  }, [accessToken, router]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center text-gray-700">
          Admin Login
        </h2>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full px-4 py-2 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />

        <button
          onClick={handleLogin}
          disabled={loading}
          className={`w-full px-4 py-2 font-semibold text-white rounded-md ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600"
          }`}
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        {error && (
          <p className="mt-4 text-sm text-red-500 text-center">{error}</p>
        )}
      </div>
    </div>
  );
};

export default Login;
