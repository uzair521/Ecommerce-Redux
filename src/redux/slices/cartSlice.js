// redux/slices/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.items.find((item) => item.id === action.payload.id);
      if (itemInCart) {
        itemInCart.quantity++; // Increment quantity if item already exists
      } else {
        state.items.push({ ...action.payload, quantity: 1 }); // Add new item to cart
      }
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
    incrementQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity++;
      }
    },
    decrementQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item) {
        if (item.quantity === 1) {
          item.quantity = 1; // Prevent quantity from going below 1
        } else {
          item.quantity--;
        }
      }
    },
  },
});

export const { addToCart, removeFromCart, incrementQuantity, decrementQuantity } = cartSlice.actions;

export default cartSlice.reducer;