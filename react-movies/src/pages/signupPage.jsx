import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import { useAuth } from "../contexts/authContext";

export default function SignupPage() {
  const { signup } = useAuth();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");

    if (!username || !password) {
      setErrorMsg("Username and password are required.");
      return;
    }

    try {
      await signup(username, password);
      navigate("/login");
    } catch (err) {
      setErrorMsg(err.message);
    }
  };

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Sign up</h2>

      {errorMsg && (
        <div style={{ marginBottom: "1rem" }}>
          <p style={{ color: "red" }}>{errorMsg}</p>
        </div>
      )}

      <form onSubmit={onSubmit}>
        <div>
          <label>Username</label><br />
          <input value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>

        <div style={{ marginTop: "0.5rem" }}>
          <label>Password</label><br />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <small>
            Min 8 chars, include letter, number and special char.
          </small>
        </div>

        <button style={{ marginTop: "1rem" }} type="submit">Create account</button>
      </form>

      <p style={{ marginTop: "1rem" }}>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
}
