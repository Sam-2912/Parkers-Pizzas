/*
[
  {
    pizza: {}
    quantity: 1,
    id: uuid()
  }
]
*/
const cartReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_CART_ITEM": {
      const newState = [...state].concat(action.payload);
      return newState;
    }
    case "REMOVE_CART_ITEM": {
      const newState = [...state].filter(
        (cartItem) => cartItem.id !== action.payload.id
      );
      return newState;
    }
    case "SET_CART_ITEM": {
      const newState = [...state].map((cartItem) =>
        cartItem.id === action.payload.id ? action.payload : cartItem
      );
      return newState;
    }
    default:
      return state;
  }
};

export default cartReducer;
