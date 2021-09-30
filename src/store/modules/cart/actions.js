import { ADD_CART, DELET_CART } from "./actionsTypes";

export const addCart = (cartItem) => ({
  type: ADD_CART,
  cartItem,
});

export const deletCart = (deletItem) => ({
  type: DELET_CART,
  deletItem,
});
