import { combineReducers } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import todoReducer from "./slices/todoSlice";
import chatReducer from "./slices/chatSlice"
const rootReducers = combineReducers({
  cart: cartReducer,
  todos: todoReducer,
  chat:chatReducer
});
export default rootReducers;