import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState("");

  const storeTokenInLS = (serverToken) => {
    return localStorage.setItem("token", serverToken);
  };

  let isLoggedIn = !!token;

  const LogoutUser = () => {
    setToken("");
    return localStorage.removeItem("token");
  };

  //getting user-data JWT Authentication
  const userAuthentication = async () => {
    const URL = "http://localhost:8080/user";
    try {
      const res = axios.get(URL);

      if (res.status === 200) {
        const data = res.json();
        console.log("From Admin Data", data);
        setUser(data);
      }
    } catch (error) {
      console.log("Error fetching Admin Details", error);
    }
  };

  useEffect(() => {
    userAuthentication();
  }, []);

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, storeTokenInLS, LogoutUser, user }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const authContextValue = useContext(AuthContext);
  if (!authContextValue) {
    throw new Error("use authUse outside the provider");
  }
  return authContextValue;
};
