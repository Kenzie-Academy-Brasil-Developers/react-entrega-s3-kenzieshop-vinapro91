import { addCart, deletCart } from "./actions";

export const addCartThunk = (cartItem) => (dispatch, getState) => {
  const list = JSON.parse(localStorage.getItem("cart")) || [];
  list.push(cartItem);
  localStorage.setItem("cart", JSON.stringify(list));
  dispatch(addCart(list));
};

export const deletCartThunk = (itemIndex) => (dispatch, getState) => {
  const { cart } = getState();

  const filteredCart = cart.filter((_, index) => index !== itemIndex);

  localStorage.setItem("cart", JSON.stringify(filteredCart));
  dispatch(deletCart(filteredCart));
};
