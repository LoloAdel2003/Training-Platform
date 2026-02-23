import { createSlice, PayloadAction } from "@reduxjs/toolkit";

/* =======================
   Types
======================= */
export type CartItem = {
  id: string;
  title: string;
  price: number;
  image: string;
  type:string;
  instructor: string;
};

type CartState = {
  items: CartItem[];
  totalPrice: number;
};

/* =======================
   Initial State
======================= */
const initialState: CartState = {
  items: [],
  totalPrice: 0,
};
/* =======================
   Slice
======================= */
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const exists = state.items.some(
        (item) => item.id === action.payload.id
      );

      if (!exists) {
        state.items.push(action.payload);
        state.totalPrice += action.payload.price;
      }
    },

    removeFromCart: (state, action: PayloadAction<string>) => {
      const removedItem = state.items.find(
        (item) => item.id === action.payload
      );

      if (removedItem) {
        state.totalPrice -= removedItem.price;
        state.items = state.items.filter(
          (item) => item.id !== action.payload
        );
      }
    },

    clearCart: (state) => {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

/* =======================
   Exports
======================= */
export const { addToCart, removeFromCart, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
