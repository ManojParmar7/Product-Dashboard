import { useContext } from "react";
import { AuthContext } from "./provider";

export const useAuth = () => useContext(AuthContext);
