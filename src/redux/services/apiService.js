import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiService = createApi({
  reducerPath: 'apiService',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://tudominio.com/api' }), // Cambia a la URL base de tu API
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => '/products',
      transformResponse: (response) => response.data, // Ajusta según la estructura de tu API
    }),
    getProductById: builder.query({
      query: (id) => `/products/${id}`,
      transformResponse: (response) => response.data,
    }),
    getCategories: builder.query({
      query: () => '/categories',
      transformResponse: (response) => response.data,
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductByIdQuery,
  useGetCategoriesQuery,
} = apiService;
