import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import modalReducer from "./modalSlice";

// REDUX STORE TO FEATURE ALL SLICES
const shopStore = configureStore({
    reducer: {
        shopCart: cartReducer,
        modal: modalReducer
    }
});

export default shopStore;   