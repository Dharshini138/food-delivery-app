import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "@/lib/auth";

const Login: React.FC = () => {
  const [email, setEmail] = useState("test@test.com");
  const [password, setPassword] = useState("123456");
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    // Simulate login success (replace this with real API call)
    const fakeToken = "test-token-12345";
    const fakeUser = {
      name: "Test User",
      email: email,
    };

    auth.login(fakeToken, fakeUser);

    // Redirect to dashboard or home
    navigate("/dashboard");
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-6 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">Login</h2>
      <form onSubmit={handleLogin} className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 border rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 border rounded"
        />
        <button
          type="submit"
          className="w-full bg-orange-600 text-white py-2 rounded hover:bg-orange-500"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
