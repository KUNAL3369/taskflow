import { useState } from "react";
import axios from "axios";
import "./register.css";


export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      await axios.post("http://localhost:5000/api/auth/register", {
        name,
        email,
        password,
      });

      alert("Registration successful");
      window.location.href = "/";
    } catch {
      alert("Registration failed");
    }
  };

  return (
  <div className="page">
    <div className="card">
      <h2 className="title">Register</h2>

      <div className="form-group">
        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="form-group">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="form-group">
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button className="primary-btn" onClick={handleRegister}>
        Register
      </button>

      <a href="/" className="link">
        Back to Login
      </a>
    </div>
  </div>
  );
}
