import { configureStore } from "@reduxjs/toolkit";
import locationReducer from "./location/locationSlice";
import productModalReducer from "./productModal/productModalSlice";
import cartItemsReducer from "./shoppingCart/cartItemsSlide";
import userReducer from "./user/userSlice";

export const store = configureStore({
  reducer: {
    productModal: productModalReducer,
    cartItems: cartItemsReducer,
    user: userReducer,
    location: locationReducer
  },
});
