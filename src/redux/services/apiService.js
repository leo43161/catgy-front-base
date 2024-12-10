import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiService = createApi({
  reducerPath: 'apiService',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.URL_SERVER }), // Cambia a la URL base de tu API
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: ({ limit, offset, search, category }) => ({
        url: `/products`,
        params: { limit, offset, search, category },
      }),
    }),
    getProductById: builder.query({
      query: (id) => `/products/${id}`
    }),
    getCategories: builder.query({
      query: () => 'categories?type=all',
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductByIdQuery,
  useGetCategoriesQuery,
} = apiService;
