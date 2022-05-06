import { configureStore } from "@reduxjs/toolkit";

import productModalReducer from "./product-modal/productModalSlice";

import cartItemsReducer from "./shopping-cart/cartItemsSlide";

import userReducer from "./user/userSlice";

export const store = configureStore({
  reducer: {
    productModal: productModalReducer,
    cartItems: cartItemsReducer,
    user: userReducer,
  },
});
