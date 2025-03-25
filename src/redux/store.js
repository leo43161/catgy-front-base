import { configureStore } from '@reduxjs/toolkit';
import orderReducer from './slices/orderSlice';
import cartReducer from './slices/cartSlice';
import productReducer from './slices/productSlice';
import categoryReducer from './slices/categorySlice';
import uiReducer from './slices/uiSlice';
import { apiService } from './services/apiService';

export const store = configureStore({
  reducer: {
    orders: orderReducer,
    cart: cartReducer,
    products: productReducer,
    categories: categoryReducer,
    ui: uiReducer,
    [apiService.reducerPath]: apiService.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiService.middleware),
});

export default store;
