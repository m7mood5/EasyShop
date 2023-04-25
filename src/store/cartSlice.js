import { createSlice, createSelector } from "@reduxjs/toolkit";


const initialState = { items: {}, reachadToMax: false }

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        closeReachToMax(state) {
            state.reachadToMax = false;
        },
        changeQuantity(state, action) {
            const { id, quantity } = action.payload;
            state.items[id] = quantity
        },
        addToCart(state, action) {
            const id = action.payload.id;
            const max = action.payload.max;
            if (state.items[id] === max) {
                state.reachadToMax = true;
            } else {
                if (state.reachadToMax) {
                    state.reachadToMax = false;
                }
                if (state.items[id]) {
                    state.items[id]++;
                } else {
                    state.items[id] = 1;
                }
            }

        },
        removeItem(state, action) {
            const id = action.payload;
            delete state.items[id];
        }
    }
})

export const totalCartQuantity = createSelector(
    (state) => state.cart.items,
    (items) => {
        let totalQuantity = 0;
        for (const id in items) {
            totalQuantity += items[id];
        }
        return totalQuantity;
    }
)

export const { closeReachToMax, changeQuantity, removeItem,addToCart } = cartSlice.actions;

export default cartSlice.reducer;