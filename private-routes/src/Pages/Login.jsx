import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [id, setId] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://reqres.in/api/login", {
        email: id,
        password: pass,
      });
      localStorage.setItem("authToken", response.data.token);
      setIsLoggedIn(true);
      console.log("Navigating to products page..."); // Debugging log
      navigate("/product");
      setError("");
    } catch (error) {
      setError("Login failed. Please check your credentials.");
      console.error("Login failed:", error);
    }
  };

  const logout = () => {
    localStorage.removeItem("authToken");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <div>
      {isLoggedIn ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <form onSubmit={login}>
          <input
            type="email"
            placeholder="Enter Your Email"
            onInput={(e) => setId(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter password"
            onInput={(e) => setPass(e.target.value)}
          />
          <button type="submit">Login</button>
          {error && <p>{error}</p>}
        </form>
      )}
    </div>
  );
};

export default Login;
