
import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }

  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    try {
      const stored = localStorage.getItem("user");
      if (stored) {
        setUser(JSON.parse(stored));
      }
    } catch (err) {
      localStorage.removeItem("user");
    } finally {
      setLoading(false);
    }
  }, []);


  const getUsers = () => {
    return JSON.parse(localStorage.getItem("users") || "[]");
  };

  const saveUsers = (users) => {
    localStorage.setItem("users", JSON.stringify(users));
  };


  const login = (data) => {
    setUser(data);
    localStorage.setItem("user", JSON.stringify(data));
  };


  const register = (data) => {
    const users = getUsers();

    const exists = users.find((u) => u.email === data.email);

    if (!exists) {
      users.push(data);
      saveUsers(users);
    }

    setUser(data);
    localStorage.setItem("user", JSON.stringify(data));
  };

  
  const updateUser = (data) => {
    setUser((prev) => {
      const updated = { ...prev, ...data };

     
      localStorage.setItem("user", JSON.stringify(updated));

   
      const users = getUsers();

      const updatedUsers = users.map((u) =>
        u.email === prev.email ? updated : u,
      );

      saveUsers(updatedUsers);

      return updated;
    });
  };


  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider
      value={{ user, login, register, logout, updateUser, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};
