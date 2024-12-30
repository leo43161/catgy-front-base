import { createSlice } from "@reduxjs/toolkit";

const updateTotal = (state) => {
    state.value.total = state.value.items.reduce(
        (sum, item) => sum + item.price,
        0
    );
    state.value.cuantity = state.value.items.length;
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        value: {
            updatedAt: "",
            total: null,
            items: [],
            cuantity: 0,
            nextId: 1
        }
    },
    reducers: {
        addCartItem: (state, action) => {
            /* const productExists = state.value.items.some(item => item._id === action.payload._id)
            if (productExists) {
                state.value.items = state.value.items.map(item => {
                    if (item._id === action.payload._id) {
                        item.quantity += action.payload.quantity
                        return item
                    }
                    return item
                })
            } else state.value.items.push(...action.payload)*/
            state.value.items.push({
                ...action.payload,
                cartId: state.value.nextId // Asignar ID único
            });
            state.value.nextId += 1; // Incrementar el contador
            updateTotal(state);

            state.value.updatedAt = new Date().toLocaleString()
        },
        removeCartItem: (state, action) => {
            state.value.items = state.value.items.filter(item => item.cartId !== action.payload)
            updateTotal(state);
        },
        /*         addItem: (state, action) => {
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
                }, */
        removeCartItems: (state, action) => {
            state.value.items = [];
            state.value.total = 0;
            state.value.cuantity = 0;
            state.value.updatedAt = new Date().toLocaleString();
            state.value.nextId = 1; // Reiniciar el contador si se elimina todo
        },
        addAnnotation: (state, action) => {
            const { cartId, annotation } = action.payload;
            state.value.items = state.value.items.map(item => {
                if (item.cartId === cartId) {
                    return { ...item, annotation };
                }
                return item;
            });
        },
    }
});

export const { addCartItem, removeCartItem, addItem, removeItem, removeCartItems, addAnnotation } = cartSlice.actions;
export default cartSlice.reducer;