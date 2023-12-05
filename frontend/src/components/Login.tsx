import React, { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";

interface AppProps {}

const Login: React.FC<AppProps> = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [isRegistering, setIsRegistering] = useState<boolean>(false);

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();

    setLoading(true);
    setError(null);

    try {
      const response = await fetch("http://127.0.0.1:8080/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error("An error occurred during login");
      }

      const result = await response.json();
      console.log("Login successful:", result);
      localStorage.setItem("token", result.token);

      navigate("/");
    } catch (error: any) {
      console.error("Error logging in:", error);
      setError(error.message || "An error occurred during login");
    } finally {
      setLoading(false);
    }
  };

  const handleSwitchForm = () => {
    setIsRegistering(!isRegistering);
    setError(null);

    navigate("/signup");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded shadow-md w-96">
        {!isRegistering ? (
          <>
            <h1 className="text-2xl font-semibold mb-6">Login Page</h1>
            <form onSubmit={handleLogin}>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-600"
                >
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 p-2 w-full border rounded-md"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-600"
                >
                  Password:
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1 p-2 w-full border rounded-md"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white p-2 rounded-md"
                disabled={loading}
              >
                {loading ? "Logging in..." : "Login"}
              </button>
              {error && <p className="text-red-500 mt-2">{error}</p>}
              <button
                onClick={handleSwitchForm}
                className="w-full bg-green-500 text-white p-2 rounded-md mt-4"
              >
                Switch to Register
              </button>
            </form>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Login;
