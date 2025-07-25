import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/" }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => "products",
      transformResponse:res=>{
        console.log(res?.products);
        return  res?.products||[];
      } 
    }),
    getProduct: builder.query({
      query: (product) => `product/search?q=${product}`,
      transformResponse:res=>{
        console.log(res?.products);
        return  res?.products||[];
      } 
    }),
  }),
});

export const { useLazyGetAllProductsQuery, useLazyGetProductQuery } = productApi;