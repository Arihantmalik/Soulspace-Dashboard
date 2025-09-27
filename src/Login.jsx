import { useState } from "react";

export default function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-600 to-blue-400">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md">
        <div className="flex flex-col items-center mb-6">
          {/* SoulSpace logo */}
         <img
  src="/soulspace-logo.png"
  alt="SoulSpace Logo"
  className="h-16 mb-2"
/>
          <h1 className="text-3xl font-bold text-blue-600 mb-2">SoulSpace</h1>
          <h2 className="text-2xl font-bold text-gray-800">Sign in to Dashboard</h2>
        </div>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email address"
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded font-semibold hover:bg-blue-700 transition"
          >
            Sign In
          </button>
        </form>
        <div className="flex justify-between mt-4 text-sm text-blue-600">
          <a href="#" className="hover:underline">Forgot password?</a>
          <a href="#" className="hover:underline">Help</a>
        </div>
      </div>
    </div>
  );
}