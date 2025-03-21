import { INCREMENT_QUANTITY, DECREMENT_QUANTITY, REMOVE_FROM_CART } from "../actions";

const cartReducer = (state = [], action) => {
  switch (action.type) {
    case INCREMENT_QUANTITY:
      return state.map((item) =>
        item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item
      );

    case DECREMENT_QUANTITY:
      return state.map((item) =>
        item.id === action.payload && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );

    case REMOVE_FROM_CART:
      return state.filter((item) => item.id !== action.payload);

    default:
      return state;
  }
};

export default cartReducer;
