import { combineReducers } from "redux";
import pizzasReducer from "./pizzas";
import cartReducer from "./cart";

const reducers = combineReducers({
  pizzas: pizzasReducer,
  cart: cartReducer,
});

export default reducers;
