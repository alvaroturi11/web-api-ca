import React, { createContext, useContext, useMemo, useState } from "react";

const API_BASE = "http://localhost:8080/api";
const TOKEN_KEY = "token";
const USERNAME_KEY = "username";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(() => localStorage.getItem(TOKEN_KEY));
  const [username, setUsername] = useState(() => localStorage.getItem(USERNAME_KEY));
  const isAuthenticated = !!token;

  const login = async (usernameInput, password) => {
    const response = await fetch(`${API_BASE}/users`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: usernameInput, password }),
    });

    const data = await response.json();

    if (!response.ok || !data?.success) {
      throw new Error(data?.msg || "Login failed");
    }

    const bearer = data.token;
    setToken(bearer);
    setUsername(usernameInput);

    localStorage.setItem(TOKEN_KEY, bearer);
    localStorage.setItem(USERNAME_KEY, usernameInput);

    return true;
  };

  const signup = async (usernameInput, password) => {
    const response = await fetch(`${API_BASE}/users?action=register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: usernameInput, password }),
    });

    const data = await response.json();

    if (!response.ok || !data?.success) {
      throw new Error(data?.msg || "Signup failed");
    }

    return true;
  };

  const logout = () => {
    setToken(null);
    setUsername(null);
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USERNAME_KEY);
  };

  const value = useMemo(
    () => ({
      token,
      username,
      isAuthenticated,
      login,
      signup,
      logout,
    }),
    [token, username, isAuthenticated]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
};
