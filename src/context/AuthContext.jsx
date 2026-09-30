import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {

  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");

    return savedUser
      ? JSON.parse(savedUser)
      : null;
  });

  const login = (username, password, rememberMe) => {

    if (!username.trim()) {
      return {
        success: false,
        message: "Username is required"
      };
    }

    if (!password) {
      return {
        success: false,
        message: "Password is required"
      };
    }

    if (password.length < 6) {
      return {
        success: false,
        message: "Password must be at least 6 characters"
      };
    }

    // Simulated JWT token
    const token = `fake-jwt-token-${Date.now()}`;

    const userData = {
      username,
      token
    };

    setUser(userData);

    if (rememberMe) {

      localStorage.setItem(
        "user",
        JSON.stringify(userData)
      );

      localStorage.setItem(
        "token",
        token
      );

    } else {

      sessionStorage.setItem(
        "user",
        JSON.stringify(userData)
      );

      sessionStorage.setItem(
        "token",
        token
      );
    }

    return {
      success: true
    };
  };

  const logout = () => {

    setUser(null);

    localStorage.removeItem("user");
    localStorage.removeItem("token");

    sessionStorage.removeItem("user");
    sessionStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}