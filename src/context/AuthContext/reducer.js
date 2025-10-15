// context/AuthContext/reducer.js
import { AuthActionTypes } from "./constants";

export const authReducer = (state, action) => {
  switch (action.type) {
    case AuthActionTypes.LOGIN:
      return { ...state, user: action.payload, error: null };
    case AuthActionTypes.LOGOUT:
      return { ...state, user: null, error: null };
    case AuthActionTypes.REGISTER:
      return { ...state, user: action.payload, error: null };
    case AuthActionTypes.SET_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
