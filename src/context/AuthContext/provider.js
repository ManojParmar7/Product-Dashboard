// context/AuthContext/provider.js
import React, { createContext, useReducer, useEffect } from "react";
import { authReducer } from "./reducer";
import { AuthActionTypes } from "./constants";
import { toast } from "react-toastify";

export const AuthContext = createContext();

const initialState = {
  user: JSON.parse(localStorage.getItem("authUser")) || null,
  error: null,
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  // Sync user with localStorage
  useEffect(() => {
    if (state.user) {
      localStorage.setItem("authUser", JSON.stringify(state.user));
    } else {
      localStorage.removeItem("authUser");
    }
  }, [state.user]);

  // Login function
  const login = (email, password) => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const foundUser = users.find(
      (u) => u.email === email && u.password === password
    );

    if (!foundUser) {
      toast.error("Invalid email or password");
      dispatch({
        type: AuthActionTypes.SET_ERROR,
        payload: "Invalid credentials",
      });
      return false;
    }

    dispatch({ type: AuthActionTypes.LOGIN, payload: foundUser });
    toast.success("Login Successful!");
    return true;
  };

  // Signup function
  const signup = (newUser) => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const emailExists = users.some((u) => u.email === newUser.email);

    if (emailExists) {
      toast.error("Email already exists!");
      return false;
    }

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    dispatch({ type: AuthActionTypes.REGISTER, payload: newUser });
    toast.success("Sign Up Successful!");
    return true;
  };

  const logout = () => {
    dispatch({ type: AuthActionTypes.LOGOUT });
    toast.info("Logged out successfully");
  };

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        error: state.error,
        login,
        logout,
        signup,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
