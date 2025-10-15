import { AuthActionTypes } from "./constants";

export const loginUser = (user) => ({
  type: AuthActionTypes.LOGIN,
  payload: user,
});
export const logoutUser = () => ({ type: AuthActionTypes.LOGOUT });
export const registerUser = (user) => ({
  type: AuthActionTypes.REGISTER,
  payload: user,
});
export const setAuthError = (error) => ({
  type: AuthActionTypes.SET_ERROR,
  payload: error,
});
