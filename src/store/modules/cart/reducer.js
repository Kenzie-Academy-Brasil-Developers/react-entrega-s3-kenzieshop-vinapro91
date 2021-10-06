import { ADD_CART, DELET_CART } from "./actionsTypes";
const initialState = JSON.parse(localStorage.getItem("cart")) || [];
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CART:
      return action.cartItem;
    case DELET_CART:
      return action.deletItem;
    default:
      return state;
  }
};

export default cartReducer;
