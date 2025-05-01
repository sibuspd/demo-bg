import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
    name: "modal",
    initialState: {
        isOpen: false,
        product: null, // No product is retained in modal's memory initially
    },
    reducers: {

        // FUNCTION FOR MODAL TO POP UP
        openModal: (state, action) => {
            state.isOpen = true;
            state.product = action.payload; // Product data is passed on to the modal
        },

        // FUNCTION TO CLOSE THE MODAL
        closeModal: (state) => {
            state.isOpen = false;
            state.product = null; // All memory is lost once the modal is closed
        }
    }
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;