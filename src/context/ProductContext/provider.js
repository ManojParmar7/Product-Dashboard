import React, { createContext, useReducer } from "react";
import { productReducer } from "./reducer";
import { ProductActionTypes } from "./constants";
import { showToast } from "../../components/Toaster";

export const ProductContext = createContext();

const initialState = {
  products: [],
};

export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialState);

  const addProduct = (newProduct) => {
    dispatch({ type: ProductActionTypes.ADD_PRODUCT, payload: newProduct });
    showToast("Product added successfully!", "success");
  };

  const updateProduct = (updatedProduct) => {
    dispatch({
      type: ProductActionTypes.UPDATE_PRODUCT,
      payload: updatedProduct,
    });
    showToast("Product updated successfully!", "success");
  };

  const deleteProduct = (productId) => {
    dispatch({ type: ProductActionTypes.DELETE_PRODUCT, payload: productId });
    showToast("Product deleted successfully!", "success");
  };

  const setProducts = (products) => {
    dispatch({ type: ProductActionTypes.SET_PRODUCTS, payload: products });
  };

  return (
    <ProductContext.Provider
      value={{
        products: state.products,
        addProduct,
        updateProduct,
        deleteProduct,
        setProducts,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
