import { createSlice } from "@reduxjs/toolkit";

const updateTotal = (state) => {
    state.value.total = state.value.items.reduce(
        (acc, currentItem) => acc += currentItem.price * currentItem.quantity,
        0
    ).toFixed(2);
    state.value.cuantity = state.value.items.reduce(
        (acc, currentItem) => acc += currentItem.quantity,
        0
    );
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        value: {
            updatedAt: "",
            total: null,
            items: [],
            cuantity: 0
        }
    },
    reducers: {
        addCartItem: (state, action) => {
            const productExists = state.value.items.some(item => item._id === action.payload._id)
            if (productExists) {
                state.value.items = state.value.items.map(item => {
                    if (item._id === action.payload._id) {
                        item.quantity += action.payload.quantity
                        return item
                    }
                    return item
                })
            } else state.value.items.push(action.payload)

            updateTotal(state);

            state.value.updatedAt = new Date().toLocaleString()
        },
        removeCartItem: (state, action) => {
            state.value.items = state.value.items.filter(item => item._id !== action.payload)
            updateTotal(state);
        },
        addItem: (state, action) => {
            state.value.items = state.value.items.map(item => {
                if (item._id === action.payload) {
                    item.quantity += 1
                    return item
                }
                return item
            })
            updateTotal(state);
        },
        removeItem: (state, action) => {
            state.value.items = state.value.items.map(item => {
                if (item._id === action.payload) {
                    if (item.quantity > 1) {
                        item.quantity -= 1
                        return item
                    }
                }
                return item
            })
            updateTotal(state);
        },
        removeCartItems: (state, action) => {
            state.value.items = [];
            updateTotal(state);
        }
    }
});

export const { addCartItem, removeCartItem, addItem, removeItem, removeCartItems } = cartSlice.actions;
export default cartSlice.reducer;