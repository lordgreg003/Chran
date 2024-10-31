"use client";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginAdmin } from "@/redux/authSlice";
import { RootState, AppDispatch } from "@/redux/store";

const Login = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { loading, error, token } = useSelector(
    (state: RootState) => state.auth
  );
  console.log()

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    dispatch(loginAdmin({ username, password }));
  };

  return (
    <div className="login-container">
      <h2>Admin Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin} disabled={loading}>
        {loading ? "Logging in..." : "Login"}
      </button>
      {error && <p className="error">{error}</p>}
      {token && <p>Login successful!</p>}
    </div>
  );
};

export default Login;
