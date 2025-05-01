import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "shopCart",
    initialState: {
        items: [], // The Cart is supposed to be empty at the beginning and it stores product objects
        searchWord: "", // The string gets updated as a user types in the search bar
        totalQuantity: 0, // Quantity of each item to be increased or decreased
    }, 
    reducers: {
        addProduct: (state, action) => {
            // Before we add a product, we have to first check the Cart array i.e., items[] for existing product
            const existingItem = state.items.find((product) => product.id === action.payload.id);
            if(existingItem) // If such product exists, we just increment the totalQuantity
            existingItem.quantity += 1;
            else
            state.items.push({...action.payload, quantity: 1});

            state.totalQuantity += 1; // Incrementing as we added 1 unit
        },
        removeProduct: (state, action) => {
            // Again checking the product existence in cart
            const isExistingItem = state.items.find((product) => product.id === action.payload.id);
            if(isExistingItem)
                 isExistingItem.quantity -= 1;
            else
                state.items = state.items.filter( (product) => product.id !== action.payload.id); 

            state.totalQuantity -= 1; // Now we decrement the number of items in cart.
        },
        modifyQuantity: (state, action) => {
            const { id, quantity} = action.payload;
            const isExistingItem = state.items.find( (product) => id === product.id);

        },
        setSearchWord: ( state, action) => {
            state.searchWord = action.payload; // The searchWord takes the input value from search bar
        },
    }
});

export const { addProduct, removeProduct, modifyQuantity, setSearchWord} = cartSlice.actions; // Exporting the cart actions

export default cartSlice.reducer;