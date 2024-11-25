import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiService = createApi({
  reducerPath: 'apiService',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://catgy.netlify.app/api' }), // Cambia a la URL base de tu API
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: ({ limit, offset, search }) => ({
        url: `/products`,
        params: { limit, offset, search },
      }),
    }),
    getProductById: builder.query({
      query: (id) => `/products/${id}`,
      transformResponse: (response) => response.data,
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
