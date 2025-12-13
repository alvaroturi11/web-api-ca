import React, { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router";
import { useAuth } from "../contexts/authContext";

export default function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

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
      await login(username, password);
      navigate(from, { replace: true });
    } catch (err) {
      setErrorMsg(err.message);
    }
  };

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Login</h2>

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
        </div>

        <button style={{ marginTop: "1rem" }} type="submit">Login</button>
      </form>

      <p style={{ marginTop: "1rem" }}>
        No account? <Link to="/signup">Sign up</Link>
      </p>
    </div>
  );
}
