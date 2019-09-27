import CartItem from "./CartItem";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  CartItem: CartItem
});

export default rootReducer;