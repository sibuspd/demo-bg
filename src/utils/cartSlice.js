import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "shopCart",
    initialState: {
        items: [], // The Cart is supposed to be empty at the beginning and it stores product objects
        searchWord: "", // The string gets updated as a user types in the search bar
        totalQuantity: 0, // Quantity of each item to be increased or decreased
    }, 
    reducers: {

        // ADDING 1 UNIT OF A PRODUCT
        addProduct: (state, action) => {
            // Before we add a product, we have to first check the Cart array i.e., items[] for existing product
            const existingItem = state.items.find((product) => product.id === action.payload.id);
            if(existingItem) // If such product exists, we just increment the totalQuantity
            existingItem.quantity += 1;
            else
            state.items.push({...action.payload, quantity: 1});

            state.totalQuantity += 1; // Incrementing as we added 1 unit
        },

        // REMOVING 1 UNIT OF A PRODUCT
        removeProduct: (state, action) => {
            // Again checking the product existence in cart
            const existingItem = state.items.find((product) => product.id === action.payload.id);
            if(existingItem){
                if(existingItem.quantity === 1)
                    state.items = state.items.filter((product) => product.id !== action.payload.id); // Remove the product object from the array itself
                else
                existingItem.quantity -= 1; // Decrease the quantity of a product
            }
                 state.totalQuantity -= 1;
        },
        
        // STORES THE SEARCH QUERY MADE INSIDE SEARCH BAR
        setSearchWord: ( state, action) => {
            state.searchWord = action.payload; // The searchWord takes the input value from search bar
        },
    }
});

export const { addProduct, removeProduct, setSearchWord} = cartSlice.actions; // Exporting the cart actions

export default cartSlice.reducer;