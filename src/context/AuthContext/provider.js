import React, { createContext, useReducer, useEffect } from "react";
import { authReducer } from "./reducer";
import { AuthActionTypes } from "./constants";
import { showToast } from "../../components/Toaster";

export const AuthContext = createContext();

const initialState = {
  user: JSON.parse(localStorage.getItem("authUser")) || null,
  error: null,
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    if (state.user) {
      localStorage.setItem("authUser", JSON.stringify(state.user));
    } else {
      localStorage.removeItem("authUser");
    }
  }, [state.user]);

  const login = (username, password) => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const foundUser = users.find((u) => u.username === username);

    if (!foundUser) {
      showToast("User not available!", "error");
      dispatch({
        type: AuthActionTypes.SET_ERROR,
        payload: "User not available",
      });
      return false;
    }

    if (foundUser.password !== password) {
      showToast("Incorrect password!", "error");
      dispatch({
        type: AuthActionTypes.SET_ERROR,
        payload: "Incorrect password",
      });
      return false;
    }

    dispatch({ type: AuthActionTypes.LOGIN, payload: foundUser });
    showToast(`Login successful! Welcome ${foundUser.username}`, "success");
    return true;
  };

  const signup = (newUser) => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const userExists = users.some(
      (u) => u.email === newUser.email || u.username === newUser.username
    );

    if (userExists) {
      showToast("User already exists!", "error");
      return false;
    }

    const id = crypto.randomUUID ? crypto.randomUUID() : Date.now();
    const userWithId = { id, ...newUser };
    users.push(userWithId);
    localStorage.setItem("users", JSON.stringify(users));

    showToast("Signup successful! Please login", "success");
    return true;
  };

  const logout = () => {
    dispatch({ type: AuthActionTypes.LOGOUT });
    showToast("Logged out successfully!", "success");
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
