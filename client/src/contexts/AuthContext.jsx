// AuthContext.js
import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  const login = async (mail, password) => {
    try {
      const response = await fetch("http://localhost:3000/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ mail, password }),
      });

      if (response.ok) {
        response.json().then(({ user }) => {
          setUser({ id: user.id, mail: user.mail, createdAt: user.createdAt });
          setAuthenticated(true);
        });
      } else {
        console.error(await response.json().message);
      }
    } catch (error) {
      console.error("Erreur lors de la connexion :", error);
    }
  };

  const logout = () => {
    setAuthenticated(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ authenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
