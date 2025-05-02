import { createSlice } from "@reduxjs/toolkit";

const myOrderModalSlice = createSlice( {
    name: "myOrderModal",
    initialState: {
        isOpen: false,
        product: null,
    },

    reducers: {
        openMyOrderModal: (state, action ) => {
            state.isOpen = true;
        },
        closeMyOrderModal: (state) => {
            state.isOpen = false;
        },
    },
} );

export const { openMyOrderModal, closeMyOrderModal } = myOrderModalSlice.actions;
export  default myOrderModalSlice.reducer