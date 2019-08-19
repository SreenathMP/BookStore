import CartItem from "./CartItem";
import loggedReducer from "./IsLogged";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  CartItem: CartItem,
  loggedReducer: loggedReducer
});

export default allReducers;
