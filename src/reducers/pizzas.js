const pizzasReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_PIZZAS":
      const newState = [...action.payload];
      return newState;
    default:
      return state;
  }
};

export default pizzasReducer;
