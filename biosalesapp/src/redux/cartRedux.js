import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      const productId = action.payload._id;
      const productExists = state.products.find(
        (product) => product._id === productId
      );

      if (productExists) {
        productExists.quantity += action.payload.quantity;
      } else {
        state.products.push(action.payload);

        state.quantity += 1;
      }
    },
    removeProduct: (state, action) => {
      const cartItem = state.products.find(
        (product) => product._id === action.payload._id
      );
      if (!!cartItem && cartItem.quantity > 1) {
        cartItem.quantity -= 1;
      } else if (!!cartItem && cartItem.quantity === 1) {
        state.products.splice(state.products.indexOf(cartItem), 1);
      }
    },
    emptyCart: (state) => {
      state.products = [];
      state.quantity = 0;
      state.total = 0;
    },
  },
});

export const { addProduct, removeProduct, emptyCart } = cartSlice.actions;
export default cartSlice.reducer;
