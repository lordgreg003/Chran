"use client";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation"; 
import { loginAdmin } from "@/redux/authSlice";
import { RootState, AppDispatch } from "@/redux/store";
import Image from "next/image";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const { loading, error, accessToken } = useSelector(
    (state: RootState) => state.auth
  );

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState<{
    text: string;
    type: "success" | "error";
  } | null>(null);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!username || !password) {
      setMessage({ text: "Please fill in all fields", type: "error" });
      return;
    }
    dispatch(loginAdmin({ username, password }));
  };

  useEffect(() => {
    if (accessToken) {
      setMessage({ text: "Login successful!", type: "success" });
      setTimeout(() => {
        router.push("/admin");
      }, 1000);
    } else if (error) {
      setMessage({ text: error, type: "error" });
    }
  }, [accessToken, error, router]);

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-[#2D2D2D] md:flex-row">
      {/* Organization Info - Now appears above form on mobile */}
      <div className="w-full md:w-1/2 bg-blue-600 dark:bg-blue-800 p-8 md:p-12 text-white">
        <div className="max-w-md mx-auto">
          <div className="mb-6 md:mb-8">
            <Image
              src="/mainlogo.webp" 
              alt="Organization Logo"
              width={100}
              height={50}
              className="mb-4 rounded-full"
            />
            <h1 className="text-2xl md:text-3xl font-bold mb-4">Welcome Back</h1>
          </div>
          
          <div className="space-y-4">
            <p className="text-lg md:text-xl font-semibold">Key Focus Areas:</p>
            <ul className="space-y-2 md:space-y-3">
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>Pro-democracy advocacy</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>Human rights protection</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>Civil society strengthening</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>Democratic governance</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>Social justice initiatives</span>
              </li>
            </ul>
            
            <p className="mt-4 md:mt-6 text-blue-100 dark:text-blue-200 text-sm md:text-base">
            &quot;A pro-democracy, human rights, and civil society organisation
              dedicated to strengthening and preserving democracy in Nigeria.
              Established with a commitment to justice and accountability, we have
              been at the forefront of the movement for democratic governance,
              social justice, and human rights across the country.&quot;
            </p>
          </div>
        </div>
      </div>

      {/* Login Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-6">
        <div className="w-full max-w-md p-6 md:p-8 space-y-6 bg-white rounded-lg shadow-md dark:bg-[#1E1E1E]">
          <h2 className="text-2xl font-semibold text-center text-gray-700 dark:text-white">
            Login
          </h2>

          {message && (
            <p
              className={`mt-4 text-center text-sm ${
                message.type === "success" ? "text-green-600" : "text-red-600"
              }`}
            >
              {message.text}
            </p>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Username <span className="text-red-500">*</span>
              </label>
              <input
                id="username"
                type="text"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-2 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white dark:border-gray-600"
                required
              />
            </div>

            <div className="relative">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Password <span className="text-red-500">*</span>
              </label>
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 pr-10 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white dark:border-gray-600"
                required
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center pt-6"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <FaEyeSlash className="h-5 w-5 text-gray-400" />
                ) : (
                  <FaEye className="h-5 w-5 text-gray-400" />
                )}
              </button>
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full px-4 py-2 font-medium text-white rounded-md transition-colors ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800"
              }`}
            >
              {loading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Logging in...
                </span>
              ) : (
                "Login"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;