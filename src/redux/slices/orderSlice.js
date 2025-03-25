import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    orders: [{
        id: 1,
        status: 'in-progress',
        time: '12:42 PM',
        items: [
            { name: 'Chicken Burger', quantity: 1, notes: "", price: 8.99 },
            { name: 'French Fries', quantity: 1, notes: "", price: 3.50 },
            { name: 'Coca-Cola', quantity: 1, notes: "", price: 2.50 }
        ],
        total: 14.99
    },
    {
        id: 2,
        status: 'completed',
        time: '11:30 AM',
        items: [
            { name: 'Margherita Pizza', quantity: 1, notes: "", price: 12.99 },
            { name: 'Caesar Salad', quantity: 1, notes: "", price: 7.50 },
            { name: 'Sparkling Water', quantity: 2, notes: "", price: 4.00 }
        ],
        total: 24.49
    },
    {
        id: 3,
        status: 'pagado',
        time: 'Yesterday, 8:15 PM',
        items: [
            { name: 'Beef Tacos', quantity: 2, notes: "", price: 9.98 },
            { name: 'Guacamole & Chips', quantity: 1, notes: "", price: 5.50 },
            { name: 'Lemonade', quantity: 1, notes: "", price: 3.00 }
        ],
        total: 18.48
    }],
    preferenceId: null,
};

const orderSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        setOrders: (state, action) => {
            state.orders = action.payload;
        },
        setPreferenceId: (state, action) => {
            state.preferenceId = action.payload;
        },
    },
});

export const { setOrders, setPreferenceId } = orderSlice.actions;
export default orderSlice.reducer;
