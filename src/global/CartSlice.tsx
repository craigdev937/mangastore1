import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IMan, ICartState } from "../models/Interfaces";

const initialState: ICartState = {
    cartItems: JSON.parse(
        localStorage.getItem("cart")!
    ) || [],
    quantity: 0,
    total: 0
};

const CartSlice = createSlice({
    name: "cart",
    initialState: initialState,
    reducers: {
        addToCart: (
            state, 
            action: PayloadAction<IMan>
        ) => {
            const itemIndex = state.cartItems.findIndex(
                (item) => item.id === action.payload.id);
            if (itemIndex >= 0) {
                state.cartItems[itemIndex].quantity += 1;
            } else {
                const manga = {...action.payload, quantity: 1}
                state.cartItems.push(manga);
                localStorage.setItem(
                    "cart", 
                    JSON.stringify(state.cartItems)
                );
            }
        },
        cartTotal: (state) => {
            let quantity = 0;
            let total = 0;
            state.cartItems.forEach((item) => {
                quantity += item.quantity
                total += item.quantity * item.price
            })
            state.quantity = quantity;
            state.total = total;
        },
    }
});

export const CartActions = CartSlice.actions;
export const CartReducer = CartSlice.reducer;


