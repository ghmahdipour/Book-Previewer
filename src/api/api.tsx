import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://my-json-server.typicode.com/ghmahdipour/TBooks`,
    prepareHeaders: (headers: any) => {
      return headers;
    },
  }),
  tagTypes: [],
  endpoints: () => ({}),
});
