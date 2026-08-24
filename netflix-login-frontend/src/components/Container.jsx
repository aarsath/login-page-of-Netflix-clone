import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Container() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please enter email and password");
      return;
    }

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/login`,
        { email, password }
      );

      console.log("Backend response:", response.data);

      if (response.data.success) {
        navigate("/dashboard");
      } else {
        setError(response.data.message);
      }
    } catch (error) {
      if (error.response) {
        setError(error.response.data.message);
        setEmail("");
        setPassword("");
      } else {
        setError("Unable to connect to server");
      }
    }
  };

  return (
    <div
      className="w-full max-w-md rounded-lg bg-black/75 p-8 shadow-2xl"
      style={{ boxShadow: "0 20px 50px rgba(0, 0, 0, 0.85)" }}
    >
      <h1 className="mb-8 text-4xl font-bold text-center text-white">Sign In</h1>

      {error !== "" && (
        <p className="mb-6 text-center text-lg font-semibold text-red-400">
          {error}
        </p>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          onChange={(event) => setEmail(event.target.value)}
          type="email"
          placeholder="Email"
          value={email}
          className="w-full rounded border border-gray-700 bg-neutral-800 px-4 py-4 text-white outline-none placeholder:text-gray-400 focus:border-white"
        />
        <input
          onChange={(event) => setPassword(event.target.value)}
          type="password"
          placeholder="Password"
          value={password}
          className="w-full rounded border border-gray-700 bg-neutral-800 px-4 py-4 text-white outline-none placeholder:text-gray-400 focus:border-white"
        />
        <button
          type="submit"
          className="w-full rounded bg-red-600 py-4 text-xl font-bold text-white transition hover:bg-red-700"
        >
          Sign In
        </button>
      </form>
        <p className="mb-4 text-center text-xs text-gray-400">
        Demo project only — not affiliated with or endorsed by Netflix.
      </p>
    </div>
  );
}

export default Container;
