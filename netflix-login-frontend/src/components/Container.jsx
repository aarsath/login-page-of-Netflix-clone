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
      style={{ boxShadow
