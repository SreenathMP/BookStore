import CartItem from "./CartItem";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  CartItem: CartItem
});

export default allReducers;