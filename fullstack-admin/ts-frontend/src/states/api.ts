import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IProduct, IUser } from "../fixtures/types";
const REACT_APP_BASE_URL = import.meta.env.VITE_REACT_APP_BASE_URL;

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: REACT_APP_BASE_URL }),
  reducerPath: "adminApi",
  tagTypes: ["User", "Products", "Customers"],
  endpoints: (build) => ({
    getUser: build.query<IUser, string>({
      query: (id) => `general/user/${id}`,
      providesTags: ["User"],
    }),
    getProducts: build.query<IProduct[], undefined>({
      query: () => "client/products",
      providesTags: ["Products"],
    }),
    getCustomers: build.query<IUser[], undefined>({
      query: () => "client/customers",
      providesTags: ["Customers"],
    }),
  }),
});

export const { useGetUserQuery, useGetProductsQuery, useGetCustomersQuery } =
  api;
