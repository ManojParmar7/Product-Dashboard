import { ProductActionTypes } from "./constants";

export const setProducts = (products) => ({
  type: ProductActionTypes.SET_PRODUCTS,
  payload: products,
});
export const addProduct = (product) => ({
  type: ProductActionTypes.ADD_PRODUCT,
  payload: product,
});
export const updateProduct = (product) => ({
  type: ProductActionTypes.UPDATE_PRODUCT,
  payload: product,
});
export const deleteProduct = (id) => ({
  type: ProductActionTypes.DELETE_PRODUCT,
  payload: id,
});
