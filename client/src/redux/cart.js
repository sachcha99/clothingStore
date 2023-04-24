import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartItems: [],
        totalItems: 0,
    },
    reducers: {
        addItemToCart: (state, action) => {
            const itemIndex = state.cartItems.findIndex(item => item.id === action.payload.id);
            if (itemIndex >= 0) {
                state.cartItems[itemIndex].quantity += action.payload.quantity;
            } else {
                state.cartItems.push(action.payload);
                state.totalItems += 1;
            }
        },
        removeFromCart: (state, action) => {
            state.totalItems -= 1;
            state.cartItems = state.cartItems.filter(item => item.id !== action.payload.id);
        },
        updateQuantity: (state, action) => {
            const itemIndex = state.cartItems.findIndex(item => item.id === action.payload.id);
            state.cartItems[itemIndex].quantity = action.payload.quantity;
        },
    },
});
export const {
    addItemToCart,
    removeFromCart,
    updateQuantity
} = cartSlice.actions;
export default cartSlice.reducer;