import { ProductActionTypes } from "./constants";

export const productReducer = (state, action) => {
  switch (action.type) {
    case ProductActionTypes.SET_PRODUCTS:
      return { ...state, products: action.payload };
    case ProductActionTypes.ADD_PRODUCT:
      return { ...state, products: [...state.products, action.payload] };
    case ProductActionTypes.UPDATE_PRODUCT:
      return {
        ...state,
        products: state.products.map((p) =>
          p.id === action.payload.id ? action.payload : p
        ),
      };
    case ProductActionTypes.DELETE_PRODUCT:
      return {
        ...state,
        products: state.products.filter((p) => p.id !== action.payload),
      };
    default:
      return state;
  }
};
