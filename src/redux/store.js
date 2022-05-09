import { configureStore } from "@reduxjs/toolkit";

import productModalReducer from "./product-modal/productModalSlice";

import cartItemsReducer from "./shopping-cart/cartItemsSlide";

import userReducer from "./user/userSlice";

import locationReducer from "./location/locationSlice";


export const store = configureStore({
  reducer: {
    productModal: productModalReducer,
    cartItems: cartItemsReducer,
    user: userReducer,
    location: locationReducer
  },
});
