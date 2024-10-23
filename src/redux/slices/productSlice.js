// Example productSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { apiService } from '../services/apiService';

const productSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(apiService.endpoints.fetchProducts.matchPending, (state) => {
        state.isLoading = true;
      })
      .addMatcher(apiService.endpoints.fetchProducts.matchFulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload;
      })
      .addMatcher(apiService.endpoints.fetchProducts.matchRejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error;
      });
  },
});

export default productSlice.reducer;
