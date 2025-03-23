"use client";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation"; 
import { loginAdmin } from "@/redux/authSlice";
import { RootState, AppDispatch } from "@/redux/store";

const Login = () => {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const { loading, error, accessToken } = useSelector(
    (state: RootState) => state.auth
  );

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState<{
    text: string;
    type: "success" | "error";
  } | null>(null);

  const handleLogin = () => {
    dispatch(loginAdmin({ username, password }));
  };

  useEffect(() => {
    if (accessToken) {
      setMessage({ text: "Login successful!", type: "success" }); // Show success message
      setTimeout(() => {
        router.push("/admin"); // Redirect after a short delay
      }, 1000);
    } else if (error) {
      setMessage({ text: error, type: "error" }); // Show error message if there is one
    }
  }, [accessToken, error, router]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-[#2D2D2D]">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md dark:bg-[#1E1E1E]">
        <h2 className="text-2xl font-semibold text-center text-gray-700">
          Admin Login
        </h2>

        {/* Success or Error Message */}
        {message && (
          <p
            className={`mt-4 text-center text-sm ${
              message.type === "success" ? "text-green-600" : "text-red-600"
            }`}
          >
            {message.text}
          </p>
        )}

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full px-4 py-2 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 dark:text-white"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 dark:text-white"
        />

        <button
          onClick={handleLogin}
          disabled={loading}
          className={`w-full px-4 py-2 font-semibold dark:text-[#E0E0E0] text-white rounded-md ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600"
          }`}
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </div>
    </div>
  );
};

export default Login;
