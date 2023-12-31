import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dummyjson.com",
  }),
  tagTypes: ["theapi"],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (limit: any) => `/products?limit=${limit}`,
      providesTags: ["theapi"],
    }),
    getCarts: builder.query({
      query: () => "/carts",
      providesTags: ["theapi"],
    }),
    getOneCarts: builder.query({
      query: (id: string) => ({
        url: `/carts/${id}`,
      }),
    }),
    getOneUser: builder.query({
      query: (id: string) => ({
        url: `/users/${id}`,
      }),
    }),
    getOneProduct: builder.query({
      query: (id: string) => ({
        url: `/products/${id}`,
      }),
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetCartsQuery,
  useGetOneCartsQuery,
  useGetOneUserQuery,
  useGetOneProductQuery,
} = api;
