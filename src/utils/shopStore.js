import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import modalReducer from "./modalSlice";
import myOrderModalReducer from './myOrderModalSlice';

// REDUX STORE TO FEATURE ALL SLICES
const shopStore = configureStore({
    reducer: {
        shopCart: cartReducer,
        modal: modalReducer,
        myOrderModal: myOrderModalReducer,
    }
});

export default shopStore;   