import { useContext } from "react";
import { ProductContext } from "./provider";

export const useProduct = () => useContext(ProductContext);
