import React, { createContext, useContext, useState, useEffect } from "react";
import useLocalStorage from "use-local-storage";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  let isAuth = localStorage.getItem("glamifytoken");
  const [isLogin, setIsLogin] = useLocalStorage(
    "isLogin",
    isAuth ? true : false
  );
  console.log(isAuth);

  return (
    <AuthContext.Provider value={{ isAuth, isLogin, setIsLogin }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
