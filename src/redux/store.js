import { configureStore } from "@reduxjs/toolkit";

import productModalReducer from "./product-modal/productModalSlice";

import cartItemsReducer from "./shopping-cart/cartItemsSlide";

import themeReducer from "./theme/themeSlice";

export const store = configureStore({
  reducer: {
    productModal: productModalReducer,
    cartItems: cartItemsReducer,
    theme: themeReducer,
  },
});
