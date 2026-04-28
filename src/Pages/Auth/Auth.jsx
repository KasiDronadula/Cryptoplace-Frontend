import React, { useState, useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:8080/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: form.email,
          password: form.password,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        login(data.token);
        navigate("/");
      } else {
        alert(data.message || "Login failed");
      }
    } catch (err) {
      alert("Server error");
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:8080/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: form.username,
          email: form.email,
          password: form.password,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Registration successful. Please login.");
        setIsLogin(true);
      } else {
        alert(data.message || "Registration failed");
      }
    } catch (err) {
      alert("Server error");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "#f5f5f5",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          width: "320px",
          padding: "25px",
          borderRadius: "10px",
          background: "#ffffff",
          boxShadow: "0 0 10px rgba(0,0,0,0.1)",
        }}
      >
        <h2 style={{ textAlign: "center", color: "#000" }}>
          {isLogin ? "Login" : "Register"}
        </h2>

        <form
          onSubmit={isLogin ? handleLogin : handleRegister}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}
        >
          {!isLogin && (
            <input
              type="text"
              name="username"
              placeholder="Enter Username"
              value={form.username}
              onChange={handleChange}
              required
              style={{
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
            />
          )}

          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={form.email}
            onChange={handleChange}
            required
            style={{
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />

          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={form.password}
            onChange={handleChange}
            required
            style={{
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />

          <button
            type="submit"
            style={{
              padding: "10px",
              background: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            {isLogin ? "Login" : "Register"}
          </button>
        </form>

        <p style={{ textAlign: "center", color: "#000", marginTop: "10px" }}>
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <span
            onClick={() => setIsLogin(!isLogin)}
            style={{
              color: "blue",
              cursor: "pointer",
              marginLeft: "5px",
              fontWeight: "bold",
            }}
          >
            {isLogin ? "Register" : "Login"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Auth;
