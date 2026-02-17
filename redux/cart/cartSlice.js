const { createSlice } = require("@reduxjs/toolkit");

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    totalPrice: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const existingProduct = state.products.find(
        (p) => p.id === action.payload.id,
      );
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.products.push({ ...action.payload, quantity: 1 });
      }
      state.totalPrice += action.payload.price;
    },
    increaseQuantity: (state, action) => {
      const product = state.products.find((p) => p.id === action.payload.id);
      if (product && product.quantity < 10) {
        product.quantity += 1;
        state.totalPrice += product.price;
      }
    },
    decreaseQuantity: (state, action) => {
      const product = state.products.find((p) => p.id === action.payload.id);
      if (product && product.quantity > 1) {
        product.quantity -= 1;
        state.totalPrice -= product.price;
      }
    },
    removeFromCart: (state, action) => {
      const product = action.payload;
      state.products = state.products.filter((p) => p.id !== product.id);
      state.totalPrice -= product.price * product.quantity;
    },
  },
});

export const { addToCart, increaseQuantity, decreaseQuantity, removeFromCart } =
  cartSlice.actions;

export default cartSlice.reducer;
